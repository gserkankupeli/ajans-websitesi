"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import NextImage from "next/image";
import { Spotlight } from "@/components/ui/spotlight";

export function FlowAsistanHero() {
    const t = useTranslations("FlowAsistan.Hero");
    const bullets = t.raw("bullets") as string[];

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
                            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                        >
                            {t("titleStart")} <span className="text-blue-400">{t("titleHighlight")}</span>{t("titleEnd")}
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

                    {/* Right Visual (Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg md:max-w-none relative hidden md:block"
                    >
                        {/* Glowing Blob */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 animate-pulse" />

                        <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-2 flex flex-col justify-center items-center overflow-hidden">
                            <NextImage
                                src="/flowasistan-hero-hq.png"
                                alt="FlowAsistan AI Model"
                                width={600}
                                height={600}
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
