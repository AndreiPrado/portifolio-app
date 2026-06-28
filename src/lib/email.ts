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
      title: "New message via portfolio",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
    },
    pt: {
      subject: (name: string) => `Nova mensagem de ${name} — Portfólio`,
      title: "Nova mensagem pelo portfólio",
      labelName: "Nome",
      labelEmail: "E-mail",
      labelMessage: "Mensagem",
    },
    es: {
      subject: (name: string) => `Nuevo mensaje de ${name} — Portafolio`,
      title: "Nuevo mensaje por el portafolio",
      labelName: "Nombre",
      labelEmail: "Correo",
      labelMessage: "Mensaje",
    },
  },
  confirmation: {
    en: {
      subject: "Got your message — Andrei Prado",
      greeting: (name: string) => `Hi, ${name}!`,
      body: "I received your message and will get back to you shortly.",
    },
    pt: {
      subject: "Recebi sua mensagem — Andrei Prado",
      greeting: (name: string) => `Olá, ${name}!`,
      body: "Recebi sua mensagem e entrarei em contato em breve.",
    },
    es: {
      subject: "Recibí tu mensaje — Andrei Prado",
      greeting: (name: string) => `¡Hola, ${name}!`,
      body: "Recibí tu mensaje y me pondré en contacto contigo pronto.",
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
        <h2 style="color: #7c3aed;">${t.title}</h2>
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
        <p style="color: #6b7280; font-size: 14px;">— Andrei Prado</p>
      </div>
    `,
  });
}
