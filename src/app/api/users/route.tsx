import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// to prevent caching so we can always get fresh data, we need to pass the req parameter, although we did not use it.
export function GET(req: NextRequest) {
  // return NextResponse.json('hello');
  return NextResponse.json([
    { id: 1, name: 'MJ' },
    { id: 2, name: 'Habib' },
  ]);
}

// since we don't have a DB yet, we hardcoded our data into the function

export async function POST(req: NextRequest) {
  const body = await req.json();
  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    return NextResponse.json(zodValidation.error.errors);
    // if (!body.name) {
    //   return NextResponse.json({ error: 'Name is required' });
  }
  return NextResponse.json({ id: 1, name: body.name });
}

// we can test out the POST request by PostMan.
