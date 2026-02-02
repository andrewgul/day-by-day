import { relations } from 'drizzle-orm';
import { users } from './users'; // или './schema' если баррель
import { activities } from './activities';

export const usersRelations = relations(users, ({ many }) => ({
  activities: many(activities),
}));

export const activitiesRelations = relations(activities, ({ one }) => ({
  user: one(users, {
    fields: [activities.clerkId],
    references: [users.clerkId],
  }),
}));
