"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, BarChart3 } from "lucide-react";

export function AjansFeatures() {
    const features = [
        "Potansiyel müşteri sorularını anında yanıtlar (7/24)",
        "Hizmet türünü, bütçeyi ve hedefi otomatik toplar",
        "Görüşmeye uygun olmayan talepleri önceden eler",
        "Mesai dışı mesajları kaybetmez, sabah panele düşer",
        "Tek panelden tüm talepler ve istatistikler",
        "Konuşma özeti ve analiz — her lead hakkında hazır bilgi"
    ];

    return (
        <section id="ajans-icin" className="py-20 md:py-32 bg-white border-b border-gray-100 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 tracking-tight"
                        >
                            Ajans İş Akışına Özel Otomatik Karşılama
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                        >
                            FlowAsistan, ajansınızın mevcut süreçlerini bozmadan çalışır. Yeni talep geldiğinde siz ne yapıyorsanız yapın — sistem karşılar, toplar, panele düşürür.
                        </motion.p>

                        <div className="space-y-5 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full max-w-sm hidden md:flex flex-col gap-6"
                    >
                        <div className="aspect-[2/1] rounded-2xl bg-gray-50 border border-gray-200 shadow-sm p-6 flex flex-col justify-center relative overflow-hidden text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10" />
                            <Zap className="w-8 h-8 text-blue-500 mb-3" />
                            <h3 className="text-base font-semibold text-[#0F172A] mb-1">Anında Karşılama</h3>
                            <p className="text-xs text-gray-500">Yeni talep geldiği anda yanıtlanır — bekleme yok, kaçan mesaj yok.</p>
                        </div>
                        <div className="aspect-[2/1] rounded-2xl bg-gray-50 border border-gray-200 shadow-sm p-6 flex flex-col justify-center relative overflow-hidden text-left">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50 -ml-10 -mb-10" />
                            <BarChart3 className="w-8 h-8 text-indigo-500 mb-3" />
                            <h3 className="text-base font-semibold text-[#0F172A] mb-1">Canlı Dönüşüm Takibi</h3>
                            <p className="text-xs text-gray-500">Kaç talep geldi, kaçı nitelendi, kaçı görüşmeye dönüştü — tek panelden.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
