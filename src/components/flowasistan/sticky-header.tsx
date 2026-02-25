"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { ArrowLeft } from "lucide-react";

export function FlowAsistanStickyHeader() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isBlogPage = pathname.includes("/flowasistan/blog");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (isBlogPage) {
            window.location.href = `/tr/flowasistan#${id}`;
            return;
        }

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
                <Link
                    href="/flowasistan"
                    className="cursor-pointer flex items-center"
                >
                    <NextImage
                        src="/flowasistan-logo.svg"
                        alt="FlowAsistan Logo"
                        width={280}
                        height={60}
                        className="w-[180px] md:w-[240px] h-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Links (Optional & Minimal) */}
                <nav className="hidden md:flex items-center space-x-6">
                    {isBlogPage ? (
                        <Link href="/flowasistan" className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                            <ArrowLeft className="w-4 h-4" /> FlowAsistan'a Dön
                        </Link>
                    ) : (
                        <>
                            <button onClick={() => scrollToSection("nasil")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                                Nasıl Çalışır?
                            </button>
                            <button onClick={() => scrollToSection("ozellikler")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                                Özellikler
                            </button>
                            <button onClick={() => scrollToSection("sss")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white hover:text-shadow-sm transition-all drop-shadow-md">
                                SSS
                            </button>
                            <Link href="/flowasistan/blog" className="cursor-pointer text-sm font-semibold text-blue-400 hover:text-blue-300 hover:text-shadow-sm transition-all drop-shadow-md">
                                Blog
                            </Link>
                        </>
                    )}
                </nav>

                {/* CTA Button */}
                {isBlogPage ? (
                    <Link
                        href="/flowasistan#randevu"
                        className="cursor-pointer bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
                    >
                        Kısa Bir Tanışma Planla
                    </Link>
                ) : (
                    <button
                        onClick={() => scrollToSection("randevu")}
                        className="cursor-pointer bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm"
                    >
                        Kısa Bir Tanışma Planla
                    </button>
                )}
            </div>
        </header>
    );
}
