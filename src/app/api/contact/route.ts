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
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? req.headers.get("x-real-ip") ?? null;

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
