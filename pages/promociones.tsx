// pages/promociones.tsx
import Head from "next/head";
import Link from "next/link";

export default function Promociones() {
  return (
    <>
      <Head>
        <title>Promociones — PapoomArt</title>
        <meta name="description" content="Ofertas y promociones especiales en PapoomArt." />
      </Head>

      <section className="py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Promociones</h1>
          <p className="mt-2 text-gray-600">
            Descubre nuestras ofertas especiales. Estilos de tarjeta pensados para promociones.
          </p>
        </header>

        {/* Grid de promos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-pink-200 bg-pink-50 p-4 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-xl bg-white grid place-content-center text-gray-400">
              Imagen Promo
            </div>
            <div className="mt-3">
              <h2 className="font-semibold">Pack etiquetas escolares</h2>
              <p className="text-sm text-gray-600">
                Antes S/ 49.90 • <span className="text-pink-600 font-semibold">Ahora S/ 34.90</span>
              </p>
              <Link href="/tienda/escolares" className="inline-block mt-3 rounded-md bg-pink-600 px-4 py-2 text-white hover:opacity-90">
                Ver detalles
              </Link>
            </div>
          </article>

          {/* Duplica/edita más cards aquí */}
        </div>
      </section>
    </>
  );
}
