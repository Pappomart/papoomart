// pages/instrucciones.tsx
import Head from "next/head";
import Link from "next/link";

export default function Instrucciones() {
  const wa = `https://wa.me/51997374878?text=${encodeURIComponent(
    "Hola PapoomArt 👋 Tengo una consulta sobre las etiquetas."
  )}`;

  return (
    <>
      <Head>
        <title>Instrucciones de uso — PapoomArt</title>
        <meta
          name="description"
          content="Guía práctica para colocar y cuidar tus etiquetas PapoomArt: superficies recomendadas, pasos de aplicación, tips de duración, lavado y solución de problemas."
        />
        <link rel="canonical" href="https://papoomart.vercel.app/instrucciones" />
        <meta property="og:title" content="Instrucciones de uso — PapoomArt" />
        <meta
          property="og:description"
          content="Aprende a colocar tus etiquetas, tags y stickers como una pro. Consejos de limpieza, curado y mantenimiento."
        />
      </Head>

      <main className="container py-10">
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Instrucciones de uso
          </h1>
          <p className="mt-3 text-gray-600">
            Aquí tienes una guía clara para que tus{" "}
            <strong>etiquetas, stickers y tags PapoomArt</strong> luzcan
            perfectos y duren mucho. Sigue los pasos según el tipo de producto
            que compraste.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              ¿Dudas? Escríbenos por WhatsApp
            </a>
            <Link href="/politicas" className="btn btn-outline">
              Revisa políticas y garantía
            </Link>
          </div>
        </header>

        {/* Índice */}
        <nav className="mt-10 grid md:grid-cols-2 gap-4">
          {[
            ["Antes de empezar", "#antes"],
            ["Stickers adhesivos (papel fotográfico/vinil)", "#adhesivos"],
            ["Etiquetas termoadhesivas para ropa", "#ropa"],
            ["Etiquetas para útiles, botellas y loncheras", "#utiles"],
            ["Cuidado y mantenimiento", "#cuidado"],
            ["Solución de problemas", "#solucion"],
            ["Preguntas frecuentes", "#faq"],
          ].map(([txt, href]) => (
            <a
              key={href}
              href={href}
              className="card p-4 hover:shadow-md transition"
            >
              <p className="font-medium">{txt}</p>
              <span className="text-sm text-gray-500">Ver detalles →</span>
            </a>
          ))}
        </nav>

        {/* ANTES DE EMPEZAR */}
        <section id="antes" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">Antes de empezar</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Aplica en superficies <strong>lisas, limpias y secas</strong>: vidrio,
              plástico, metal, cartón laminado, laptops, tappers lisos, etc.
            </li>
            <li>
              Evita superficies <strong>porosas o con textura</strong> (telas no
              planas, silicona, madera cruda) y zonas con <strong>aceite o polvo</strong>.
            </li>
            <li>
              Limpia con un paño suave y un poco de alcohol isopropílico (sin
              empapar). Deja secar 100%.
            </li>
            <li>
              Coloca las etiquetas a temperatura ambiente. Si el envase estuvo
              muy frío o caliente, espera a que se estabilice.
            </li>
          </ul>
        </section>

        {/* ADHESIVOS */}
        <section id="adhesivos" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Stickers adhesivos (papel fotográfico o vinil)
          </h2>
          <p className="mt-3 text-gray-700">
            Este tipo incluye: <em>rectangulares, cuadradas, circulares, mini,
            multiusos, tags adhesivos y tarjetitas adhesivas</em>.
          </p>

          <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-700">
            <li>
              <strong>Limpia</strong> la superficie (ver “Antes de empezar”).
            </li>
            <li>
              <strong>Despega</strong> con cuidado el sticker sujetándolo por los
              bordes para no tocar el adhesivo.
            </li>
            <li>
              <strong>Posiciona</strong> de un borde al otro y pega de forma
              progresiva, evitando burbujas. Puedes ayudarte de una tarjeta
              plástica para alisar suavemente.
            </li>
            <li>
              <strong>Presiona</strong> durante 10–15 segundos para fijar.
            </li>
            <li>
              <strong>Curado</strong>: espera 24 h antes de lavar o exponer a
              humedad constante. Para lavavajillas y microondas, usa{" "}
              <strong>vinil</strong>; el papel fotográfico es decorativo y
              <em> no</em> apto para lavavajillas.
            </li>
          </ol>

          <div className="mt-4 p-4 bg-yellow-50 rounded-md text-yellow-800">
            <p className="font-medium">Tip de duración</p>
            <p className="text-sm">
              En tappers o botellas, lava a mano con esponja suave. Evita
              remojos prolongados y fricción fuerte sobre el borde del sticker.
            </p>
          </div>
        </section>

        {/* ROPA */}
        <section id="ropa" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Etiquetas <span className="whitespace-nowrap">termoadhesivas</span> para ropa
          </h2>
          <p className="mt-3 text-gray-700">
            Diseñadas para prendas de algodón o mezclas. No aplicar en telas
            muy elásticas, peludas o con relieve muy marcado.
          </p>

          <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-700">
            <li>
              <strong>Prepara</strong> la prenda sobre una superficie dura (mesa
              o tabla). Evita planchar sobre la cama.
            </li>
            <li>
              <strong>Configura la plancha</strong> entre 150–160&nbsp;°C (sin vapor).
              Para plancha doméstica: nivel “algodón” medio/alto.
            </li>
            <li>
              <strong>Coloca</strong> la etiqueta donde quieras (preferible en
              zonas lisas internas). Cubre con papel manteca o un paño fino.
            </li>
            <li>
              <strong>Plancha</strong> presionando firme 10–15 segundos. Retira,
              deja enfriar 5 segundos y revisa bordes. Si falta, repite 5–8 s.
            </li>
            <li>
              <strong>Curado</strong>: espera 24 h antes del primer lavado.
              Lava con agua fría o tibia y evita secadora alta.
            </li>
          </ol>

          <div className="mt-4 p-4 bg-teal-50 rounded-md text-teal-900">
            <p className="font-medium">¿Se levantó un borde?</p>
            <p className="text-sm">
              Repite el planchado con paño protector y presión localizada 5–8 s.
            </p>
          </div>
        </section>

        {/* UTILES */}
        <section id="utiles" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Etiquetas para útiles, botellas y loncheras
          </h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-semibold">Útiles (lápices, cuadernos)</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5">
                <li>Limpia con un paño seco el área de pegado.</li>
                <li>Evita tocar el adhesivo con los dedos.</li>
                <li>Presiona 10 segundos. Curado 12–24 h.</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold">Botellas, tomatodos y tappers</h3>
              <ul className="mt-2 text-gray-700 list-disc pl-5">
                <li>Preferir superficies lisas y rígidas (no silicona).</li>
                <li>Para lavavajillas: elige vinil. Papel fotográfico = decorativo.</li>
                <li>Lavar a mano y evitar fricción sobre el borde del sticker.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CUIDADO */}
        <section id="cuidado" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">Cuidado y mantenimiento</h2>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Respeta el <strong>tiempo de curado</strong> antes de lavar o
              exponer a humedad.
            </li>
            <li>
              Evita químicos fuertes, cloro directo o esponjas abrasivas.
            </li>
            <li>
              En ropa, lava del revés y evita secadora alta.
            </li>
            <li>
              Guarda los stickers no usados en su sobre, lejos del sol y calor.
            </li>
          </ul>
        </section>

        {/* SOLUCIÓN PROBLEMAS */}
        <section id="solucion" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">Solución de problemas</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3">Situación</th>
                  <th className="p-3">Posible causa</th>
                  <th className="p-3">Qué hacer</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3">Se despega rápido</td>
                  <td className="p-3">Superficie con polvo/aceite o porosa</td>
                  <td className="p-3">
                    Limpia con alcohol, seca bien y vuelve a aplicar. Usa
                    superficies lisas.
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Burbujas al colocar</td>
                  <td className="p-3">Pegado muy rápido o sin alisar</td>
                  <td className="p-3">
                    Levanta apenas el borde y alisa con tarjeta desde el centro
                    hacia afuera.
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Etiqueta de ropa se levanta</td>
                  <td className="p-3">Poca presión o temperatura baja</td>
                  <td className="p-3">
                    Repite planchado 5–8 s con paño y presión firme. Deja curar
                    24 h.
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Se dañó en lavavajillas</td>
                  <td className="p-3">Papel fotográfico en calor/agua a presión</td>
                  <td className="p-3">
                    Para lavavajillas usa <strong>vinil</strong>. El papel
                    fotográfico es decorativo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-14 max-w-4xl">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-4 space-y-4">
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">
                ¿Cuánto duran las etiquetas?
              </summary>
              <p className="mt-2 text-gray-700">
                Depende del uso. En superficies lisas y cuidando el lavado,
                pueden durar muchos meses. En ropa, con planchado correcto y
                lavados suaves, resisten la temporada escolar sin problema.
              </p>
            </details>
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">
                ¿Puedo usarlas en termos o botellas frías/calientes?
              </summary>
              <p className="mt-2 text-gray-700">
                Sí, pero evita condensación excesiva durante el curado (24 h).
                Para lavavajillas o calor, elige vinil.
              </p>
            </details>
            <details className="card p-4">
              <summary className="font-medium cursor-pointer">
                ¿Cómo retiro una etiqueta?
              </summary>
              <p className="mt-2 text-gray-700">
                Levanta un borde con la uña y retira lentamente. Si queda
                residuo, aplica un poco de alcohol o removedor suave de adhesivo
                y limpia con paño.
              </p>
            </details>
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-16 text-center">
          <p className="text-gray-700">
            ¿Necesitas ayuda personalizada o una recomendación para tu caso?
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hablar por WhatsApp
            </a>
            <Link href="/catalogo" className="btn btn-outline">
              Ver catálogo
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
