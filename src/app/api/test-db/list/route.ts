import { getAllRecords } from '@/db/queries/test';
import { NextResponse } from 'next/server';

export async function GET() {
  const list = await getAllRecords();

  return NextResponse.json({ success: true, data: list });
}
