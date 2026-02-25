"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Müşteri filtrelemek rahatsız eder mi?",
        answer: "Kısa ve net sorularla ilerlediğinde rahatsız etmez; aksine süreci hızlandırır. Müşteri, ne istediğini bilen bir muhatapla karşılaştığı için güven duyar."
    },
    {
        question: "Her ilan farklı, nasıl çalışacak?",
        answer: "Kriterler portföyünüze göre şekillenir; amaç 'uygun müşteri'yi hızlı ayıklamaktır. Sistem, müşterinin ilgilendiği ilana ve sizin verdiğiniz önceliklere (örn. bütçe, kefil durumu) göre kendini uyarlar."
    },
    {
        question: "Bu sistem gerçekten otomatik mi?",
        answer: "Evet. Mesajlar ve aramalar otomatik karşılanır; siz sadece panelden sonuçları takip edersiniz. FlowAsistan arka planda durmaksızın çalışır."
    },
    {
        question: "Görüşme süresi ne kadar?",
        answer: "Tanışma ve ihtiyaç analizi görüşmemiz sadece 30 dakika sürer. Bu sürede iş modelinize en uygun otomasyon'u nasıl kurabileceğimizi planlarız."
    }
];

export function EmlakFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="sss" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Sık Sorulan Sorular</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Emlak profesyonellerinin FlowAsistan sistemi hakkında en çok merak ettiği soruların cevapları.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-4 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
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
