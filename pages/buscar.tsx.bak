// pages/buscar.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { listProducts } from "@/lib/shop";

export default function BuscarPage() {
  const router = useRouter();
  const q = (router.query.q as string | undefined)?.trim() ?? "";

  const products = useMemo(() => {
    const all = listProducts();
    if (!q) return all; // si no hay query, muestra todo
    const needle = q.toLowerCase();
    return all.filter((p) =>
      [
        p.name?.toLowerCase(),
        p.short?.toLowerCase(),
        p.description?.toLowerCase(),
        ...(Array.isArray(p.tags) ? p.tags.map((t: string) => t.toLowerCase()) : []),
      ]
        .filter(Boolean)
        .some((field) => (field as string).includes(needle))
    );
  }, [q]);

  return (
    <>
      <Head>
        <title>Buscar: {q || "todo"} — PapoomArt</title>
        <meta
          name="description"
          content={`Resultados de búsqueda para "${q || "todo"}" en PapoomArt`}
        />
      </Head>

      <main className="container py-8">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Resultados {q ? `para “${q}”` : "de búsqueda"}
          </h1>
          {/* buscador arriba también, por comodidad */}
          <form action="/buscar" method="GET" className="relative w-full max-w-md">
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Buscar productos…"
              className="w-full rounded-md border border-gray-300 pl-3 pr-10 py-2 outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Buscar"
            >
              🔎
            </button>
          </form>
        </div>

        <p className="text-gray-500 mt-2">
          {products.length} resultado{products.length === 1 ? "" : "s"}
          {q ? ` para “${q}”` : ""}.
        </p>

        {products.length === 0 ? (
          <div className="mt-10 text-gray-600">
            <p>No encontramos coincidencias.</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Prueba con palabras más generales (ej. “stickers”, “libretas”).</li>
              <li>Revisa la ortografía.</li>
            </ul>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {products.map((p) => (
              <Link key={p.id} href={`/producto/${p.id}`} className="card overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{p.name}</h3>
                  {typeof p.price === "number" && (
                    <p className="text-gray-500 mt-1">S/ {p.price.toFixed(2)}</p>
                  )}
                  {p.short && <p className="text-sm text-gray-500 mt-2">{p.short}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
