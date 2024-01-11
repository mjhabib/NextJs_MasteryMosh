import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface UsersType {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  sortOrder: string;
}

export default async function UserTable({ sortOrder }: UserProps) {
  // also we can pass '{next: {revalidate: 10}}' instead of '{cache: 'no-store'}' as second arg to our fetch function to get new fresh data every 10 seconds.
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });

  const users: UsersType[] = await res.json();
  // fetching data on server has many benefits like security and performance, so it's ideal for our app to use 'server data fetching' when possible instead of 'client data fetching'

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
