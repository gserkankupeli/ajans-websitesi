"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmlakNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Sadece blog listesi sayfasında (örn: /tr/flowasistan/emlak/blog) FlowAsistan'a Dön butonu gösterilir
    const isBlogPage = pathname?.endsWith("/flowasistan/emlak/blog");
    // Genel olarak blog sayfalarından biri mi?
    const isAnyBlogPage = pathname?.includes("/flowasistan/emlak/blog");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "Nasıl Çalışır?", href: "nasil", isScroll: true },
        { name: "Emlak İçin", href: "emlak-icin", isScroll: true },
        { name: "SSS", href: "sss", isScroll: true },
        { name: "Blog", href: "/flowasistan/emlak/blog", isScroll: false, colorClass: "text-blue-500 hover:text-blue-400" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled ? "bg-slate-900/95 backdrop-blur-md border-slate-800 shadow-sm" : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20 md:h-24 relative">
                    {/* Logo/Brand */}
                    <Link
                        href="/flowasistan/emlak"
                        className="flex items-center space-x-2 z-10 cursor-pointer"
                        onClick={(e) => {
                            if (window.location.pathname.match(/\/flowasistan\/emlak$/)) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setIsOpen(false);
                            }
                        }}
                    >
                        <img src="/flowasistan-logo.svg" alt="FlowAsistan Logo" className="h-14 md:h-20 lg:h-24 w-auto max-w-[600px] -ml-2" />
                    </Link>

                    {/* Desktop Nav - Centered absolute */}
                    <div className="hidden md:flex flex-1 justify-center items-center absolute inset-0 pointer-events-none">
                        <div className="flex space-x-6 pointer-events-auto">
                            {!isAnyBlogPage ? (
                                navLinks.map((link) => (
                                    link.isScroll ? (
                                        <button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.href)}
                                            className={cn("text-base md:text-lg font-medium transition-colors cursor-pointer", link.colorClass || "text-slate-300 hover:text-white")}
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={cn("text-base md:text-lg font-medium transition-colors cursor-pointer", link.colorClass || "text-slate-300 hover:text-white")}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))
                            ) : isBlogPage ? (
                                <Link
                                    href="/flowasistan/emlak"
                                    className="text-base md:text-lg font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    FlowAsistan'a Dön
                                </Link>
                            ) : null}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center z-10 pointer-events-auto">
                        <Link
                            href={isAnyBlogPage ? "/flowasistan/emlak#randevu" : "#randevu"}
                            onClick={(e) => {
                                if (!isAnyBlogPage) {
                                    e.preventDefault();
                                    scrollToSection("randevu");
                                }
                            }}
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-base font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50 flex items-center gap-2 group cursor-pointer"
                        >
                            Kısa Bir Tanışma Planla
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden z-10 pointer-events-auto">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white cursor-pointer"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {!isAnyBlogPage ? (
                                <>
                                    {navLinks.map((link) => (
                                        link.isScroll ? (
                                            <button
                                                key={link.name}
                                                onClick={() => scrollToSection(link.href)}
                                                className="text-base font-medium text-slate-300 hover:text-white py-2 block text-left w-full cursor-pointer"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-base font-medium text-slate-300 hover:text-white py-2 block w-full cursor-pointer"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )
                                    ))}
                                </>
                            ) : isBlogPage ? (
                                <Link
                                    href="/flowasistan/emlak"
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-slate-300 hover:text-white py-4 flex items-center gap-2 w-full border-b border-slate-800/50 cursor-pointer group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    FlowAsistan'a Dön
                                </Link>
                            ) : null}

                            {!isAnyBlogPage && <hr className="border-slate-800" />}

                            <div className="flex flex-col pt-2">
                                <Link
                                    href={isAnyBlogPage ? "/flowasistan/emlak#randevu" : "#randevu"}
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        if (!isAnyBlogPage) {
                                            e.preventDefault();
                                            scrollToSection("randevu");
                                        }
                                    }}
                                    className="bg-blue-600 text-white px-4 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition-colors text-center w-full shadow-lg shadow-blue-900/50 flex justify-center items-center gap-2 group cursor-pointer"
                                >
                                    Kısa Bir Tanışma Planla
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
