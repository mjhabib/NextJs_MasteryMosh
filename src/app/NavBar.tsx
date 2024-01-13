import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <div className='flex bg-slate-200 p-5'>
      <Link href='/' className='mr-5'>
        NextJS
      </Link>
      <Link href='/users' className='mr-5'>
        Users
      </Link>
      <Link href='/products'>Products</Link>
    </div>
  );
}
