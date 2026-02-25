"use client";

import { PhoneCall, MessageSquare, ListTodo, Timer, Percent, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

export function EmlakProof() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Emlak Panelinde <span className="text-blue-600">Neleri Görürsünüz?</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        “İlan için yazdı veya aradı &rarr; FlowAsistan yorulmadan otomatik karşıladı &rarr; kriterleri topladı &rarr; niteliksiz müşteriyi ayıkladı &rarr; siz sadece <strong>uygun müşterileri ve günün istatistiklerini gördünüz.</strong>”
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {/* Metric 1 */}
                    <MagicCard className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm">
                        <div className="p-2 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                <PhoneCall className="w-6 h-6" />
                            </div>
                            <h4 className="text-3xl font-bold mb-1">240</h4>
                            <p className="text-sm font-medium text-slate-500">Kaç Çağrı</p>
                        </div>
                    </MagicCard>

                    {/* Metric 2 */}
                    <MagicCard className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm">
                        <div className="p-2 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h4 className="text-3xl font-bold mb-1">1,450</h4>
                            <p className="text-sm font-medium text-slate-500">Kaç Mesaj</p>
                        </div>
                    </MagicCard>

                    {/* Metric 3 */}
                    <MagicCard className="bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm">
                        <div className="p-2 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                                <ListTodo className="w-6 h-6" />
                            </div>
                            <h4 className="text-3xl font-bold mb-1">45</h4>
                            <p className="text-sm font-medium text-slate-500">Kaç Nitelikli Talep</p>
                        </div>
                    </MagicCard>

                    {/* Metric 5 */}
                    <MagicCard className="bg-white hover:bg-slate-50 border-slate-200 shadow-sm">
                        <div className="p-2 text-center flex flex-col items-center justify-center h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-100/50 -z-10"></div>
                            <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-4 shadow-sm shadow-green-500/20">
                                <Percent className="w-6 h-6" />
                            </div>
                            <h4 className="text-3xl font-bold text-green-700 mb-1">%85<span className="text-lg">+</span></h4>
                            <p className="text-sm font-medium text-green-700/80">Net Dönüşüm</p>
                        </div>
                    </MagicCard>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => {
                            const element = document.getElementById("randevu");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 group"
                    >
                        Bu Rakamları İşinize Uyarlayalım
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
