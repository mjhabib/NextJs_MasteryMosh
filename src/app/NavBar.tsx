'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  const { status, data: session } = useSession();
  // rename data to session

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
      <Link href='/' className='mr-5'>
        NextJS
      </Link>
      <Link href='/users' className='mr-5'>
        Users
      </Link>
      <Link href='/products' className='mr-5'>
        Products
      </Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href='api/auth/signout' className='ml-5'>
            Sign Out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  );
}
