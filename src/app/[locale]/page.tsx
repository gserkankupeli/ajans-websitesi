import { StickyHeader } from "@/components/sticky-header";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { CapabilitiesSection } from "@/components/capabilities";
import { ProofSection } from "@/components/proof-section";
import { ExamplesSection } from "@/components/examples-section";
import { OfferSection } from "@/components/offer-section";
import { FAQSection } from "@/components/faq-section";
import { CalendlySection } from "@/components/calendly-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyHeader />
      <Hero />
      <ProblemSection />
      <CapabilitiesSection />
      <ProofSection />
      <ExamplesSection />
      <OfferSection />
      <FAQSection />
      <CalendlySection />
      <Footer />
    </main>
  );
}
