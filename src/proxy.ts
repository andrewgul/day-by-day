import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher(['profile/(.*)'])

const isApiRoute = createRouteMatcher(['/api(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()

    // 2. API-роуты и статику — пропускаем мимо next-intl полностью
  if (isApiRoute(req)) {
    return; // ← ничего не возвращаем → intl не применяется
  }

  return intlMiddleware(req)
});

export const config = {
  matcher: [
    // Применяем middleware ко всему, кроме:
    // • Next.js internals
    // • static files (images, favicon, etc.)
    // • API routes (важно!)
    '/((?!_next|api|.*\\..*).*)',
    // Явно включаем корень и [locale] маршруты
    '/',
    '/(en|ru)/:path*',
  ],
};