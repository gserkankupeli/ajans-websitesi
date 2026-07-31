import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'tr'],

    // Used when no locale matches
    defaultLocale: 'tr',

    // Tarayıcı dili Türkçe değilse ziyaretçi otomatik /en'e düşer.
    // Seçim NEXT_LOCALE çerezinde saklanır; dil değiştirici bunu ezer.
    localeDetection: true
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
