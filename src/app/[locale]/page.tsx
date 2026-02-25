import { StickyHeader } from "@/components/sticky-header";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { DreamOutcome } from "@/components/dream-outcome";
import { OfferSection } from "@/components/offer-section";
import { CapabilitiesSection } from "@/components/capabilities";
import { ProofSection } from "@/components/proof-section";
import { ExamplesSection } from "@/components/examples-section";
import { ProcessSection } from "@/components/process-section";
import { FAQSection } from "@/components/faq-section";
import { CalendlySection } from "@/components/calendly-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyHeader />
      <Hero />
      <ProblemSection />
      <DreamOutcome />
      <OfferSection />
      <CapabilitiesSection />
      <ProofSection />
      <ExamplesSection />
      <ProcessSection />
      <FAQSection />
      <CalendlySection />
      <Footer />
    </main>
  );
}
