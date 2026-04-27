"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, UserX, MoonStar } from "lucide-react";

export function AjansProblem() {
    const problems = [
        {
            icon: Clock,
            title: "Mesajlara geç dönülüyor",
            text: "Ekip proje teslimatıyla meşgulken gelen yeni müşteri talebi saatlerce bekliyor. O sürede rakip ajans teklif vermiş oluyor."
        },
        {
            icon: MessageSquare,
            title: "Aynı sorular her gün tekrar ediyor",
            text: '"Ne kadar tutar?", "Ne zaman başlayabiliriz?", "Hangi hizmetleri veriyorsunuz?" — kıdemli ekip üyeleri bu sorulara zaman harcıyor.'
        },
        {
            icon: UserX,
            title: "Uygun olmayan adaylara zaman harcanıyor",
            text: "Keşif görüşmesi yapıldı, bütçe tutmadı. Önceden eleme yapılmadığı için değerli toplantı saatleri boşa gidiyor."
        },
        {
            icon: MoonStar,
            title: "Mesai dışı talepler sabaha kayboluyor",
            text: 'Akşam 9\'da gelen "hemen başlamak istiyoruz" mesajı yanıtsız kalıyor. Sabah dönüldüğünde o müşteri gitmiş olabiliyor.'
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 tracking-tight">
                            Geç Dönüş <span className="text-red-500">=</span> Kaçan Müşteri
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ajansınıza en büyük kayıp yeni talep gelmemesinden değil, gelen taleplere zamanında ve net dönüş yapılamamasından kaynaklanıyor.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <item.icon className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-semibold mb-1">{item.title}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
