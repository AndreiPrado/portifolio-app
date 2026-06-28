import { Resend } from "resend";

const FROM = process.env.CONTACT_FROM!;

type Locale = "en" | "pt" | "es";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const i18n = {
  notification: {
    en: {
      subject: (name: string) => `New message from ${name} — Portfolio`,
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
    },
    pt: {
      subject: (name: string) => `Nova mensagem de ${name} — Portfólio`,
      labelName: "Nome",
      labelEmail: "E-mail",
      labelMessage: "Mensagem",
    },
    es: {
      subject: (name: string) => `Nuevo mensaje de ${name} — Portafolio`,
      labelName: "Nombre",
      labelEmail: "Correo",
      labelMessage: "Mensaje",
    },
  },
  confirmation: {
    en: {
      subject: "Message received!",
      greeting: (name: string) => `Hi, ${name}!`,
      body: "Thanks for reaching out. I'll get back to you as soon as possible.",
    },
    pt: {
      subject: "Mensagem recebida!",
      greeting: (name: string) => `Olá, ${name}!`,
      body: "Obrigado pelo contato. Retornarei em breve.",
    },
    es: {
      subject: "¡Mensaje recibido!",
      greeting: (name: string) => `¡Hola, ${name}!`,
      body: "Gracias por escribir. Te responderé lo antes posible.",
    },
  },
};

export async function sendContactNotification(data: {
  name: string;
  email: string;
  message: string;
  locale: Locale;
}) {
  const t = i18n.notification[data.locale];

  await getResend().emails.send({
    from: FROM,
    to: process.env.CONTACT_EMAIL!,
    replyTo: data.email,
    subject: t.subject(data.name),
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <p><strong>${t.labelName}:</strong> ${data.name}</p>
        <p><strong>${t.labelEmail}:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>${t.labelMessage}:</strong></p>
        <blockquote style="border-left: 3px solid #7c3aed; padding-left: 12px; color: #374151;">
          ${data.message.replace(/\n/g, "<br>")}
        </blockquote>
      </div>
    `,
  });
}

export async function sendContactConfirmation(data: {
  name: string;
  email: string;
  locale: Locale;
}) {
  const t = i18n.confirmation[data.locale];

  await getResend().emails.send({
    from: FROM,
    to: data.email,
    subject: t.subject,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">${t.greeting(data.name)}</h2>
        <p>${t.body}</p>
      </div>
    `,
  });
}
