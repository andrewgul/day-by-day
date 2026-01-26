import { db } from "@/db";
import { schema } from "@/db/schema";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const SECRET_ADMIN_KEY = process.env.SECRET_ADMIN_KEY;

export async function GET() {
  try {
    const headersStore = await headers();
    const adminKey = headersStore.get('x-secret-admin-key');

    if (!adminKey || adminKey !== SECRET_ADMIN_KEY) {
      return NextResponse.json({ success: false, error: 'Not allowed' }, { status: 401 });
    }

    const users = await db.select().from(schema.users).orderBy(schema.users.createdAt);

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 501 });
  }
}