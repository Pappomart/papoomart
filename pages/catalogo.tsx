
import Image from 'next/image';
import Link from 'next/link';
import { listProducts } from '@/lib/shop';

export default function Catalogo() {
  const products = listProducts();
  return (
    <main className="container mt-8">
      <h1 className="text-2xl font-semibold mb-6">Catálogo</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <Link key={p.id} href={`/producto/${p.id}`} className="card overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image src={p.image} alt={p.name} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-gray-500 mt-1">S/ {p.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">{p.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
