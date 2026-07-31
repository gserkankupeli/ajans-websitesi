import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://flowixy.com";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Home.Meta' });

    return {
        metadataBase: new URL(SITE_URL),
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                tr: '/tr',
                en: '/en',
                'x-default': '/tr'
            }
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `${SITE_URL}/${locale}`,
            siteName: 'Flowixy',
            locale: locale === 'tr' ? 'tr_TR' : 'en_US',
            type: 'website'
        }
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
