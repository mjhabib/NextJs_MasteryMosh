import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/root/prisma/client';

// to prevent caching so we can always get fresh data, we need to pass the req parameter, although we did not use it.
export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const zodValidation = schema.safeParse(body);
  if (!zodValidation.success) {
    return NextResponse.json(zodValidation.error.errors);
  }

  const checkUser = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (checkUser) {
    return NextResponse.json({ error: 'User already exists' });
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser);
}
// we could just simply pass on the 'body' constant above, but since we don't want malicious apps to inject any data into our DB, we specified the type of data (name, email) that we want to populate our DB with. (other properties have default values, so the're not required)

// we can test out the POST request by PostMan/RestMan.

// Steps to setup Prisma with MySQL
// 01. npm install prisma --save-dev
// 02. change the '.env' file to: mysql://USER:PASSWORD@HOST:PORT/DATABASE
// 03. change the file 'schema.prisma' & 'provider' to: 'mysql'
// 04. define your Model (table) in 'schema.prisma' (google prisma model)
// re-format the model using command: npx prisma format
// re-run 'mysql config' software if start at startup option is not active
// 05. migrate the model using command: npx prisma migrate dev
// to see/manage the data we can use 'JetBrains DataGrip' and setup a new 'mysql data source' for that
// 06. add/setup 'prisma client' file to our project so later on, we can use it for CRUD operations.
