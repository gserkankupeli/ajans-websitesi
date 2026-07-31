"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

// Gösterim sırası: önce TR, sonra EN
const LOCALE_ORDER = ["tr", "en"] as const;

/**
 * Aynı sayfanın diğer dildeki karşılığına geçiş yapar.
 * Bulunulan pathname korunur, sadece locale segmenti değişir.
 */
export function LanguageSwitcher({ className, variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
    const locale = useLocale();
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();

    const switchTo = (nextLocale: string) => {
        if (nextLocale === locale) return;
        router.replace(
            // @ts-expect-error -- pathname dinamik segment içerebilir, params ile birlikte çözülür
            { pathname, params },
            { locale: nextLocale }
        );
    };

    return (
        <div
            className={cn(
                "flex items-center rounded-lg border overflow-hidden text-xs font-semibold",
                variant === "dark" ? "border-white/20" : "border-gray-300",
                className
            )}
        >
            {LOCALE_ORDER.map((loc) => (
                <button
                    key={loc}
                    onClick={() => switchTo(loc)}
                    aria-current={loc === locale ? "true" : undefined}
                    className={cn(
                        "px-2.5 py-1 transition-colors cursor-pointer",
                        loc === locale
                            ? "bg-blue-600 text-white"
                            : variant === "dark"
                                ? "text-white/70 hover:text-white hover:bg-white/10"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    )}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
