import { ROUTES } from '@/config/routes';
import { redirect } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { currentUser } from '@clerk/nextjs/server';

/** @todo intl-locale */
export default async function LocaleRootPage() {
  const user = await currentUser();

  if (user) {
    redirect({ href: ROUTES.dashboard.getPath(), locale: routing.defaultLocale });
  } else {
    redirect({ href: ROUTES.welcome.getPath(), locale: routing.defaultLocale })
  }
}