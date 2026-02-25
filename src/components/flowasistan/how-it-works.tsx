"use client";

import { motion } from "framer-motion";
import { MessageSquare, Database, LineChart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Karşıla",
        desc: "Mesajları ve aramaları 7/24 otomatik karşılar.",
        icon: MessageSquare
    },
    {
        number: "02",
        title: "Topla",
        desc: "Talepleri tek yerde kayıt altına alır ve takip düzeni oluşturur.",
        icon: Database
    },
    {
        number: "03",
        title: "Ölç",
        desc: "Canlı istatistiklerle performansı görünür kılar.",
        icon: LineChart
    }
];

export function FlowAsistanHowItWorks() {
    return (
        <section id="nasil" className="py-20 md:py-32 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        FlowAsistan 3 Adım Sistemi
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
                            className="relative z-10 flex flex-col items-center text-center bg-white"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0F172A] border border-blue-900 shadow-lg flex items-center justify-center text-xl font-bold text-white mb-6 relative">
                                <step.icon className="w-6 h-6 text-blue-400" />
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
