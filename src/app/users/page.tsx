import React from 'react';

interface UsersType {
  id: number;
  name: string;
}

export default async function UsersPage() {
  // also we can pass '{next: {revalidate: 10}}' instead of '{cache: 'no-store'}' as second arg to our fetch function to get new fresh data every 10 seconds.
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: UsersType[] = await res.json();
  // fetching data on server has many benefits like security and performance, so it's ideal for our app to use 'server data fetching' when possible instead of 'client data fetching'

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}