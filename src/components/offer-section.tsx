"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, FileText, Search, Target } from "lucide-react";

const stepIcons = [Search, Target, FileText];

export function OfferSection() {
    const t = useTranslations("Home.Offer");
    const steps = (t.raw("steps") as string[]).map((text, i) => ({
        icon: stepIcons[i],
        text
    }));
    const processSteps = (t.raw("processSteps") as { title: string; desc: string }[]).map(
        (item, i) => ({ ...item, number: `0${i + 1}` })
    );

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl mx-auto">

                {/* Nasıl Çalışıyoruz */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        {t("processTitle")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative px-4">
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-0" />
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center bg-gray-50"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl font-bold text-[#0F172A] mb-6 relative">
                                {step.number}
                                {index === 0 && <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse" />}
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 30 Dakika CTA */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6"
                        >
                            {t("ctaTitle")}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                        >
                            {t("ctaDescription")}
                        </motion.p>
                        <div className="space-y-6 mb-10">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold font-mono">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700 font-medium">{step.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            onClick={() => scrollToSection("randevu")}
                            className="group cursor-pointer bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                        >
                            <span>{t("cta")}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full max-w-sm"
                    >
                        <div className="aspect-square rounded-2xl bg-white border border-gray-100 shadow-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent opacity-50" />
                            <FileText className="w-24 h-24 text-blue-600 mb-6 relative z-10" />
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2 relative z-10">{t("cardTitle")}</h3>
                            <p className="text-sm text-gray-500 relative z-10">{t("cardSubtitle")}</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
