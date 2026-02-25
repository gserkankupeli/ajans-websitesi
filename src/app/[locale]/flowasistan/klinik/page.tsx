import { KlinikHero } from "@/components/klinik/hero";
import { KlinikProblem } from "@/components/klinik/problem";
import { KlinikHowItWorks } from "@/components/klinik/how-it-works";
import { KlinikFeatures } from "@/components/klinik/features";
import { KlinikProof } from "@/components/klinik/proof";
import { KlinikMeeting } from "@/components/klinik/meeting";
import { KlinikFAQ } from "@/components/klinik/faq";
import { KlinikCalendly } from "@/components/klinik/calendly";

export default function KlinikLandingPage() {
    return (
        <div className="w-full">
            <KlinikHero />
            <KlinikProblem />
            <KlinikHowItWorks />
            <KlinikFeatures />
            <KlinikProof />
            <KlinikMeeting />
            <KlinikFAQ />
            <KlinikCalendly />
        </div>
    );
}
