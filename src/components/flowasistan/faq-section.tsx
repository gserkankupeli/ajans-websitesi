"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Bu sistem gerçekten otomatik mi?",
        answer: "Evet. Mesajlar ve aramalar otomatik karşılanır. Siz sadece dilediğinizde panele girip takip edersiniz."
    },
    {
        question: "Yanlış yönlendirme olursa ne olur?",
        answer: "Kritik adımlarda kontrol mekanizmalarıyla ilerler; işletmenin tercihine göre yönlendirme/aktarım şekli ayarlanır."
    },
    {
        question: "Hangi kanallarda çalışır?",
        answer: "WhatsApp ve Instagram gibi mesaj kanalları ve telefon aramaları dahil, işletmenin ihtiyacına göre çalışır."
    },
    {
        question: "Görüşme ne kadar sürüyor?",
        answer: "30 dakikalık kısa bir tanışma & ihtiyaç analizi görüşmesi."
    }
];

export function FlowAsistanFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="sss" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-[#0F172A] mb-4">
                        Sık Sorulan Sorular
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-[#0F172A] pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                )}
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
                                        <div className="p-5 flex items-center text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
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
