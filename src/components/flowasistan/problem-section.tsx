"use client";

import { motion } from "framer-motion";
import { Clock, Shuffle, AlertCircle, BarChart3, ArrowRight } from "lucide-react";

const symptoms = [
    {
        icon: Clock,
        text: "Mesajlara/aramalara geç dönüş → fırsatlar kaçar"
    },
    {
        icon: Shuffle,
        text: "Kanallar dağınık → takip aksar"
    },
    {
        icon: AlertCircle,
        text: "Tekrarlayan sorular → ekip yorulur"
    },
    {
        icon: BarChart3,
        text: "Ölçüm yok → neyi iyileştireceğiniz belirsiz kalır"
    }
];

export function FlowAsistanProblemSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
                            Görünmeyen Kayıplar Büyümeyi Yavaşlatır
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Birçok işletmede sorun çalışmamak değil; mesajların ve aramaların kaçması, takibin dağınık olması ve performansın ölçülememesidir. Bu da fırsatların soğumasına ve ekibin zaman kaybetmesine neden olur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {symptoms.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-red-500" />
                                </div>
                                <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => scrollToSection("randevu")}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors cursor-pointer shadow-sm"
                        >
                            Kısa Bir Tanışma Planla <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
