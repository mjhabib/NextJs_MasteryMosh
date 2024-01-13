import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/root/prisma/client';

interface props {
  params: { id: string };
  // the type of value we get from URL is string
}

export async function GET(req: NextRequest, { params }: props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
    // since the 'id' here is an int, we need to convert our 'params.id' to int too.
  });

  if (!user) {
    return NextResponse.json({ error: 'The user was not found!' });
  }
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: props) {
  const body = await req.json();

  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    return NextResponse.json(zodValidation.error.errors);
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User was not found' });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(req: NextRequest, { params }: props) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: 'User was not found' });
  }

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({ message: 'User was deleted' });
}

// we can test out the PUT, DELETE requests by PostMan/RestMan.
