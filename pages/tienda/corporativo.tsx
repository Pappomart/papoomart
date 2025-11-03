// pages/tienda/corporativo.tsx
import Head from "next/head";
import Link from "next/link";

export default function Corporativo() {
  const wa = (msg: string) =>
    `https://wa.me/51997374878?text=${encodeURIComponent(msg)}`;

  return (
    <>
      <Head>
        <title>Papoom Corporativo — Soluciones para empresas</title>
        <meta
          name="description"
          content="Stickers corporativos, tarjetas, tags, libretas, lapiceros y regalos empresariales personalizados. Boxes corporativos básicos, intermedios y premium."
        />
        <link rel="canonical" href="https://papoomart.vercel.app/tienda/corporativo" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        {/* Migas */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:underline">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Papoom Corporativo</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Papoom Corporativo
          </h1>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Soluciones creativas y personalizadas para empresas, clientes o colaboradores.
            Perfecto para campañas, eventos y fortalecimiento de marca.
          </p>
          <div className="mt-4">
            <a
              href={wa("Hola 👋, quiero información de Papoom Corporativo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#F24B9B] px-5 py-2.5 font-semibold text-white hover:opacity-90"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </header>

        {/* Productos/servicios */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* 1 Stickers corporativos */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">1) Stickers corporativos</h2>
            <p className="mt-2 text-gray-700">
              Etiquetas adhesivas con logotipo o branding de la empresa. Ideal para
              empaques, sobres, cajas o merchandising.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Material: vinil brillante o mate</li>
              <li>Formas: circular, rectangular, troquelado</li>
              <li>Tamaños a medida y tirajes por volumen</li>
            </ul>
            <a
              href={wa("Quiero cotizar Stickers corporativos")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 2 Tarjetas de publicidad */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">2) Tarjetas de publicidad</h2>
            <p className="mt-2 text-gray-700">
              ¡Promociona tu emprendimiento con estilo! Crea tus tarjetas
              personalizadas y lleva tu marca a otro nivel. Perfectas para eventos,
              ferias o incluir en cada venta.
            </p>
            <p className="mt-2 text-gray-600 italic">
              💖 Haz que cada tarjeta hable por ti.
            </p>
            <a
              href={wa("Quiero cotizar Tarjetas de publicidad")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 3 Tarjetas de agradecimiento */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">3) Tarjetas de agradecimiento</h2>
            <p className="mt-2 text-gray-700">
              “Gracias por tu compra” o “Hecho con amor” con tu logotipo.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Material: vinil brillante o mate, o cartulina premium</li>
              <li>Diseños a medida y mensajes personalizados</li>
            </ul>
            <a
              href={wa("Quiero cotizar Tarjetas de agradecimiento")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 4 Tags colgantes */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">4) Tags colgantes para productos</h2>
            <p className="mt-2 text-gray-700">
              Etiquetas colgantes con logotipo o info del producto.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Material: cartulina couché o kraft gruesa</li>
              <li>Con perforación y cordón opcional</li>
            </ul>
            <a
              href={wa("Quiero cotizar Tags colgantes para productos")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 5 Lapiceros */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">5) Lapiceros personalizados</h2>
            <p className="mt-2 text-gray-700">
              Personalizados con nombres, frases o logotipos. Ideales para regalos,
              eventos o kits corporativos.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Colores y estilos variados</li>
              <li>Impresión/gravado según modelo</li>
            </ul>
            <a
              href={wa("Quiero cotizar Lapiceros corporativos")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 6 Libretas */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">6) Libretas personalizadas</h2>
            <p className="mt-2 text-gray-700">
              Diseñadas con materiales de calidad. Personaliza con nombre, frase o
              logo de tu empresa.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Portadas rígidas o flexibles</li>
              <li>Opciones con elástico y porta-lapicero</li>
            </ul>
            <a
              href={wa("Quiero cotizar Libretas corporativas")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
            >
              Pedir cotización
            </a>
          </article>

          {/* 7 Regalos corporativos */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold">7) Regalos corporativos personalizados (Premium)</h2>
            <p className="mt-2 text-gray-700">
              Impresiona a clientes y colaboradores con detalles que reflejen tu
              identidad. Diseños con logo y colores institucionales.
            </p>

            {/* Boxes */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* Box 1 */}
              <div className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold">🎀 BOX 1: “Esencial corporativo”</h3>
                <p className="text-sm text-gray-600 mt-1">Ideal: detalles de agradecimiento o eventos internos.</p>
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                  <li>Libreta personalizada</li>
                  <li>Lapicero personalizado</li>
                  <li>Tarjeta con frase motivadora</li>
                  <li>Sticker/etiqueta decorativa</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Presentación: bolsita decorativa o caja personalizada.
                </p>
                <a
                  href={wa("Quiero cotizar BOX 1 Esencial corporativo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
                >
                  Cotizar BOX 1
                </a>
              </div>

              {/* Box 2 */}
              <div className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold">🌈 BOX 2: “Crea & Disfruta”</h3>
                <p className="text-sm text-gray-600 mt-1">Ideal: campañas, aniversarios o reconocimientos.</p>
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                  <li>Libreta personalizada</li>
                  <li>Lapicero con logo/frase</li>
                  <li>Frasquito con dulces o frutos secos</li>
                  <li>Tarjeta con mensaje corporativo</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Presentación: caja kraft decorada con cinta y etiqueta.
                </p>
                <a
                  href={wa("Quiero cotizar BOX 2 Crea & Disfruta")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
                >
                  Cotizar BOX 2
                </a>
              </div>

              {/* Box 3 */}
              <div className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold">💎 BOX 3: “Momento Premium”</h3>
                <p className="text-sm text-gray-600 mt-1">Ideal: fin de año, liderazgo o clientes importantes.</p>
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                  <li>Libreta premium (portada grabada o exclusiva)</li>
                  <li>Lapicero elegante personalizado</li>
                  <li>Mini vela aromática o café/té gourmet</li>
                  <li>Frasquito con mix saludable</li>
                  <li>Tarjeta personalizada con logo y mensaje</li>
                </ul>
                <p className="mt-2 text-gray-600">
                  Presentación: neceser rígido o caja premium con relleno y moño.
                </p>
                <a
                  href={wa("Quiero cotizar BOX 3 Momento Premium")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
                >
                  Cotizar BOX 3
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* CTA final */}
        <div className="mt-10 mb-24 text-center">
          <a
            href={wa("Hola PapoomArt 👋, quiero una propuesta corporativa a medida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#F24B9B] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Solicitar propuesta personalizada
          </a>
        </div>
      </main>
    </>
  );
}
