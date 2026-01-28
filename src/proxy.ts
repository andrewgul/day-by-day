import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import { extractLocaleFromPathname } from './i18n/utils';
import { ROUTES } from './config/routes';

const intlMiddleware = createMiddleware(routing);

const isPublicRoute = createRouteMatcher([
  `/(${routing.locales.join('|')})/welcome`,
  '/welcome',
  '/',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!isPublicRoute(req) && !userId) {
    const locale = extractLocaleFromPathname(req.nextUrl.pathname);

    return NextResponse.redirect(new URL(`/${locale}${ROUTES.welcome.getPath()}`, req.url));
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    '/((?!_next|api|.*\\..*).*)',
    '/',
    '/(en|ru)/:path*',
  ],
};