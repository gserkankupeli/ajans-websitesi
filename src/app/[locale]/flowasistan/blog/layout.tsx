import { turkishOnly } from "@/lib/locale-guard";

export default async function FlowAsistanBlogLayout({
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
