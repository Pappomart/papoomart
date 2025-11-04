// pages/politicas.tsx
import Head from "next/head";
import Link from "next/link";

export default function Politicas() {
  const title = "Políticas y Condiciones — PapoomArt";
  const desc =
    "Términos, envíos, cambios y privacidad de PapoomArt. Conoce cómo cuidamos tu compra y tus datos.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://papoomart.vercel.app/politicas" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://papoomart.vercel.app/politicas" />
      </Head>

      <main className="container mt-10">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Políticas y condiciones
          </h1>
          <p className="mt-3 text-gray-600">
            Queremos que tu experiencia sea clara, segura y bonita — como nuestros
            detalles ✨. Aquí te dejamos lo esencial.
          </p>
        </header>

        {/* Secciones */}
        <section className="mt-10 grid gap-8 max-w-3xl">
          <article className="card p-6">
            <h2 className="text-xl font-semibold">1. Envíos</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>• Lima Metropolitana: despacho regular o programado.</li>
              <li>
                • Provincias: envío por agencia (p. ej. <b>Shalom</b>) u operador
                equivalente a elección del cliente.
              </li>
              <li>• Envíos <b>express 24h</b> sujetos a confirmación por WhatsApp.</li>
              <li>• Envíos <b>gratis desde S/ 120</b> (aplica a zonas seleccionadas).</li>
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-semibold">2. Tiempos de producción</h2>
            <p className="mt-3 text-gray-700">
              Los productos personalizados requieren diseño y verificación. Te
              enviaremos un boceto para aprobación. Una vez aprobado, producimos
              y despachamos según la modalidad elegida.
            </p>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-semibold">3. Cambios y garantías</h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                • Si tu pedido llega con un defecto de fabricación, te
                <b> reponemos</b> la pieza afectada sin costo.
              </li>
              <li>
                • Por ser productos personalizados, no aplica derecho a
                desistimiento salvo fallas evidentes de producción.
              </li>
              <li>
                • Reporta incidencias dentro de las <b>48 horas</b> con fotos y
                número de orden a <a className="underline" href="mailto:papoomartperu@gmail.com">papoomartperu@gmail.com</a>.
              </li>
            </ul>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-semibold">4. Pagos</h2>
            <p className="mt-3 text-gray-700">
              Aceptamos tarjetas, depósito/transferencia, Yape y Plin. La
              producción inicia cuando el pago se registra o se confirma el abono.
            </p>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-semibold">5. Privacidad</h2>
            <p className="mt-3 text-gray-700">
              Cuidamos tus datos personales y los usamos solo para procesar y
              comunicarte sobre tu pedido o novedades del club. Para ejercer tus
              derechos ARCO escríbenos a{" "}
              <a className="underline" href="mailto:papoomartperu@gmail.com">
                papoomartperu@gmail.com
              </a>.
            </p>
          </article>

          <article className="card p-6">
            <h2 className="text-xl font-semibold">6. Libro de reclamaciones</h2>
            <p className="mt-3 text-gray-700">
              Conforme a la Ley N.º 29571, ponemos a tu disposición nuestro{" "}
              <Link className="underline" href="/reclamos">
                Libro de Reclamaciones
              </Link>
              .
            </p>
          </article>
        </section>

        <div className="mt-10">
          <a
            href={`https://wa.me/51997374878?text=${encodeURIComponent(
              "Hola PapoomArt 👋, tengo una consulta sobre políticas/condiciones."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            ¿Dudas? Escríbenos por WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
