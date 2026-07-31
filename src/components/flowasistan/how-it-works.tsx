"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageSquare, Database, LineChart } from "lucide-react";

const icons = [MessageSquare, Database, LineChart];

export function FlowAsistanHowItWorks() {
    const t = useTranslations("FlowAsistan.HowItWorks");
    const steps = (t.raw("steps") as { title: string; desc: string }[]).map((step, i) => ({
        ...step,
        number: `0${i + 1}`,
        icon: icons[i]
    }));

    return (
        <section id="nasil" className="py-20 md:py-32 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        {t("title")}
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
