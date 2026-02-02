import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

// ── таблица активностей
export const activities = pgTable('activities', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: text('user_id').notNull(),
  clerkId: text('clerk_id')
    .notNull()
    .references(() => users.clerkId, { onDelete: 'cascade' }), //
  title: text('title').notNull(),
  description: text('description'),
  emoji: text('emoji'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export type ActivityInsertModel = InferInsertModel<typeof activities>;

export type ActivitySelectModel = InferSelectModel<typeof activities>;
