import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FlowAsistanStickyHeader } from "@/components/flowasistan/sticky-header";
import { FlowAsistanHero } from "@/components/flowasistan/hero";
import { FlowAsistanProblemSection } from "@/components/flowasistan/problem-section";
import { FlowAsistanHowItWorks } from "@/components/flowasistan/how-it-works";
import { FlowAsistanFeatures } from "@/components/flowasistan/features";
import { FlowAsistanProofSection } from "@/components/flowasistan/proof-section";
import { FlowAsistanMeetingSection } from "@/components/flowasistan/meeting-section";
import { FlowAsistanFAQSection } from "@/components/flowasistan/faq-section";
import { FlowAsistanCalendlySection } from "@/components/flowasistan/calendly-section";
import { Footer } from "@/components/footer";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "FlowAsistan.Meta" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `/${locale}/flowasistan`,
            languages: {
                tr: "/tr/flowasistan",
                en: "/en/flowasistan",
                "x-default": "/tr/flowasistan"
            }
        }
    };
}

export default function FlowAsistanHome() {
    return (
        <main className="min-h-screen bg-white">
            <FlowAsistanStickyHeader />
            <FlowAsistanHero />
            <FlowAsistanProblemSection />
            <FlowAsistanHowItWorks />
            <FlowAsistanFeatures />
            <FlowAsistanProofSection />
            <FlowAsistanMeetingSection />
            <FlowAsistanFAQSection />
            <FlowAsistanCalendlySection />
            <Footer />
        </main>
    );
}
