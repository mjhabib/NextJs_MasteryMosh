import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mastering NextJs 14.0.5.-canary.46',
  description: 'Followed by Mosh Hamedani',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='winter'>
      <body className={inter.className}>
        <NavBar />
        <main className='p-5'>{children}</main>
      </body>
    </html>
  );
}

