"use client";

import { useEffect } from "react";

export function CalendlySection() {

    // Initialize Cal.com widget
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

        Cal("init", "tanisma", { origin: "https://app.cal.eu" });

        Cal.ns.tanisma("inline", {
            elementOrSelector: "#my-cal-inline-tanisma",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "serkankupeli/tanisma",
        });

        Cal.ns.tanisma("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    return (
        <section id="randevu" className="py-20 md:py-32 bg-[#0F172A] text-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Sektörünüze Uygun Yapay Zeka Destekli Otomasyon Sistemleri Hakkında Fikir Alın
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Kısa bir tanışma yapalım. Mevcut sürecinizi dinleyip size özel Yol Haritası hazırlayalım.
                    </p>
                </div>

                {/* Cal.com Widget Container */}
                <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl h-[850px] md:h-[750px]">
                    <div
                        id="my-cal-inline-tanisma"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    />
                </div>



            </div>
        </section>
    );
}
