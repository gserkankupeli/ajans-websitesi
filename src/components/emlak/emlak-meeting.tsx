"use client";

import { ArrowRight, Target, SearchCode, Laptop } from "lucide-react";

export function EmlakMeeting() {
    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Left Side: Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
                            Gününüzün Ne Kadarı Gereksiz Telefonlarla Geçiyor?
                            <br className="hidden md:block" />
                            <span className="text-blue-400">30 dakikada netleşsin.</span>
                        </h2>

                        <div className="space-y-4 mb-8 text-slate-300">
                            <div className="flex items-start gap-3">
                                <Target className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <p>Şu an en büyük zaman kaybı nerede? Tespit edelim.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <SearchCode className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <p>Portföyünüze özel hangi kriterlerle müşteri ayıklamak mantıklı?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Laptop className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <p>Uygunsa canlı demo ile örnekleyelim, gözünüzde canlansın.</p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                const element = document.getElementById("randevu");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="bg-blue-600 text-white cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50 flex items-center justify-center md:justify-start gap-3 group w-full sm:w-auto"
                        >
                            Kısa Bir Tanışma Planla
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Side: Graphic/Abstract View */}
                    <div className="flex-1 w-full max-w-sm border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 relative">
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-40"></div>
                        <h3 className="text-xl font-bold text-white mb-4">Görüşme Gündemi</h3>
                        <div className="space-y-6 relative border-l-2 border-slate-700 ml-3 pl-6">
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-800"></div>
                                <h4 className="text-white font-medium">Tanışma & Mevcut Durum</h4>
                                <p className="text-sm text-slate-400">Şu anki süreçlerinizin analizi (5 dk)</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-800"></div>
                                <h4 className="text-white font-medium">İhtiyaç Tespiti</h4>
                                <p className="text-sm text-slate-400">Zaman kayıplarını bulma (10 dk)</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-800"></div>
                                <h4 className="text-white font-medium">Çözüm & Demo</h4>
                                <p className="text-sm text-slate-400">Size özel asistanın canlı demosu (15 dk)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
