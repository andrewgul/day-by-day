import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const test = pgTable('test', {
  id: serial('id').primaryKey(),
  someNumber: integer('some_number').notNull().default(1337),
  createdAt: timestamp('created_at').defaultNow(),
});

export const schema = {
  test,
};