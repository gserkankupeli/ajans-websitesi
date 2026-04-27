import { AjansHero } from "@/components/ajans/hero";
import { AjansDualValue } from "@/components/ajans/dual-value";
import { AjansProblem } from "@/components/ajans/problem";
import { AjansHowItWorks } from "@/components/ajans/how-it-works";
import { AjansFeatures } from "@/components/ajans/features";
import { AjansProof } from "@/components/ajans/proof";
import { AjansMeeting } from "@/components/ajans/meeting";
import { AjansFAQ } from "@/components/ajans/faq";
import { AjansCalendly } from "@/components/ajans/calendly";

export default function AjansLandingPage() {
    return (
        <div className="w-full">
            <AjansHero />
            <AjansDualValue />
            <AjansProblem />
            <AjansHowItWorks />
            <AjansFeatures />
            <AjansProof />
            <AjansMeeting />
            <AjansFAQ />
            <AjansCalendly />
        </div>
    );
}
