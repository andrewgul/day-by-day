import { Container } from '@/components/layout/Container';
import { getTranslations } from 'next-intl/server';
import { CreateActivityForm } from './_components/CreateActivityForm/CreateActivityForm';
import { ActivityCard } from './_components/ActivityCard';
import { withAuth } from '@/lib/withAuth';
import { getActivitiesQuery } from '@/db/queries/activities';

export default async function ActivitiesPage() {
  const t = await getTranslations('Activities');

  const activities = await withAuth(({ clerkId }) =>
    getActivitiesQuery({ clerkId })
  );

  return (
    <Container title={t('title')} after={<CreateActivityForm />}>
      <div className="flex max-w-md flex-col gap-4 pt-4">
        {activities?.map((activity) => (
          <ActivityCard key={activity.id} model={activity} />
        ))}
      </div>
    </Container>
  );
}
