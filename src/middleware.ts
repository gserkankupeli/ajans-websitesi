import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// routing.ts tek kaynak: locale listesi ve localeDetection ayarı oradan gelir
export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
