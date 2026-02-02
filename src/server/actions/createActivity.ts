'use server';

import { ROUTES } from '@/config/routes';
import { createActivityQuery } from '@/db/queries/activities';
import { failure, success } from '@/lib/result';
import { ResultUnion } from '@/types/ResultUnion';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import z from 'zod';

const schema = z.object({
  title: z.string().trim().min(1, 'Поле обязательное'),
  description: z.string().optional(),
  emoji: z.string().optional(),
});

export type CreateActivityState = ResultUnion<true> | null;

export const createActivity = async (
  formData: FormData
): Promise<CreateActivityState> => {
  const { userId } = await auth();

  if (!userId) {
    return failure('Not authorized');
  }

  const parsed = schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return failure('Invalid form');
  }

  try {
    await createActivityQuery({
      // @todo remove from table
      userId: 'id',
      clerkId: userId,
      title: parsed.data.title,
      description: parsed.data.description,
      emoji: parsed.data.emoji,
    });

    revalidatePath(ROUTES.activities.getPath());

    return success(true);
  } catch {
    return failure('Something went wrong');
  }
};
