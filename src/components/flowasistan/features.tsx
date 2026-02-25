"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MessageSquareQuote, Filter, LayoutDashboard, BarChart } from "lucide-react";

const features = [
    {
        icon: MessageCircle,
        title: "Mesaj Karşılama",
        description: "WhatsApp/Instagram gibi kanallardan gelen mesajları otomatik karşılama.",
    },
    {
        icon: Phone,
        title: "Arama Karşılama",
        description: "Telefon aramalarını otomatik karşılama ve yönlendirme.",
    },
    {
        icon: MessageSquareQuote,
        title: "Sık Sorulan Sorular",
        description: "Müşterilerinizin sık sorduğu soruları hızlıca yanıtlama ve doğru yönlendirme.",
    },
    {
        icon: Filter,
        title: "Otomatik Filtre",
        description: "Talepleri nitelikli ve niteliksiz olarak ayırma, ekibinizin odağını koruma.",
    },
    {
        icon: LayoutDashboard,
        title: "Tek Panel",
        description: "Tüm iletişim kanallarını ve müşteri taleplerini tek panelden kayıt altına alma ve takip düzeni.",
    },
    {
        icon: BarChart,
        title: "Canlı İstatistik",
        description: "İşletmenizin performansını anlık olarak gösteren analiz ve konuşma özeti paneli.",
    },
];

export function FlowAsistanFeatures() {
    return (
        <section id="ozellikler" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        İşinize Göre Şekillenen <br />
                        <span className="text-blue-600">Otomatik Karşılama</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600"
                    >
                        FlowAsistan, farklı kanallardan gelen iletişimi tek akışta toplar ve işletmenize uygun şekilde çalışır.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
