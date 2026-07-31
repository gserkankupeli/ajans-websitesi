"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FlowAsistanMeetingSection() {
    const t = useTranslations("FlowAsistan.Meeting");
    const items = t.raw("items") as string[];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                            {t("title")}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t("description")}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 mb-10">
                        <ul className="space-y-4 text-left mx-auto md:mx-0">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => scrollToSection("randevu")}
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                        >
                            {t("cta")}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
