"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Tanışma & ihtiyaç keşfi",
        desc: "Mevcut durumunuzu ve hedeflerinizi anlamak için kısa bir görüşme."
    },
    {
        number: "02",
        title: "Öneri Planı ve yol haritası",
        desc: "Size özel hazırladığımız strateji ve otomasyon planının sunumu."
    },
    {
        number: "03",
        title: "Uygunsa uygulama planı",
        desc: "Onayınız durumunda kurulum ve entegrasyon adımlarının başlaması."
    }
];

export function ProcessSection() {
    return (
        <section id="surec" className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        3 adımda ilerliyoruz
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative px-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center bg-gray-50" // bg-gray-50 covers the line behind text
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl font-bold text-[#0F172A] mb-6 relative">
                                {step.number}
                                {/* Pulse Effect for current/active feel */}
                                {index === 0 && <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse" />}
                            </div>

                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
