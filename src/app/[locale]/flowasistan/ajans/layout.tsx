import { AjansHeader } from "@/components/ajans/header";
import { AjansFooter } from "@/components/ajans/footer";
import { turkishOnly } from "@/lib/locale-guard";

export default async function AjansLayout({
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
            <AjansHeader />
            <main className="flex-grow">
                {children}
            </main>
            <AjansFooter />
        </div>
    );
}
