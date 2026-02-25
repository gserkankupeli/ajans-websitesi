import { ReactNode } from 'react';
import { EmlakNavbar } from '@/components/emlak/emlak-navbar';
import { EmlakFooter } from '@/components/emlak/emlak-footer';

export default function EmlakLayout({ children }: { children: ReactNode }) {
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
