"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

export function BlogHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                {/* Logo - Navigates to home */}
                <Link href="/" className="cursor-pointer flex items-center">
                    <NextImage
                        src="/logo.svg"
                        alt="Flowixy Logo"
                        width={160}
                        height={40}
                        className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        priority
                    />
                </Link>

                {/* CTA Button - Navigates to home calendar anchor */}
                <Link
                    href="/#randevu"
                    className="cursor-pointer bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
                >
                    Kısa Bir Tanışma Planla
                </Link>
            </div>
        </header>
    );
}
