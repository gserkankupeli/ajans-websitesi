"use client";

import { Link } from "@/i18n/routing";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function AjansHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isBlogPage = pathname?.endsWith("/flowasistan/ajans/blog");
    const isAnyBlogPage = pathname?.includes("/flowasistan/ajans/blog");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string, path: string = "/flowasistan/ajans") => {
        if (!window.location.pathname.includes('/flowasistan/ajans') || window.location.pathname.includes('/flowasistan/ajans/blog')) {
            window.location.href = path + "#" + id;
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = path + "#" + id;
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            scrolled
                ? "bg-slate-800/90 backdrop-blur-md border-slate-700 shadow-md"
                : "bg-transparent border-transparent"
        )}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20 relative">

                    <div
                        onClick={() => {
                            if (window.location.pathname.endsWith('/flowasistan/ajans')) {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                                window.location.href = "/flowasistan/ajans";
                            }
                        }}
                        className="cursor-pointer flex items-center shrink-0 z-10"
                    >
                        <NextImage
                            src="/flowasistan-logo.svg"
                            alt="FlowAsistan Logo"
                            width={340}
                            height={85}
                            className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] scale-125 origin-left"
                            priority
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                        {!isAnyBlogPage ? (
                            <>
                                <button onClick={() => scrollToSection("nasil")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white transition-all drop-shadow-md">
                                    Nasıl Çalışır?
                                </button>
                                <button onClick={() => scrollToSection("ajans-icin")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white transition-all drop-shadow-md">
                                    Ajanslar İçin
                                </button>
                                <button onClick={() => scrollToSection("sss")} className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white transition-all drop-shadow-md">
                                    SSS
                                </button>
                                <Link href="/flowasistan/ajans/blog" className="cursor-pointer text-sm font-semibold text-blue-400 hover:text-blue-300 transition-all drop-shadow-md">
                                    Blog
                                </Link>
                            </>
                        ) : isBlogPage ? (
                            <Link href="/flowasistan/ajans" className="cursor-pointer text-sm font-semibold text-white/80 hover:text-white transition-all flex items-center gap-2 group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                FlowAsistan'a Dön
                            </Link>
                        ) : null}
                    </div>

                    <div className="hidden md:flex items-center z-10">
                        <button
                            onClick={() => scrollToSection("randevu")}
                            className="bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1D4ED8] transition-colors shadow-sm cursor-pointer flex items-center gap-2 group"
                        >
                            Kısa Bir Tanışma Planla
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="md:hidden z-10">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/80 hover:text-white" aria-label="Toggle Menu">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-slate-800 border-b border-slate-700 shadow-lg absolute top-full left-0 w-full">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {!isAnyBlogPage ? (
                            <>
                                <button onClick={() => scrollToSection("nasil")} className="text-base font-medium text-white/80 hover:text-white py-2 text-left">Nasıl Çalışır?</button>
                                <button onClick={() => scrollToSection("ajans-icin")} className="text-base font-medium text-white/80 hover:text-white py-2 text-left">Ajanslar İçin</button>
                                <button onClick={() => scrollToSection("sss")} className="text-base font-medium text-white/80 hover:text-white py-2 text-left">SSS</button>
                                <Link href="/flowasistan/ajans/blog" className="text-base font-medium text-blue-400 hover:text-blue-300 py-2 block" onClick={() => setIsOpen(false)}>Blog</Link>
                            </>
                        ) : isBlogPage ? (
                            <Link href="/flowasistan/ajans" className="text-base font-medium text-white/80 hover:text-white py-2 flex items-center gap-2 group w-full border-b border-slate-700 pb-4" onClick={() => setIsOpen(false)}>
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                FlowAsistan'a Dön
                            </Link>
                        ) : null}
                        {!isAnyBlogPage && <hr className="border-slate-700" />}
                        <div className="pt-2">
                            <button
                                onClick={() => scrollToSection("randevu")}
                                className="bg-[#2563EB] text-white px-4 py-3 rounded-xl text-base font-medium hover:bg-[#1D4ED8] transition-colors w-full cursor-pointer flex items-center justify-center gap-2 group"
                            >
                                Kısa Bir Tanışma Planla
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div id="top" className="absolute top-0 opacity-0 pointer-events-none" />
        </nav>
    );
}
