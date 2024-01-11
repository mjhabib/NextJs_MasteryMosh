import { notFound } from 'next/navigation';
import React from 'react';

interface UserProps {
  params: { id: number };
}

// Note: only 'pages' have params not 'components', so if a component needs to have access to a page id, we can pass it there as a prop.
// Also, we can destructure the 'props' to:
// {params}: UserProps
// {params: {id}}: UserProps
export default function UserDetailPage(props: UserProps) {
  if (props.params.id > 10) notFound();
  return <div>UserDetailPage {props.params.id}</div>;
}
