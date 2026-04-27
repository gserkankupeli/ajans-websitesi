"use client";

import { motion } from "framer-motion";
import { MessageCircle, UserCheck, Clock, TrendingUp, ArrowRight, Inbox } from "lucide-react";

export function AjansProof() {
    const metrics = [
        { label: "Yeni Talep", value: "214", icon: Inbox },
        { label: "Yanıtlanan Mesaj", value: "631", icon: MessageCircle },
        { label: "Nitelikli Lead", value: "87", icon: UserCheck },
        { label: "Ort. Yanıt Süresi", value: "12s", icon: Clock },
        { label: "Dönüşüm Oranı", value: "%41", icon: TrendingUp }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                            Ajans Panelinde Neleri Görürsünüz?
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Hangi kanaldan kaç talep geldi, kaçı nitelendi, kaçı görüşmeye dönüştü — hepsi tek yerde, canlı olarak.
                        </p>
                    </motion.div>

                    <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 relative z-10">
                            {metrics.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-xl text-center hover:bg-slate-800 transition-colors"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-blue-400 mb-3">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 relative z-10 text-center"
                        >
                            <p className="text-lg md:text-xl text-slate-300 font-medium flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 flex-wrap">
                                <span>Potansiyel müşteri mesaj attı</span>
                                <ArrowRight className="text-blue-400 hidden md:block" />
                                <span className="md:hidden text-blue-400">↓</span>
                                <span>FlowAsistan karşıladı ve brief topladı</span>
                                <ArrowRight className="text-blue-400 hidden md:block" />
                                <span className="md:hidden text-blue-400">↓</span>
                                <span className="text-white">siz panelden nitelikli talebi gördünüz.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
