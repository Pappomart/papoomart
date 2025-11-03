// pages/tienda/etiquetas-celebrar.tsx
import Head from "next/head";
import Link from "next/link";

type PriceRow = {
  size: string;
  p20?: string;
  p30?: string;
  p50?: string;
};

function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">Tamaño estándar</th>
            <th className="px-4 py-2 text-left">x20 unid</th>
            <th className="px-4 py-2 text-left">x30 unid</th>
            <th className="px-4 py-2 text-left">x50 unid</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{r.size}</td>
              <td className="px-4 py-2">{r.p20 ?? "—"}</td>
              <td className="px-4 py-2">{r.p30 ?? "—"}</td>
              <td className="px-4 py-2">{r.p50 ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EtiquetasCelebrar() {
  const wa = (msg: string) =>
    `https://wa.me/51997374878?text=${encodeURIComponent(msg)}`;

  return (
    <>
      <Head>
        <title>Etiquetas para celebrar — PapoomArt</title>
        <meta
          name="description"
          content="Packs de cumpleaños personalizados y etiquetas por tipo: rectangulares, cuadradas, circulares, mini stickers, tags, agradecimientos, mini rostros y tarjetones. Diseños a medida."
        />
        <link rel="canonical" href="https://papoomart.vercel.app/tienda/etiquetas-celebrar" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        {/* Migas */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:underline">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Etiquetas para celebrar</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Etiquetas para celebrar
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Personaliza tus dulces, botellas y sorpresas con el nombre del
            cumpleañero. Elige un pack listo o arma tus etiquetas por tipo.
          </p>
        </header>

        {/* PACKS */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5">1) Packs de cumpleaños personalizados</h2>
          <p className="text-gray-600 mb-6">
            Ideal para decorar dulces, botellas y sorpresas con la temática de la fiesta.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pack 1 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack 1 (básico) — 98 etiquetas</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>12 botellas (14×5 cm)</li>
                <li>12 sublimes (6.5×6.7 cm)</li>
                <li>12 paletas (6×6 cm)</li>
                <li>12 cua-cua (9×4 cm)</li>
                <li>20 besos de moza (3.5 cm)</li>
                <li>30 multiusos (3.5 cm)</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 22.00</div>
              <a
                href={wa("Hola PapoomArt 👋, quiero el Pack 1 (básico) de etiquetas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Pack 2 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack 2 (intermedio) — 121 etiquetas</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>12 botellas (14×5 cm)</li>
                <li>12 sublimes (6.5×6.7 cm)</li>
                <li>12 paletas (6.5 cm)</li>
                <li>12 cua-cua (9×4 cm)</li>
                <li>20 besos de moza (3.5 cm)</li>
                <li>35 multiusos (3.5 cm)</li>
                <li>18 cajitas de torta (8.5×8.5 cm)</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 25.00</div>
              <a
                href={wa("Hola PapoomArt 👋, quiero el Pack 2 (intermedio) de etiquetas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Pack 3 */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack 3 (premium) — 150 etiquetas</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>Incluye todo el <strong>Pack 2</strong></li>
                <li>15 Tarjetitas “Gracias por venir” (temáticas)</li>
                <li>14 Stickers redondos 5×5 cm (multiusos)</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 27.00</div>
              <a
                href={wa("Hola PapoomArt 👋, quiero el Pack 3 (premium) de etiquetas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ELIGE TUS ETIQUETAS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5">2) Elige tus etiquetas</h2>
          <p className="text-gray-600 mb-6">
            Ideal si solo necesitas un tipo de etiqueta o una reposición.
          </p>

          <div className="space-y-10">
            {/* Rectangulares */}
            <div>
              <h3 className="text-xl font-semibold">Rectangulares</h3>
              <p className="text-gray-600">
                Etiquetas clásicas para botellas, sublimes o empaques. <br />
                <span className="font-medium">Material:</span> Papel fotográfico adhesivo.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "14×5 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Cuadradas */}
            <div>
              <h3 className="text-xl font-semibold">Cuadradas</h3>
              <p className="text-gray-600">
                Diseños modernos para empaques o cajas de torta. <br />
                <span className="font-medium">Material:</span> Papel fotográfico adhesivo.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "8.5×8.5 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Circulares */}
            <div>
              <h3 className="text-xl font-semibold">Circulares</h3>
              <p className="text-gray-600">
                Versátiles para multiusos, besos de moza o sorpresas. <br />
                <span className="font-medium">Material:</span> Papel fotográfico adhesivo.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "3.5 cm Ø", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Mini stickers */}
            <div>
              <h3 className="text-xl font-semibold">Mini stickers</h3>
              <p className="text-gray-600">
                Pequeños y encantadores para decorar o marcar objetos. <br />
                <span className="font-medium">Material:</span> Papel fotográfico adhesivo.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "2×2 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Etiquetas grandes */}
            <div>
              <h3 className="text-xl font-semibold">Etiquetas grandes</h3>
              <p className="text-gray-600">
                Para destacar en tappers, loncheras o stickers decorativos. <br />
                <span className="font-medium">Material:</span> Papel fotográfico adhesivo.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "8×8 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Tags decorativos */}
            <div>
              <h3 className="text-xl font-semibold">Tags decorativos</h3>
              <p className="text-gray-600">
                Con o sin agujerito, listos para atar con cinta o cuerda. <br />
                <span className="font-medium">Material:</span> Cartulina couché.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "6×4 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Tarjetitas de agradecimiento */}
            <div>
              <h3 className="text-xl font-semibold">Tarjetitas de agradecimiento</h3>
              <p className="text-gray-600">
                Para acompañar pedidos, regalos o sorpresas. Personalizables con nombre,
                logo o frase. <br />
                <span className="font-medium">Material:</span> Cartulina couché o vinil brillante.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "8×4 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Mini rostros personalizados */}
            <div>
              <h3 className="text-xl font-semibold">Mini rostros personalizados</h3>
              <p className="text-gray-600">
                Stickers troquelados con el rostro (gorrito/lentes/tema). <br />
                <span className="font-medium">Material:</span> Cartulina couché o vinil brillante.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "3×3 cm (o según foto)", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>

            {/* Tarjetones / cupones */}
            <div>
              <h3 className="text-xl font-semibold">Tarjetones o cupones de fiesta</h3>
              <p className="text-gray-600">
                Tipo cupón con diseños temáticos (vales/pases para dulces o juegos). <br />
                <span className="font-medium">Material:</span> Cartulina gruesa o vinil brillante.
              </p>
              <div className="mt-3">
                <PriceTable
                  rows={[
                    { size: "5×3 cm", p20: "S/ —", p30: "S/ —", p50: "S/ —" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <div className="mb-24 text-center">
          <a
            href={wa("Hola PapoomArt 👋, quiero cotizar etiquetas para celebrar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#F24B9B] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
