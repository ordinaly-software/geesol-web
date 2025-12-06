import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  localePrefix: 'always',
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|studio|trpc|_next|_vercel|.*\\..*).*)'],
};