import { db } from '../index';
import { test } from '../schema';

export async function createTestRecord({ someNumber }: { someNumber: number }) {
  const [newRecord] = await db
    .insert(test)
    .values({ someNumber })
    .returning();

  return newRecord;
}

export async function getAllRecords() {
  return await db.select().from(test).orderBy(test.createdAt);
}