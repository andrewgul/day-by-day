import LocaleSwitcher from '@/components/common/LocaleSwitcher';
import { Container } from '@/components/layout/Container';
import { getTranslations } from 'next-intl/server';

export default async function SettingsPage() {
  const t = await getTranslations('Settings');

  return (
    <Container title={t('title')}>
      <LocaleSwitcher />
    </Container>
  );
}
