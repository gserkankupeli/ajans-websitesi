"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function KlinikCalendly() {
    useEffect(() => {
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    (api as any).q = (api as any).q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.eu/embed/embed.js", "init");

        const Cal = (window as any).Cal;

        Cal("init", "klinik", { origin: "https://app.cal.eu" });

        Cal.ns.klinik("inline", {
            elementOrSelector: "#my-cal-inline-klinik",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "serkankupeli/klinik",
        });

        Cal.ns.klinik("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });

    }, []);

    return (
        <section id="randevu" className="py-20 md:py-32 bg-slate-900 border-t border-slate-800 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            Kısa Bir Tanışma Planlayın
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Klinikte kaçan çağrı ve mesajları nasıl randevuya çevireceğimizi birlikte netleştirelim. Size uygun zamanı seçin.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-800 rounded-2xl overflow-hidden h-[850px] md:h-[750px] shadow-2xl relative mx-auto w-full border border-slate-700"
                    >
                        <div
                            id="my-cal-inline-klinik"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        ></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
