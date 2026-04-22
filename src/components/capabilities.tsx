"use client";

import { motion } from "framer-motion";
import { ListFilter, CalendarClock, Zap, Settings2, MessageSquareText, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
    {
        title: "Talep & Takip Düzeni",
        description: "Nereden gelirse gelsin, her talep aynı sisteme düşer. Hiçbiri kaybolmaz.",
        icon: ListFilter,
        className: "md:col-span-2",
    },
    {
        title: "Randevu & Hatırlatma",
        description: "Müşteri randevu alır, sistem hatırlatır. Siz takip etmek zorunda kalmazsınız.",
        icon: CalendarClock,
        className: "md:col-span-1",
    },
    {
        title: "Teklif & Hızlandırma",
        description: "Teklif öncesi bilgi toplama otomatik çalışır, süreci hızlandırır.",
        icon: Zap,
        className: "md:col-span-1",
    },
    {
        title: "İç Operasyon",
        description: "Bildirimleri, görevleri, rutinleri sistem yönetir. Siz sadece sonuçlara bakarsınız.",
        icon: Settings2,
        className: "md:col-span-2",
    },
    {
        title: "Müşteri İletişimi",
        description: "Sık gelen sorulara anında yanıt verir, karmaşık olanları size yönlendirir.",
        icon: MessageSquareText,
        className: "md:col-span-3",
    },
];

const outcomes = [
    "Gelen her talep doğru kişiye, doğru anda ulaşır",
    "Takip için kimse kimseyi aramak zorunda kalmaz",
    "Yeni biri işe başladığında sistemi öğrenmesi günler değil, saatler alır",
    "Ne kadar iş geldiğini, ne kadarının çözüldüğünü rakamla görürsünüz"
];

export function CapabilitiesSection() {
    return (
        <section id="neler-yapiyoruz" className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight">
                        Ne Kuruyoruz?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Her işletme farklı çalışır. Hangi modüllere ihtiyacınız varsa onları birleştiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300",
                                item.className
                            )}
                        >
                            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-2">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {item.description}
                            </p>
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-3xl transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Outcomes */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-10">
                        Sistem Kurulduğunda Ne Değişir?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {outcomes.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-blue-100"
                            >
                                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg font-medium text-[#0F172A]">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
