"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "About" },
  { href: "/experiencia", label: "Experience" },
  { href: "/projetos", label: "Projects" },
  { href: "/contato", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-space-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-xl">
              Andrei <span className="text-purple-500">Prado</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "nav-link-active" : "nav-link"}
            >
              {label}
            </Link>
          ))}
          <a
            href="/CV_Andrei_Prado.pdf"
            className="button-primary ml-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
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
          className={`fixed inset-0 bg-space-dark/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "nav-link-active" : "nav-link"}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              className="button-primary mt-4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
