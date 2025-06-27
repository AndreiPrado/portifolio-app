"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-space-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Logo */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="text-white font-bold text-xl">Portfolio<span className="text-purple-500">Space</span></span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="nav-link-active">Início</Link>
                    <Link href="/sobre" className="nav-link">Sobre</Link>
                    <Link href="/experiencia" className="nav-link">Experiência</Link>
                    <Link href="/projetos" className="nav-link">Projetos</Link>
                    <Link href="/contato" className="nav-link">Contato</Link>
                    <Link href="/contato" className="button-primary ml-4">Download CV</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50" 
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-space-dark/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <nav className="flex flex-col items-center gap-6 text-lg">
                        <Link href="/" className="nav-link-active" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
                        <Link href="/sobre" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
                        <Link href="/experiencia" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experiência</Link>
                        <Link href="/projetos" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projetos</Link>
                        <Link href="/contato" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
                        <Link href="/contato" className="button-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>Download CV</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
