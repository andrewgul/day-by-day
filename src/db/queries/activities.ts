import { eq, desc } from 'drizzle-orm';
import { db } from '..';
import { activities } from '../schema';
import { ActivityInsertModel, ActivitySelectModel } from '../schema/activities';

export const createActivityQuery = async (
  insert: ActivityInsertModel
): Promise<ActivitySelectModel> => {
  const [newActivity] = await db.insert(activities).values(insert).returning();

  return newActivity;
};

export const getActivitiesQuery = async ({
  clerkId,
  limit = 50,
}: {
  clerkId: string;
  limit?: number;
}): Promise<ActivitySelectModel[]> => {
  return db
    .select()
    .from(activities)
    .where(eq(activities.clerkId, clerkId))
    .orderBy(desc(activities.createdAt))
    .limit(limit);
};
