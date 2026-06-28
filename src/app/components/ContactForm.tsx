"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(data: { name: string; email: string; message: string }): FieldErrors {
    const errors: FieldErrors = {};
    if (data.name.trim().length < 2) errors.name = t("validationName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t("validationEmail");
    if (data.message.trim().length < 10) errors.message = t("validationMessage");
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      locale,
    };

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">{t("successTitle")}</h3>
        <p className="text-gray-300 text-sm max-w-xs">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-gray-200 mb-2">
          {t("nameLabel")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={() => setFieldErrors((e) => ({ ...e, name: undefined }))}
          className={`w-full bg-gray-800 border rounded-lg p-3 text-white transition ${
            fieldErrors.name
              ? "border-red-500 focus:border-red-500 focus:outline-none"
              : "border-gray-700 focus:border-purple-500 focus:outline-none"
          }`}
          placeholder={t("namePlaceholder")}
        />
        {fieldErrors.name && (
          <p className="mt-1 text-red-400 text-xs">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-200 mb-2">
          {t("emailLabel")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={() => setFieldErrors((e) => ({ ...e, email: undefined }))}
          className={`w-full bg-gray-800 border rounded-lg p-3 text-white transition ${
            fieldErrors.email
              ? "border-red-500 focus:border-red-500 focus:outline-none"
              : "border-gray-700 focus:border-purple-500 focus:outline-none"
          }`}
          placeholder={t("emailPlaceholder")}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-red-400 text-xs">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-200 mb-2">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          onChange={() => setFieldErrors((e) => ({ ...e, message: undefined }))}
          className={`w-full bg-gray-800 border rounded-lg p-3 text-white transition ${
            fieldErrors.message
              ? "border-red-500 focus:border-red-500 focus:outline-none"
              : "border-gray-700 focus:border-purple-500 focus:outline-none"
          }`}
          placeholder={t("messagePlaceholder")}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-red-400 text-xs">{fieldErrors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{t("errorMessage")}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="button-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t("sending") : t("sendButton")}
      </button>
    </form>
  );
}
