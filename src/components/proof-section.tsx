"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const stepStyles = [
    "bg-gray-50 border-gray-200 text-gray-900 z-10",
    "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/30 z-10 scale-105",
    "bg-[#0F172A] border-[#0F172A] text-white z-10"
];

export function ProofSection() {
    const t = useTranslations("Home.Proof");
    const steps = (t.raw("steps") as { step: string; desc: string }[]).map((item, i) => ({
        ...item,
        bg: stepStyles[i]
    }));

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t("description")}
                    </p>
                </div>

                {/* Process Flow */}
                <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-4xl mx-auto mb-20 p-8 pt-0">
                    <AnimatedBeam />
                    <div className="absolute inset-0 border border-gray-200 rounded-3xl -z-10 bg-white shadow-sm" />

                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`flex-[1] p-8 rounded-2xl border flex flex-col items-center text-center justify-center min-h-[160px] ${item.bg}`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3 block">{item.step}</span>
                            <span className="font-medium text-lg leading-tight">{item.desc}</span>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
