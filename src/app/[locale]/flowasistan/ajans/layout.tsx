import { AjansHeader } from "@/components/ajans/header";
import { AjansFooter } from "@/components/ajans/footer";

export default function AjansLayout({ children }: { children: React.ReactNode }) {
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
