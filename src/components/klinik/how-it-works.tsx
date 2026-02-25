"use client";

import { motion } from "framer-motion";

export function KlinikHowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Karşıla",
            desc: "Hasta aramalarını ve mesajlarını 7/24 otomatik karşılar."
        },
        {
            number: "2",
            title: "Topla",
            desc: "Randevu talebini ve gerekli bilgileri tek yerde toplar."
        },
        {
            number: "3",
            title: "Ölç",
            desc: "Randevu talebi ve performansı size canlı olarak gösterir."
        }
    ];

    return (
        <section id="nasil" className="py-24 md:py-32 bg-[#F8FAFC] border-y border-gray-100 scroll-mt-20 relative overflow-hidden">
            {/* Subtle Premium Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                        FlowAsistan 3 Adım Sistemi
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Sistemimiz karmaşık süreçleri ortadan kaldırır. Sadece 3 basit adımda hasta iletişimini otopilota bağlarsınız.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative px-4 md:px-0 mt-8">
                    {/* Ultra-Premium Dashed Connecting Line (Desktop) perfectly centered to circles (48px top corresponds to center of 96px circle offset by its parent) */}
                    <div className="hidden md:block absolute top-[3rem] left-[15%] w-[70%] h-px border-t-2 border-dashed border-blue-200/60 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                {/* Step Number Circle with Outer Glow */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                    <div className="w-24 h-24 rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed max-w-[260px] mx-auto">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
