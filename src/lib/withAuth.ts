import { ROUTES } from '@/config/routes';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const withAuth = async <T>(
  fn: (payload: { clerkId: string }) => Promise<T>
): Promise<T> => {
  const { userId } = await auth();

  if (!userId) {
    redirect(ROUTES.welcome.getPath());
  }

  return await fn({ clerkId: userId });
};
