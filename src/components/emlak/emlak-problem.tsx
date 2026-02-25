import { motion } from "framer-motion";
import { MessageSquareOff, Clock, UserMinus, FileWarning } from "lucide-react";

export function EmlakProblem() {
    return (
        <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        En Büyük Kayıp: <span className="text-red-600">Niteliksiz Müşteriler</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600">
                        Emlak sektöründe zaman en değerli kaynaktır. Ancak vaktinizin büyük bir kısmı verimsiz süreçlerde eriyor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Item 1 */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                            <MessageSquareOff className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tekrar Eden Sorular</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Aynı ilan için aynı sorular tekrar tekrar gelir; siz aynı cevapları yazmaktan yorulursunuz.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                            <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Uzun Konuşmalar</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Niteliksiz müşterilerle (bütçesi uygun olmayan, kararsız vb.) uzun konuşmalar zaman yer bitirir.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                            <UserMinus className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Kaçan Fırsatlar</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Gelen mesaja hızlı dönüş yapamadığınız için, gerçek alıcı başka bir emlakçıya yönelir.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                            <FileWarning className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Dağınık Takip</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Aramalar telefon günlüğünde, mesajlar WhatsApp'ta kalır; potansiyel fırsatlar gözden kaçar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
