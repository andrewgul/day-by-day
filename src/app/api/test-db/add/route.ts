import { createTestRecord } from '@/db/queries/test';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createTestSchema = z.object({
  someNumber: z.number().int().min(0).max(1000000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { someNumber } = createTestSchema.parse(body);

    const newRecord = createTestRecord({ someNumber });

    return NextResponse.json({ success: true, data: newRecord }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}