import { db } from "@/db";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = z.object({
      clerkId: z.string(),
    }).parse(body);

    const [newUser] = await db.insert(users).values({
      clerkId: parsed.clerkId,
    }).returning();

    return NextResponse.json({ success: true, data: newUser }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message, text: 'Internal server error' }, { status: 500 }); 
    }

    return NextResponse.json({ error, text: 'Internal server error' }, { status: 500 });
  }
}