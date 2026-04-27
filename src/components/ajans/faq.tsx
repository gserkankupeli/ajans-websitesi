"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export function AjansFAQ() {
    const faqs = [
        {
            q: "Sistem potansiyel müşterilere yanlış bilgi verir mi?",
            a: "Kritik adımlarda kontrol mekanizmalarıyla ilerler; ajans tercihine göre yanıt sınırları belirlenir. Ne söyleyip ne söylemeyeceği sizin belirlediğiniz çerçevede çalışır."
        },
        {
            q: "Ekibim tamamen devreden çıkar mı?",
            a: "Hayır. FlowAsistan ilk karşılamayı ve nitelendirmeyi yapar; gerektiğinde konuşmayı ekibe aktaran bir akış kurgulanabilir. Ekibiniz sadece görüşmeye değer taleplere odaklanır."
        },
        {
            q: "Brief ve bütçe toplama süreci nasıl işliyor?",
            a: "Potansiyel müşteri mesaj attığında sistem sırayla hizmet türü, bütçe ve zaman çizelgesini sorar. Cevaplar panele düşer; siz görüşmeye hazır bilgiyle girersiniz."
        },
        {
            q: "Görüşme ne kadar sürüyor?",
            a: "Takvimde göreceğiniz şekilde yaklaşık 30 dakikalık kısa bir tanışma görüşmesidir."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="sss" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                        Sık Sorulan Sorular
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-[#0F172A] pr-4">{faq.q}</span>
                                {openIndex === index
                                    ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                                    : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                }
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50 flex flex-col justify-center items-center text-center">
                                            <p className="mt-4">{faq.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
