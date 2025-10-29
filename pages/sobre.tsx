// pages/sobre.tsx
import Head from "next/head";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre nosotros — PapoomArt</title>
        <meta name="description" content="Conoce PapoomArt: nuestra historia, procesos y envíos." />
      </Head>

      <section className="py-10">
        <h1 className="text-3xl font-bold">Bienvenidos a PapoomArt</h1>
        <p className="mt-4 text-gray-700">
          Somos un taller de personalización y diseño que crea etiquetas, tarjetas y regalos únicos para tus momentos especiales.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="rounded-xl border p-4">
            <h2 className="font-semibold text-lg">Nuestros procesos</h2>
            <p className="mt-2 text-gray-700">
              Imprimimos en materiales de alta calidad y cortamos con plotter para lograr acabados precisos y durables.
            </p>
          </article>

          <article className="rounded-xl border p-4">
            <h2 className="font-semibold text-lg">Envíos</h2>
            <p className="mt-2 text-gray-700">
              Realizamos envíos a todo el Perú a través de <strong>Shalom</strong> y servicios de mensajería locales.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
