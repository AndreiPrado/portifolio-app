import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  locale: z.enum(["en", "pt", "es"]).default("en"),
});

const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_IPS = 5_000;
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // 10 minutos

const ipHits = new Map<string, { count: number; resetAt: number }>();

function pruneExpiredEntries() {
  const now = Date.now();
  for (const [ip, entry] of ipHits) {
    if (now > entry.resetAt) ipHits.delete(ip);
  }
}

setInterval(pruneExpiredEntries, CLEANUP_INTERVAL_MS);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    // Evita crescimento ilimitado: limpa entradas expiradas antes de inserir novo IP
    if (ipHits.size >= MAX_IPS) pruneExpiredEntries();
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid fields", details: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, message, locale } = parsed.data;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Salva no banco antes de tentar enviar (garante que nenhuma mensagem é perdida)
  const [row] = await db
    .insert(contactSubmissions)
    .values({ name, email, message, locale, ip, status: "pending" })
    .returning({ id: contactSubmissions.id });

  try {
    await Promise.all([
      sendContactNotification({ name, email, message, locale }),
      sendContactConfirmation({ name, email, locale }),
    ]);

    await db
      .update(contactSubmissions)
      .set({ status: "sent" })
      .where(eq(contactSubmissions.id, row.id));
  } catch (err) {
    console.error("Email send failed:", err);

    await db
      .update(contactSubmissions)
      .set({ status: "failed" })
      .where(eq(contactSubmissions.id, row.id));

    // Retorna sucesso mesmo assim — a mensagem foi salva no banco
    return NextResponse.json({ success: true, warning: "saved_email_failed" });
  }

  return NextResponse.json({ success: true });
}
