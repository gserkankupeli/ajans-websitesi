"use client";

import { useEffect } from "react";

export function EmlakCalendly() {
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

        Cal("init", "emlak", { origin: "https://app.cal.eu" });

        Cal.ns.emlak("inline", {
            elementOrSelector: "#my-cal-inline-emlak",
            config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
            calLink: "serkankupeli/emlak",
        });

        Cal.ns.emlak("ui", { "cssVarsPerTheme": { "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    return (
        <section id="randevu" className="py-24 bg-blue-50 border-t border-blue-100 flex flex-col items-center">
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                    Kısa Bir Tanışma Planlayın
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Niteliksiz müşteriye giden zamanı nasıl azaltacağınızı birlikte netleştirelim.
                </p>
            </div>

            {/* Calendly Inline Widget */}
            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-blue-200/50 border border-blue-100 overflow-hidden h-[850px] md:h-[750px]">
                <div
                    id="my-cal-inline-emlak"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                ></div>
            </div>
        </section>
    );
}
