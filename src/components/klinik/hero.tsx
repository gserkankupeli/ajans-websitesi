"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import NextImage from "next/image";

export function KlinikHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-800 text-white">
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400"
                        >
                            Kaçan Çağrı ve Mesajları <span className="text-blue-400">7/24 Otomatik Karşılayın;</span> Randevuya Dönüştürün
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
                        >
                            Hasta soruları, aramalar ve randevu talepleri anında karşılanır. Siz sadece istediğinizde FlowAsistan Paneli’ne girip takip eder ve canlı istatistikleri görürsünüz.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-3 mb-10 max-w-xl mx-auto md:mx-0"
                        >
                            {[
                                "7/24 otomatik karşılama (mesaj + arama)",
                                "Randevu talebini hızlandıran akış",
                                "Tek panel + canlı istatistik"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start"
                        >
                            <div className="flex flex-col items-center md:items-start gap-2 max-w-[320px] mx-auto md:mx-0 w-full">
                                <button
                                    onClick={() => scrollToSection("randevu")}
                                    className="group relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full"
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-8 py-2 text-base font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-blue-700 gap-2">
                                        Kısa Bir Tanışma Planla
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <span className="text-sm md:text-sm text-gray-500 font-medium tracking-wide mt-4 w-full flex-center mx-auto md:mx-0 justify-center md:justify-start flex gap-2 items-center">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    30 dk tanışma & ihtiyaç analizi • Uygunsa canlı demo
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual (Medical Interactive Chat Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 md:mt-0"
                    >
                        {/* Glowing Blob */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />

                        <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700 shadow-2xl p-6 backdrop-blur-xl overflow-hidden min-h-[400px] flex flex-col text-left">
                            {/* Header Panel */}
                            <div className="flex items-center gap-3 border-b border-slate-700/50 pb-4 mb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="text-xs text-slate-400 font-medium ml-2">FlowAsistan Panel - Canlı Görüşmeler</div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex flex-col gap-4 flex-1">
                                {/* Hasta Mesajı */}
                                <div className="self-start bg-slate-700/50 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] border border-slate-600/30">
                                    <p className="text-sm text-slate-200">Merhaba, dolgu tedavisi için ortalama fiyat alabilir miyim? En erken ne zamana randevu verebilirsiniz?</p>
                                    <span className="text-[10px] text-slate-400 mt-1 block">Hasta • 09:15</span>
                                </div>

                                {/* FlowAsistan Yanıtı */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    className="self-end bg-blue-600/20 p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-blue-500/30 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        </div>
                                        <span className="text-xs text-blue-400 font-medium">Klinik Asistanı</span>
                                    </div>
                                    <p className="text-sm text-slate-200">Merhaba! Dolgu fiyatları hastamızın klinik muayenesi sonrası netlik kazanmaktadır. Size en uygun olarak yarın 14:30 veya perşembe 10:00 için ön görüşme randevusu oluşturabilirim. Hangisi uygun olur?</p>
                                    <span className="text-[10px] text-slate-400 mt-1 block">Otomatik • 09:16</span>
                                </motion.div>

                                {/* System UI - CRM Action */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5, duration: 0.4 }}
                                    className="mt-4 mx-auto bg-blue-900/20 border border-blue-500/30 rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-sm"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <span className="text-blue-400 font-medium">Randevu Talebi İşleniyor</span>
                                        <span className="text-slate-300 text-xs mt-0.5">Hasta yanıtı bekleniyor. CRM takip listesine eklendi.</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
