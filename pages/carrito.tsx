
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCart, removeFromCart, total } from '@/lib/shop';
import { listProducts } from '@/lib/shop';

export default function Carrito() {
  const [items, setItems] = useState(getCart());
  const map = new Map(listProducts().map(p => [p.id, p]));
  useEffect(()=>{ setItems(getCart()); },[]);

  const subtotal = total(items);

  return (
    <main className="container mt-8">
      <h1 className="text-2xl font-semibold mb-6">Carrito</h1>
      {items.length === 0 ? (
        <p>Tu carrito está vacío. <Link className="underline" href="/catalogo">Ir al catálogo</Link></p>
      ) : (
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="card divide-y">
            {items.map((it, idx)=>{
              const p = map.get(it.id)!;
              return (
                <div key={idx} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-gray-500">x{it.qty}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>S/ {(p.price*it.qty).toFixed(2)}</p>
                    <button className="text-red-600" onClick={()=>{ removeFromCart(it.id); setItems(getCart()); }}>Eliminar</button>
                  </div>
                </div>
              );
            })}
          </div>
          <aside className="card p-6 h-fit">
            <h2 className="font-semibold">Resumen</h2>
            <div className="flex items-center justify-between mt-3">
              <span>Subtotal</span><span>S/ {subtotal.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-primary w-full mt-6"
              onClick={()=>alert('Conecta tu pasarela de pago en /pages/api/checkout.ts')}
            >
              Pagar
            </button>
            <p className="text-xs text-gray-500 mt-2">Se abrirá la pasarela (Culqi / Mercado Pago / PayPal) cuando esté configurada.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
