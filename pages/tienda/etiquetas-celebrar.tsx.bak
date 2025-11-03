// pages/carrito.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useCallback } from "react";
import { getCart, removeFromCart, total, listProducts } from "@/lib/shop";

type CartItem = ReturnType<typeof getCart>[number];
type Product = ReturnType<typeof listProducts>[number];

// Formateo de moneda (PEN)
const PEN = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  minimumFractionDigits: 2,
});

export default function Carrito() {
  const [items, setItems] = useState<CartItem[]>([]);
  const productsMap = useMemo(() => {
    const map = new Map<string, Product>();
    for (const p of listProducts()) map.set(p.id, p);
    return map;
  }, []);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const refresh = useCallback(() => setItems(getCart()), []);
  const onRemove = useCallback((id: string) => {
    removeFromCart(id);
    refresh();
  }, [refresh]);

  const subtotal = total(items);

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-700">
            Tu carrito está vacío.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="/tienda"
              className="rounded-md bg-pink-600 px-4 py-2 text-white hover:opacity-90"
            >
              Ir a la tienda
            </Link>
            <Link
              href="/promociones"
              className="rounded-md border border-pink-200 bg-pink-50 px-4 py-2 text-pink-700 hover:bg-pink-100"
            >
              Ver promociones
            </Link>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Si tu sitio usa “/catalogo”, cambia el enlace de arriba a <code>/catalogo</code>.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          {/* Lista de productos */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {items.map((it, idx) => {
              const p = productsMap.get(it.id);
              if (!p) return null; // seguridad si el producto ya no existe

              const line = (p.price ?? 0) * it.qty;
              return (
                <div
                  key={`${it.id}-${idx}`}
                  className="flex items-center justify-between gap-4 p-4 border-b last:border-0"
                >
                  <div className="flex items-center gap-4">
                    {/* Miniatura si existe p.image */}
                    {"image" in p && p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={p.image as string}
                        alt={p.name}
                        className="h-16 w-16 rounded-md object-cover border"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-md border grid place-content-center text-xs text-gray-400">
                        Sin imagen
                      </div>
                    )}

                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-sm text-gray-500">Cantidad: x{it.qty}</p>
                      <p className="text-sm text-gray-600">
                        Precio unitario: {PEN.format(p.price ?? 0)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">{PEN.format(line)}</p>
                    <button
                      onClick={() => onRemove(it.id)}
                      className="text-red-600 hover:text-red-700 underline"
                      aria-label={`Eliminar ${p.name} del carrito`}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resumen */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-6 h-fit">
            <h2 className="text-xl font-semibold">Resumen</h2>
            <div className="mt-4 flex items-center justify-between text-base">
              <span>Subtotal</span>
              <span className="font-semibold">{PEN.format(subtotal)}</span>
            </div>

            {/* Botón pagar (placeholder) */}
            <button
              className="mt-6 w-full rounded-md bg-pink-600 px-4 py-2 font-semibold text-white hover:opacity-90"
              onClick={() =>
                alert("Conecta tu pasarela de pago en /pages/api/checkout.ts (Culqi, Mercado Pago o PayPal)")
              }
            >
              Pagar
            </button>
            <p className="mt-2 text-xs text-gray-500">
              Se abrirá la pasarela cuando esté configurada.
            </p>

            {/* Enlaces útiles */}
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/tienda" className="text-pink-600 hover:underline">
                Seguir comprando
              </Link>
              <Link href="/promociones" className="text-pink-600 hover:underline">
                Ver promociones
              </Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
