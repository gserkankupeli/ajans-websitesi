import { setRequestLocale } from 'next-intl/server';
import { EmlakHero } from '@/components/emlak/emlak-hero';
import { EmlakProblem } from '@/components/emlak/emlak-problem';
import { EmlakHowItWorks } from '@/components/emlak/emlak-how-it-works';
import { EmlakFeatures } from '@/components/emlak/emlak-features';
import { EmlakProof } from '@/components/emlak/emlak-proof';
import { EmlakMeeting } from '@/components/emlak/emlak-meeting';
import { EmlakFaq } from '@/components/emlak/emlak-faq';
import { EmlakCalendly } from '@/components/emlak/emlak-calendly';

interface LayoutProps {
    params: Promise<{ locale: string }>;
}

export default async function EmlakPage({ params }: LayoutProps) {
    // Enable static rendering
    const locale = (await params).locale;
    setRequestLocale(locale);

    return (
        <>
            <EmlakHero />
            <EmlakProblem />
            <EmlakHowItWorks />
            <EmlakFeatures />
            <EmlakProof />
            <EmlakMeeting />
            <EmlakFaq />
            <EmlakCalendly />
        </>
    );
}
