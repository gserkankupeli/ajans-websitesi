"use client";

import NextImage from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center">
                    <Link href="/">
                        <NextImage src="/logo.svg" alt={t("logoAlt")} width={140} height={35} className="h-7 md:h-9 w-auto object-contain cursor-pointer" />
                    </Link>
                </div>

                <div className="text-sm text-gray-500">
                    {t("contactPrefix")} <a href="mailto:serkankupeli@flowixy.com" className="hover:text-[#0F172A] transition-colors">
                        serkankupeli@flowixy.com
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher variant="light" />
                    <div className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Flowixy
                    </div>
                </div>

            </div>
        </footer>
    );
}
