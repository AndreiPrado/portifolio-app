import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import "../globals.css";
import "../components/header.css";

import Header from "../components/header";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import ParallaxProviderWrapper from "../components/ParallaxProviderWrapper";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andrei Prado — Tech Lead & Full Stack Software Engineer",
  description:
    "Personal portfolio of Andrei Prado, Tech Lead and Full Stack Software Engineer focused on Node.js, React, TypeScript, GCP and GenAI solutions.",
  keywords: [
    "Andrei Prado",
    "Tech Lead",
    "Software Engineer",
    "Full Stack Developer",
    "Node.js",
    "React",
    "TypeScript",
    "GCP",
    "GenAI",
    "Cloud Architecture",
    "Technical Leadership",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <div lang={locale} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NextIntlClientProvider messages={messages}>
        <ParallaxProviderWrapper>
          <StarBackground />
          <Header />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ParallaxProviderWrapper>
      </NextIntlClientProvider>
    </div>
  );
}
