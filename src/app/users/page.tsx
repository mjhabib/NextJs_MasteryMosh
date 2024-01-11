import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface UserProps {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({ searchParams }: UserProps) {
  return (
    <>
      <h1>Users</h1>
      <Link href='/users/new' className='btn'>
        New User
      </Link>
      {/* streaming technique, as long as we're waiting to fetch data */}
      <Suspense fallback={<div>loading ...</div>}>
        <UserTable sortOrder={searchParams.sortOrder} />
      </Suspense>
    </>
    // we can only have access to our Query String param 'sortOrder' here in this page, not in a component page like 'UserTable', so we can send it there as a prop.
    // Also, to not get a type error here, we need to define an interface of sortOrder type in our child component since we are passing it as prop there.
  );
}

// Note: we're using Query String parameters instead of react hooks for sorting, which has many benefits since it's a way to send params to the server.
