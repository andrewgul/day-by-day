import { Container } from '@/components/layout/Container';
import { ROUTES } from '@/config/routes';
import { redirect } from '@/i18n/navigation';
import { currentUser } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect({ href: ROUTES.welcome.getPath(), locale: 'en' });
  }

  return <Container title={'Привет, ' + user?.fullName} />;
}
