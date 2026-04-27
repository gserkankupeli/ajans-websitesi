"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users } from "lucide-react";

export function AjansDualValue() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-20 md:py-28 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 tracking-tight">
                            FlowAsistan ile iki farklı değer
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Kendi ajansınız için kullanın — ya da müşterilerinize sunarak portföyünüze yeni bir hizmet kolu ekleyin.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1 — Ajansın kendisi için */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative rounded-2xl border border-blue-100 bg-blue-50/60 p-8 flex flex-col gap-6 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40 -mr-16 -mt-16 pointer-events-none" />

                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Ajansınız için</p>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                    Gelen talepleri kaçırmayın
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    Potansiyel müşteriler WhatsApp, Instagram veya web sitenizden ulaştığında anında karşılanır. Bütçe ve hizmet ihtiyacı otomatik toplanır. Siz sadece görüşmeye hazır adayla ilgilenirsiniz.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "7/24 otomatik ilk yanıt",
                                        "Bütçe ve brief otomatik toplanır",
                                        "Niteliksiz lead görüşmeye gelmez"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => scrollToSection("randevu")}
                                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group w-fit"
                            >
                                Tanışma Planla
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Card 2 — Müşterilerine sunmak için */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative rounded-2xl border border-indigo-100 bg-indigo-50/60 p-8 flex flex-col gap-6 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-40 -mr-16 -mt-16 pointer-events-none" />

                            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Müşterileriniz için</p>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                    Yeni bir hizmet kolu açın
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-5">
                                    E-ticaret, klinik, gayrimenkul, restoran — yönettiğiniz her müşteriye chatbot hizmeti sunabilirsiniz. Müşteri iletişimini otomatize ederek onlara somut bir değer katın, ajansınıza yeni bir gelir kanalı ekleyin.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Web sitesi, WhatsApp, Instagram entegrasyonu",
                                        "Her sektöre özel akış kurulumu",
                                        "Portföyünüze yeni bir hizmet kolu"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={() => scrollToSection("randevu")}
                                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group w-fit"
                            >
                                Tanışma Planla
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
