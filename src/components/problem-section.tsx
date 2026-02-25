"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, Link as LinkIcon, Shuffle } from "lucide-react";

const symptoms = [
    {
        icon: Shuffle,
        text: "Talepler farklı kanallarda dağınık kalır, geri dönüş gecikir"
    },
    {
        icon: Clock,
        text: "Takip düzeni kişiye bağlı olur, bazı fırsatlar soğur"
    },
    {
        icon: AlertCircle,
        text: "Tekrarlayan işler zaman yer, ekip yorulur"
    },
    {
        icon: LinkIcon, // Using Link icon as a placeholder for 'missing system' concept
        text: "Net bir sistem olmadığı için “neyi iyileştireceğiz?” belirsiz kalır"
    }
];

export function ProblemSection() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                            Büyümeyi Yavaşlatan Görünmeyen Kayıplar
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Birçok işletmede sorun ‘çalışmamak’ değil; aynı işleri tekrar tekrar yapmak,
                            takipte dağınıklık ve süreçlerin kişilere bağlı kalması. Bu durum fırsatların
                            kaçmasına, maliyetin artmasına ve büyümenin yavaşlamasına neden olur.
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
