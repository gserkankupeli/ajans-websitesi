"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PhoneCall, MessageCircle, FileText, Clock, TrendingUp } from "lucide-react";

const icons = [PhoneCall, MessageCircle, FileText, Clock, TrendingUp];

export function FlowAsistanProofSection() {
    const t = useTranslations("FlowAsistan.Proof");
    const metrics = (t.raw("metrics") as { label: string; value: string }[]).map(
        (metric, i) => ({ ...metric, icon: icons[i] })
    );

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        {t("description")}
                    </p>
                </div>

                {/* Dashboard-like Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center group hover:border-blue-300 transition-colors"
                        >
                            <metric.icon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</span>
                            <span className="text-sm text-gray-500 font-medium">{metric.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Mini Scenario */}
                <div className="max-w-4xl mx-auto bg-white border border-blue-100 p-8 rounded-2xl shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                            <TrendingUp className="w-8 h-8 text-blue-600" />
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                            {t("scenario")}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
