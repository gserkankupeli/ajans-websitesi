"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText } from "lucide-react";
import NextImage from "next/image";

export function ExamplesSection() {
    return (
        <section id="ornekler" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        Projelerimiz
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Main Example Card */}
                    <div className="md:col-span-1 h-full block group cursor-pointer" onClick={() => window.location.href = '/flowasistan'}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="h-full bg-[#0F172A] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-transparent group-hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-900/20 group-hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                                <ArrowRight className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative">
                                    <NextImage src="/FlowAsistan_sadece_logo.svg" alt="FlowAsistan Logo" fill className="object-contain p-1.5" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">FlowAsistan</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    Müşteri iletişimi + takip sürecini tek akışta toplayan yapay zeka destekli sistem.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Talepleri karşılar ve yönlendirir",
                                        "Takip adımlarını düzenler",
                                        "Sürece göre kayıt/raporlama"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-xs text-blue-300/80 bg-blue-900/40 p-3 rounded-lg border border-blue-800 mt-auto group-hover:bg-blue-900/60 transition-colors">
                                Detayları görüşmede sektörünüze göre örnekleyelim.
                            </div>
                        </motion.div>
                    </div>

                    {/* Placeholder Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">Yapay Zeka ile İçerik Üretimi</h3>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Yakında</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Markanıza özel dil yapısına uygun otomatik metin ve stratejik senaryo üretim asistanı.
                            </p>
                        </div>
                    </motion.div>

                    {/* Placeholder Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-between opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <div>
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">Verimlilik & İş Süreçleri Otomasyonu</h3>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-0.5 rounded shrink-0">Yakında</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Zaman alan manuel görevlerin ve karmaşık operasyonel adımların otopilota bağlanması.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
