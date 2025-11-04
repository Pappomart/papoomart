// pages/club.tsx
import Head from "next/head";

export default function Club() {
  const title = "Club PapoomArt — Beneficios y sorpresas";
  const desc =
    "Únete gratis al Club PapoomArt: descuentos, ideas y lanzamientos exclusivos. ¡Sé parte de la magia!";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://papoomart.vercel.app/club" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://papoomart.vercel.app/club" />
      </Head>

      <main className="container mt-10">
        <header className="max-w-3xl text-center mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Club PapoomArt
          </h1>
          <p className="mt-3 text-gray-600">
            Promos secretas, lanzamientos antes que todos y contenido que inspira 🎀
          </p>
        </header>

        {/* Beneficios */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Descuentos exclusivos</h3>
            <p className="mt-2 text-gray-600">
              Códigos para members-only en fechas especiales y campañas.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Ideas & plantillas</h3>
            <p className="mt-2 text-gray-600">
              Inspiración, colores y tips para armar tus detalles como pro.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Acceso anticipado</h3>
            <p className="mt-2 text-gray-600">
              Sé el primero en probar nuevos productos y temáticas de temporada.
            </p>
          </div>
        </section>

        {/* Planes (gratuito y premium opcional) */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card p-8 border-2 border-teal-200">
            <h3 className="text-2xl font-bold text-teal-800">Free</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Boletín mensual con ideas y promos</li>
              <li>• Descuento sorpresa en campañas</li>
              <li>• Descargables seleccionados</li>
            </ul>
            <form
              className="mt-6 flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements.namedItem("email") as HTMLInputElement);
                if (!input?.value) return;
                fetch("/api/subscribe", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: input.value }),
                })
                  .then((r) => (r.ok ? alert("¡Bienvenido al Club! 🎉") : alert("No pudimos suscribirte, intenta de nuevo.")))
                  .catch(() => alert("Error de red."))
                  .finally(() => { if (input) input.value = ""; });
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Tu email"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button type="submit" className="btn btn-primary">
                Unirme
              </button>
            </form>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold">Premium (próximamente)</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Descuentos permanentes</li>
              <li>• Prioridad en fechas de alta demanda</li>
              <li>• Kits exclusivos por temporada</li>
            </ul>
            <p className="mt-4 text-gray-500">
              Estamos afinando la experiencia ✨. Déjanos tu correo en la opción Free
              y te avisamos apenas esté listo.
            </p>
          </div>
        </section>

        {/* CTA WhatsApp */}
        <div className="card p-6 md:p-10 text-center mt-12">
          <h3 className="text-xl font-semibold">¿Quieres un pack a tu medida?</h3>
          <p className="text-gray-600 mt-2">
            Escríbenos y armamos tu idea con el mejor look.
          </p>
          <a
            href={`https://wa.me/51997374878?text=${encodeURIComponent(
              "Hola PapoomArt 👋, quiero unirme al Club y cotizar un pack personalizado."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4 inline-block"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
