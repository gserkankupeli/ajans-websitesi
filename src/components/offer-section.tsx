"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Search, Target } from "lucide-react";

const steps = [
    {
        icon: Search,
        text: "Mevcut süreç ve hedeflerin hızlı analizi"
    },
    {
        icon: Target,
        text: "Size uygun otomatikleştirme alanlarının belirlenmesi"
    },
    {
        icon: FileText,
        text: "Yaptığımız görüşmede size özel strateji ve otomasyon planlarının keşfedilmesi"
    }
];

export function OfferSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    {/* Content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6"
                        >
                            Kısa Bir Tanışma Yapalım — Size Özel ‘Yol Haritası’ Çıkaralım
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                        >
                            Bu görüşme bir tanışma ve ihtiyaç keşfidir. İş modelinizi ve mevcut sürecinizi anlarız,
                            ardından sektörünüze uygun 2–3 otomatik sistem fikrini netleştiririz.
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
                            className="group bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                        >
                            <span>Kısa Bir Tanışma Planla</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Minimal Visual / Icon */}
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
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2 relative z-10">Strateji Keşfi</h3>
                            <p className="text-sm text-gray-500 relative z-10">Potansiyel çözüm yolları</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
