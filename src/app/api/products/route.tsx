import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(req: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'milk', price: 1.6 },
    { id: 2, name: 'yogurt', price: 2.2 },
  ]);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    return NextResponse.json(zodValidation.error.errors);
  }
  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}
