import { ReactNode } from 'react';
import { EmlakNavbar } from '@/components/emlak/emlak-navbar';
import { EmlakFooter } from '@/components/emlak/emlak-footer';
import { turkishOnly } from '@/lib/locale-guard';

export default async function EmlakLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    turkishOnly(locale);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <EmlakNavbar />
            <main className="flex-1">
                {children}
            </main>
            <EmlakFooter />
        </div>
    );
}
