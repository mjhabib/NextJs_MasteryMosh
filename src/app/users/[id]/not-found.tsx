import Link from 'next/link';
import React from 'react';

export default function NotFoundUserPage() {
  return (
    <div>
      <h1>Error 404, USER NOT FOUND</h1>
      <h2 className='py-3 text-lg'>
        Sorry, the user you were looking for, does not exist
      </h2>
      <Link className='btn btn-info' href='/users'>
        Go Back to Users
      </Link>
    </div>
  );
}
