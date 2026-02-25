"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareText, ShieldCheck } from "lucide-react";

export function KlinikFeatures() {
    const features = [
        "Hasta sorularını otomatik yanıtlar (kısa ve net)",
        "Telefon aramalarını otomatik karşılar",
        "Randevu talebini toplar ve yönlendirir",
        "Tek panelden takip düzeni",
        "Canlı istatistikler (çağrı, mesaj, randevu talebi)",
        "Konuşma özeti ve analiz"
    ];

    return (
        <section id="klinik-icin" className="py-20 md:py-32 bg-white border-b border-gray-100 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                    {/* Content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 tracking-tight"
                        >
                            Klinik İş Akışına Uygun Otomatik Karşılama
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 mb-10 leading-relaxed"
                        >
                            FlowAsistan, klinik süreçlerinizi kesintiye uğratmadan, organik bir şekilde mevcut sistemlerinize entegre olarak çalışır.
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

                    {/* Minimal Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 w-full max-w-sm hidden md:flex flex-col gap-6"
                    >
                        <div className="aspect-[2/1] rounded-2xl bg-gray-50 border border-gray-200 shadow-sm p-6 flex flex-col justify-center relative overflow-hidden text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10" />
                            <MessageSquareText className="w-8 h-8 text-blue-500 mb-3" />
                            <h3 className="text-base font-semibold text-[#0F172A] mb-1">Anında Karşılama</h3>
                            <p className="text-xs text-gray-500">Klinik asistanınız 7/24 uyanıktır.</p>
                        </div>
                        <div className="aspect-[2/1] rounded-2xl bg-gray-50 border border-gray-200 shadow-sm p-6 flex flex-col justify-center relative overflow-hidden text-left">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 -ml-10 -mb-10" />
                            <ShieldCheck className="w-8 h-8 text-purple-500 mb-3" />
                            <h3 className="text-base font-semibold text-[#0F172A] mb-1">Güvenli Veri Akışı</h3>
                            <p className="text-xs text-gray-500">Tüm randevu talepleri tek merkeze iletilir.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
