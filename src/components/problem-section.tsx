"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Link as LinkIcon, Shuffle } from "lucide-react";

const symptoms = [
    {
        icon: Shuffle,
        text: "WhatsApp'tan gelen, formdan gelen, mailden gelen — hiçbiri aynı yerde değil"
    },
    {
        icon: Clock,
        text: "Takip kimin aklındaysa o yapıyor; o gittiğinde süreç duruyor"
    },
    {
        icon: AlertCircle,
        text: "Aynı soruya günde on kez cevap veriyorsunuz"
    },
    {
        icon: LinkIcon,
        text: "Neyi düzelteceğinizi bilmiyorsunuz çünkü hiçbir şey ölçülmüyor"
    }
];

export function ProblemSection() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                            Muhtemelen Bunları Yaşıyorsunuz
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Sorun tembellik değil. Sorun, ekibinizin zamanını büyütmek yerine yönetmek için harcaması.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {symptoms.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-red-500" />
                                </div>
                                <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
