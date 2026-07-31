import { KlinikHeader } from "@/components/klinik/header";
import { KlinikFooter } from "@/components/klinik/footer";
import { turkishOnly } from "@/lib/locale-guard";

export default async function KlinikLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    turkishOnly(locale);

    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
            <KlinikHeader />
            <main className="flex-grow">
                {children}
            </main>
            <KlinikFooter />
        </div>
    );
}
