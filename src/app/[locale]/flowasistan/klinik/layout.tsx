import { KlinikHeader } from "@/components/klinik/header";
import { KlinikFooter } from "@/components/klinik/footer";

export default function KlinikLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
