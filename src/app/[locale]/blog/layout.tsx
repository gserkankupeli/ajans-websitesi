import { turkishOnly } from "@/lib/locale-guard";

export default async function BlogLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    turkishOnly(locale);

    return <>{children}</>;
}
