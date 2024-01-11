import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <h1>Error 404, NOT FOUND</h1>
      <h2 className='py-3 text-lg'>
        Sorry, the page you were looking for, does not exist
      </h2>
      <Link className='btn btn-info' href='/'>
        Go Back to Home
      </Link>
    </div>
  );
}
