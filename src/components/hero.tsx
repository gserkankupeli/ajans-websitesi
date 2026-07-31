"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
    const t = useTranslations("Home.Hero");
    const bullets = t.raw("bullets") as string[];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-800 text-white">
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                        >
                            {t("title")} <span className="text-blue-400">{t("titleHighlight")}</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
                        >
                            {t("description")}
                        </motion.p>

                        {/* Bullets */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-3 mb-10 max-w-xl mx-auto md:mx-0"
                        >
                            {bullets.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start"
                        >
                            <div className="flex flex-col items-center md:items-start gap-2 max-w-[320px] mx-auto md:mx-0 w-full">

                                {/* Shiny Button */}
                                <button
                                    onClick={() => scrollToSection("randevu")}
                                    className="group relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-8 py-2 text-base font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-blue-700 gap-2">
                                        {t("cta")}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <span className="text-sm text-center md:text-center text-gray-500 font-medium tracking-wide mt-3 w-full">
                                    {t("ctaNote")}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Abstract Modern) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg md:max-w-none relative"
                    >
                        {/* Glowing Blob */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 animate-pulse" />

                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-8 flex flex-col justify-center items-center overflow-hidden">

                            {/* Animated Particles/Nodes */}
                            <div className="absolute inset-0">
                                {mounted && [...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                                        initial={{ x: Math.random() * 300, y: Math.random() * 300, opacity: 0.2 }}
                                        animate={{
                                            x: [Math.random() * 300, Math.random() * 300],
                                            y: [Math.random() * 300, Math.random() * 300],
                                            opacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear" }}
                                    />
                                ))}
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 w-full flex items-center gap-4 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold border border-blue-800">1</div>
                                    <div className="flex-1 h-2 bg-slate-700 rounded-full w-24" />
                                    <div className="w-16 h-2 bg-slate-700 rounded-full" />
                                </div>

                                <div className="h-8 w-px bg-gradient-to-b from-slate-700 to-blue-900" />

                                <div className="bg-slate-800/80 p-4 rounded-xl border border-blue-500/30 w-full flex items-center gap-4 scale-105 shadow-xl shadow-blue-900/20 backdrop-blur-md relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
                                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold relative z-10">2</div>
                                    <div className="flex-1 relative z-10">
                                        <div className="h-2 bg-slate-700 rounded-full w-3/4 mb-2" />
                                        <div className="h-2 bg-blue-500 rounded-full w-1/2" />
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-gradient-to-b from-blue-900 to-slate-700" />

                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 w-full flex items-center gap-4 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-lg bg-green-900/40 flex items-center justify-center text-green-400 font-bold border border-green-900/50">3</div>
                                    <div className="flex-1 h-2 bg-slate-700 rounded-full" />
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
