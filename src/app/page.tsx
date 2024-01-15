import { getServerSession } from 'next-auth';
import ProductCard from './components/ProductCard';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  // server-side session access
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
    </main>
  );
}
