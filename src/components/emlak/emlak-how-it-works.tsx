import { motion } from "framer-motion";
import { MessageSquareText, Filter, BarChart3 } from "lucide-react";

export function EmlakHowItWorks() {
    return (
        <section id="nasil" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        FlowAsistan 3 Adım Sistemi
                    </h2>
                    <p className="text-lg text-slate-600">
                        Zaman alan süreci asistanınıza devredin, siz sadece sonuçlarla ilgilenin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-blue-900/10 flex items-center justify-center mb-8 border border-slate-100 relative group">
                            <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                            <MessageSquareText className="w-10 h-10 text-blue-600" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-sm">1</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Karşıla</h3>
                        <p className="text-slate-600 leading-relaxed max-w-xs">
                            Kiralık veya satılık ilanlarınızdan gelen tüm mesajları ve telefon aramalarını <strong className="text-blue-600">7/24 otomatik karşılar</strong>.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
                        <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-green-900/10 flex items-center justify-center mb-8 border border-slate-100 relative group">
                            <div className="absolute inset-0 bg-green-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                            <Filter className="w-10 h-10 text-green-600" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shadow-sm">2</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Topla ve Ayıkla</h3>
                        <p className="text-slate-600 leading-relaxed max-w-xs">
                            Müşteriye bütçe, konum, uygunluk gibi soruları sorarak kriterleri toplar ve niteliksiz müşteriyi <strong className="text-green-600">sürecin başında ayıklar</strong>.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-0">
                        <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-purple-900/10 flex items-center justify-center mb-8 border border-slate-100 relative group">
                            <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                            <BarChart3 className="w-10 h-10 text-purple-600" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ölç</h3>
                        <p className="text-slate-600 leading-relaxed max-w-xs">
                            Tüm süreci, uygun müşterileri ve dönüşüm performansını size tek bir ekranda <strong className="text-purple-600">canlı olarak gösterir</strong>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
