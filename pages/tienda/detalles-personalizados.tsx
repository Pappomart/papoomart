// pages/tienda/detalles-personalizados.tsx
import Head from "next/head";
import Link from "next/link";

export default function DetallesPersonalizados() {
  const wa = (msg: string) =>
    `https://wa.me/51997374878?text=${encodeURIComponent(msg)}`;

  return (
    <>
      <Head>
        <title>Detalles personalizados — PapoomArt</title>
        <meta
          name="description"
          content="Nombres personalizados, lapiceros, tarjetitas, envases de sorpresa y detalles únicos hechos a tu medida. Pide por WhatsApp."
        />
        <link
          rel="canonical"
          href="https://papoomart.vercel.app/tienda/detalles-personalizados"
        />
      </Head>

      <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        {/* Migas */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:underline">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Detalles personalizados</span>
        </nav>

        {/* Título */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Detalles personalizados
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Personaliza cada regalo con nombres, lapiceros, tarjetitas, envases
            para sorpresa y pequeños recuerdos. Hecho con cariño en Perú. ✨
          </p>
        </header>

        {/* Grid de productos/servicios */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* 1. Nombres personalizados */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">1) Nombres personalizados</h2>
            <p className="mt-2 text-gray-700">
              Dale un toque único a cualquier regalo. Ideales para libretas,
              tazas, cuadernos o el escritorio. Materiales de alta calidad y
              diseños cuidadosamente elaborados.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Vinil adhesivo o acrílico (según uso)</li>
              <li>Tipografías a elección (script, serif, sans)</li>
              <li>Opciones con brillo, mate o glitter</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={wa("Hola 👋, quiero cotizar Nombres personalizados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </article>

          {/* 2. Lapiceros personalizados */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">2) Lapiceros personalizados</h2>
            <p className="mt-2 text-gray-700">
              ¡Escribir también puede ser divertido! Personaliza colores,
              nombres, frases o diseños únicos para que cada trazo sea especial.
              Perfectos para uso personal o como detalle creativo.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Grabado o impresión con nombre/frase</li>
              <li>Colores sólidos o perlados</li>
              <li>Packs para empresas, colegios o eventos</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={wa("Hola 👋, quiero cotizar Lapiceros personalizados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </article>

          {/* 3. Tarjetitas especiales */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">3) Tarjetitas especiales</h2>
            <p className="mt-2 text-gray-700">
              Diseñadas con estilos únicos y mensajes personalizados, para
              transformar cualquier ocasión en un recuerdo inolvidable.
              ¡El complemento perfecto para tus regalos!
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Cartulina couché o premium texturizada</li>
              <li>Formatos mini, estándar y tarjetón</li>
              <li>Incluye sobre opcional y QR para mensaje</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={wa("Hola 👋, quiero cotizar Tarjetitas especiales.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </article>

          {/* 4. Envases para sorpresa */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">4) Envases para sorpresa</h2>
            <p className="mt-2 text-gray-700">
              La presentación también enamora. Cajas, frascos o bolsitas
              decoradas a mano que convierten cada obsequio en una experiencia
              encantadora. Personalízalos a tu gusto.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Cajas tipo lunch, pillow o cubo</li>
              <li>Frascos con etiqueta y cinta</li>
              <li>Bolsitas kraft/transparentes con tag</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={wa("Hola 👋, quiero cotizar Envases para sorpresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </article>

          {/* 5. Detalles únicos para el recuerdo */}
          <article className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold">5) Detalles únicos para el recuerdo</h2>
            <p className="mt-2 text-gray-700">
              Pequeños detalles llenos de creatividad: frasquitos con dulces,
              gomitas, frutos secos o mini recuerdos decorativos. Ideales para
              complementar libretas, lapiceros o tarjetas especiales.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-600">
              <li>Etiquetas y cintas a juego con tu temática</li>
              <li>Opciones eco-friendly y sin azúcar (a pedido)</li>
              <li>Personalización con nombre, fecha o logo</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={wa("Hola 👋, quiero cotizar Detalles únicos para el recuerdo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#F24B9B] px-4 py-2 text-white font-semibold hover:opacity-90"
              >
                Cotizar por WhatsApp
              </a>
              <Link
                href="/tienda/etiquetas-celebrar"
                className="rounded-md border border-[#F24B9B] px-4 py-2 font-semibold text-[#F24B9B] hover:bg-pink-50"
              >
                Ver etiquetas para celebrar
              </Link>
            </div>
          </article>
        </section>

        {/* CTA final */}
        <div className="mt-10 mb-24 text-center">
          <a
            href={wa("Hola PapoomArt 👋, quiero armar un set de detalles personalizados.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#F24B9B] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Armar mi set ahora
          </a>
        </div>
      </main>
    </>
  );
}
