"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

export function StickyHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-slate-800/90 backdrop-blur-md border-slate-700 shadow-md"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="cursor-pointer flex items-center"
                >
                    <NextImage
                        src="/logo.svg"
                        alt="Flowixy Logo"
                        width={160}
                        height={40}
                        className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        priority
                    />
                </div>

                {/* Desktop Links (Optional & Minimal) */}
                <nav className="hidden md:flex items-center space-x-6">
                    <button onClick={() => scrollToSection("neler-yapiyoruz")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                        Neler Yapıyoruz
                    </button>
                    <button onClick={() => scrollToSection("ornekler")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                        Projeler
                    </button>
                    <button onClick={() => scrollToSection("surec")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                        Süreç
                    </button>
                    <button onClick={() => scrollToSection("sss")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                        Sık Sorulan Sorular
                    </button>
                    <Link href="/blog" className="cursor-pointer text-sm font-semibold text-blue-400 hover:text-blue-300 hover:text-shadow-sm transition-all drop-shadow-md">
                        Blog
                    </Link>
                </nav>

                {/* CTA Button */}
                <button
                    onClick={() => scrollToSection("randevu")}
                    className="cursor-pointer bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
                >
                    Kısa Bir Tanışma Planla
                </button>
            </div>
        </header>
    );
}
