
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getProduct, addToCart } from '@/lib/shop';
import { useState } from 'react';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = typeof id === 'string' ? getProduct(id) : undefined;
  const [qty, setQty] = useState(1);

  if (!product) return <main className="container mt-8"><p>Producto no encontrado.</p></main>;

  return (
    <main className="container mt-8 grid md:grid-cols-2 gap-8 items-start">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-white">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-gray-500 mt-1">S/ {product.price.toFixed(2)}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="flex items-center gap-3 mt-6">
          <input type="number" min={1} value={qty} onChange={e=>setQty(parseInt(e.target.value)||1)}
            className="w-20 border rounded px-3 py-2" />
          <button
            className="btn btn-primary"
            onClick={()=>{ addToCart(product.id, qty); alert('Agregado al carrito'); }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </main>
  );
}
