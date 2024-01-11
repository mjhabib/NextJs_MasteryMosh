import React from 'react';

interface PropsType {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: PropsType) {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
}
