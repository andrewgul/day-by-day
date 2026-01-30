import { Container } from '@/components/layout/Container';
import { getTranslations } from 'next-intl/server';

export default async function ActivitiesPage() {
  const t = await getTranslations('Activities');

  return <Container title={t('title')}>Under construction 🚧</Container>;
}
