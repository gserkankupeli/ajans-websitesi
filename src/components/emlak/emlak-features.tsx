import { CheckCircle2, MessageSquare, PhoneCall, Filter, LayoutDashboard, LineChart, FileText } from "lucide-react";

export function EmlakFeatures() {
    const features = [
        {
            icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
            title: "İlan sorularını otomatik yanıtlar",
            description: "Mesajlara anında, kısa ve ilgili ilan detayına net şekilde cevap verir."
        },
        {
            icon: <PhoneCall className="w-6 h-6 text-indigo-500" />,
            title: "Telefon aramalarını otomatik karşılar",
            description: "Aynı anda birçok müşterinin aramasında bile kesintisiz ve akıcı iletişim kurar."
        },
        {
            icon: <Filter className="w-6 h-6 text-green-500" />,
            title: "Kriterlerle ayıklar",
            description: "Bütçe, aranan konum ve taşınma uygunluğu gibi verileri alarak filtreler."
        },
        {
            icon: <LayoutDashboard className="w-6 h-6 text-purple-500" />,
            title: "Tek panelde toplar",
            description: "Uygun müşteriyi hızlı ve kolay takip etmek için FlowAsistan paneline düşürür."
        },
        {
            icon: <LineChart className="w-6 h-6 text-orange-500" />,
            title: "Canlı istatistikler",
            description: "Günlük çağrı, alınan mesaj ve başarılı niteliklendirme oranlarını gösterir."
        },
        {
            icon: <FileText className="w-6 h-6 text-rose-500" />,
            title: "Konuşma özeti ve analiz",
            description: "Uzun görüşmeleri veya yazışmaları 3 cümle ile derleyip not olarak kaydeder."
        }
    ];

    return (
        <section id="emlak-icin" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex-1 lg:max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            İlan Sürecine Uygun Otomatik Karşılama
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Müşterileriniz sizinle iletişime geçtiği an, FlowAsistan emlak sektörüne özel kurgulanmış bir senaryo ile devreye girerek işinizi hafifletir.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 shrink-0 bg-slate-50 p-2.5 rounded-lg border border-slate-100 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual (Features Mockup / Illustration) */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/5] bg-slate-900 rounded-[2rem] p-8 shadow-2xl shadow-blue-900/10 border border-slate-800 flex flex-col justify-between overflow-hidden">
                            {/* Abstract glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10 w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-5 backdrop-blur-sm self-start mb-4 shadow-lg shadow-black/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                        <PhoneCall className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <h5 className="font-semibold text-white">Sesli Asistan</h5>
                                </div>
                                <p className="text-sm text-slate-300">"Merhaba, ilgilendiğiniz ilanımız için ne kadarlık bir bütçe düşünüyorsunuz?"</p>
                            </div>

                            <div className="relative z-10 w-full max-w-[80%] bg-blue-600 border border-blue-500 rounded-2xl p-5 backdrop-blur-sm self-end mb-4 shadow-lg shadow-blue-900/30">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <Filter className="w-5 h-5 text-white" />
                                    </div>
                                    <h5 className="font-semibold text-white">Karar Mekanizması</h5>
                                </div>
                                <p className="text-sm text-blue-100">Bütçe kriteri uyumsuz. Müşteriyi alternatif projelere yönlendiriyorum.</p>
                            </div>

                            <div className="relative z-10 w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-5 backdrop-blur-sm self-start shadow-lg shadow-black/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <LayoutDashboard className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h5 className="font-semibold text-white">FlowAsistan Paneli</h5>
                                </div>
                                <p className="text-sm text-slate-300">Yeni Lead (Nitelikli) eklendi: Ahmet Yılmaz - 3+1 Daire, Bütçe 18M TL. Hızlı aranmalı!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
