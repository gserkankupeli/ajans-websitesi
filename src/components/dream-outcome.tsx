"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const outcomes = [
    "Gelen her talep doğru kişiye, doğru anda ulaşır",
    "Takip için kimse kimseyi aramak zorunda kalmaz",
    "Yeni biri işe başladığında sistemi öğrenmesi günler değil, saatler alır",
    "Ne kadar iş geldiğini, ne kadarının çözüldüğünü rakamla görürsünüz"
];

export function DreamOutcome() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12">
                        Sistem Kurulduğunda Ne Değişir?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
                        {outcomes.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                            >
                                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg font-medium text-[#0F172A]">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex justify-center"
                    >
                        <a
                            href="#randevu"
                            className="group bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
                        >
                            <span>Kısa Bir Tanışma Planla</span>
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
