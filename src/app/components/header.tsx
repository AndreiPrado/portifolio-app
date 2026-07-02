"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const navHrefs = [
  { href: "/" as const, key: "home" },
  { href: "/about" as const, key: "about" },
  { href: "/experience" as const, key: "experience" },
  { href: "/projects" as const, key: "projects" },
  { href: "/contact" as const, key: "contact" },
];

const localeOptions = [
  { locale: "en", flag: "🇺🇸", label: "English" },
  { locale: "pt", flag: "🇧🇷", label: "Português" },
  { locale: "es", flag: "🇪🇸", label: "Español" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Nav");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <header
      className={`fixed w-full z-50 ${isScrolled ? "bg-space-black/80 py-3" : "bg-transparent py-5"
        } ${isMobileMenuOpen ? "" : "backdrop-blur"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center md:mr-6 lg:mr-0">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-xl md:hidden lg:block">
              Andrei <span className="text-purple-500">Prado</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:gap-4 lg:gap-8">
          {navHrefs.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "nav-link-active" : "nav-link"}
            >
              {t(key)}
            </Link>
          ))}

          {/* Locale switcher */}
          <div className="flex items-center gap-0.5 ml-2 border border-gray-700 rounded-full px-1 py-0.5">
            {localeOptions.map(({ locale: loc, flag, label }) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                title={label}
                className={`w-8 h-7 flex items-center justify-center rounded-full text-base transition-colors ${locale === loc ? "bg-purple-600" : "hover:bg-gray-700/60"
                  }`}
              >
                {flag}
              </button>
            ))}
          </div>

          <a
            href="/CV_Andrei_Prado.pdf"
            className="button-primary ml-2 md:text-xs md:p-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("downloadCV")}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-transparent backdrop-blur flex flex-col items-center justify-center z-40 transition-all duration-300 h-screen md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
            }`}
        >
          <nav className="flex flex-col items-center gap-6 text-md">
            {navHrefs.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "nav-link-active" : "nav-link"}
                onClick={closeMobileMenu}
              >
                {t(key)}
              </Link>
            ))}

            {/* Mobile locale switcher */}
            <div className="flex items-center gap-2 mt-2">
              {localeOptions.map(({ locale: loc, flag, label }) => (
                <button
                  key={loc}
                  onClick={() => { switchLocale(loc); closeMobileMenu(); }}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${locale === loc
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "border-gray-600 text-gray-400 hover:text-white"
                    }`}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <a
              href="/CV_Andrei_Prado.pdf"
              className="button-primary mt-4 text-sm px-6 py-3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              {t("downloadCV")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
