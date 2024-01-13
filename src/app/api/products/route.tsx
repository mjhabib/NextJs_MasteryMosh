import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/root/prisma/client';

export async function GET(req: NextRequest) {
  const products = await prisma.products.findMany();

  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    return NextResponse.json(zodValidation.error.errors);
  }

  const checkProduct = await prisma.products.findUnique({
    where: { name: body.name },
  });

  if (checkProduct) {
    return NextResponse.json({ error: 'Product already exists' });
  }

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct);
}
