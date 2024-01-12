import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

interface props {
  params: { id: number };
}

export function GET(req: NextRequest, { params }: props) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'The user was not found!' });
  }
  return NextResponse.json({ id: 1, name: 'MJ' });
}

// since we don't have a DB yet, we hardcoded our data into the function

export async function PUT(req: NextRequest, { params }: props) {
  const body = await req.json();
  // this is how we can use Zod for validation instead of manual validation
  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    // if (!body.name) {
    // return NextResponse.json({ error: 'Name is required' });
    return NextResponse.json(zodValidation.error.errors);
  }
  if (params.id > 10) {
    return NextResponse.json({ error: 'User was not found' });
  }
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(req: NextRequest, { params }: props) {
  const body = await req.json();
  if (params.id > 10) {
    return NextResponse.json({ error: 'User was not found' });
  }
  return NextResponse.json({ message: 'User was deleted' });
}

// we can test out the PUT, DELETE requests by PostMan.
