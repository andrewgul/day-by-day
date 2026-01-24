'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';

const getLabel = (loc: string) => loc === 'en' ? 'English' : 'Русский';

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="lg" className="relative flex">
          <span>{t('language')}</span>
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={pathname}
              locale={locale}
              className="flex items-center justify-between gap-6 cursor-pointer w-full"
            >
              {getLabel(locale)}
              {locale === currentLocale && (
                <span className="text-xs opacity-70">✓</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}