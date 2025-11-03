// pages/tienda/etiquetas-cole.tsx
import Head from "next/head";
import Link from "next/link";

type QtyRow = { label: string; q1?: string; q2?: string; q3?: string };
function QtyTable({ rows, headers = ["Cantidad", "Precio 1", "Precio 2", "Precio 3"] }: {
  rows: QtyRow[];
  headers?: [string, string, string, string];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">{headers[0]}</th>
            <th className="px-4 py-2 text-left">{headers[1]}</th>
            <th className="px-4 py-2 text-left">{headers[2]}</th>
            <th className="px-4 py-2 text-left">{headers[3]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{r.label}</td>
              <td className="px-4 py-2">{r.q1 ?? "—"}</td>
              <td className="px-4 py-2">{r.q2 ?? "—"}</td>
              <td className="px-4 py-2">{r.q3 ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EtiquetasCole() {
  const wa = (msg: string) =>
    `https://wa.me/51997374878?text=${encodeURIComponent(msg)}`;

  return (
    <>
      <Head>
        <title>Etiquetas para el cole — PapoomArt</title>
        <meta
          name="description"
          content="Packs escolares y etiquetas personalizadas para cuadernos, libros, lápices, ropa termoadhesiva, loncheras, tomatodos, recipientes y más. Incluye sellos textiles y tags acrílicos."
        />
        <link rel="canonical" href="https://papoomart.vercel.app/tienda/etiquetas-cole" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        {/* Migas */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:underline">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Etiquetas para el cole</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Etiquetas para el cole
          </h1>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Todo lo que necesitas para marcar útiles y prendas: packs listos,
            etiquetas por tipo, sellos textiles y tags acrílicos.
          </p>
        </header>

        {/* PACKS ESCOLARES */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5">1) Packs escolares</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Básico */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack escolar básico — 69 etiquetas</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>20 etiquetas para cuadernos y libros</li>
                <li>40 etiquetas para lápices y colores</li>
                <li>2 etiquetas para loncheras</li>
                <li>4 etiquetas para cubiertos</li>
                <li>2 etiquetas para tomatodo</li>
                <li>1 tag acrílico para mochila</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 60.00</div>
              <a
                href={wa("Hola 👋, quiero el Pack escolar básico (69 etiquetas).")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Completo */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack escolar completo — 152 etiquetas</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>30 etiquetas para cuadernos y libros</li>
                <li>60 etiquetas para lápices y colores</li>
                <li>20 etiquetas de ropa termoadhesivas</li>
                <li>3 etiquetas para loncheras</li>
                <li>8 etiquetas para cubiertos</li>
                <li>4 etiquetas para tomatodo</li>
                <li>6 etiquetas para recipiente de comida</li>
                <li>1 tag acrílico para mochila</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 80.00</div>
              <a
                href={wa("Hola 👋, quiero el Pack escolar completo (152 etiquetas).")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="text-xl font-semibold">Pack escolar premium — 210 etiquetas + 1 sello textil</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                <li>40 etiquetas para cuadernos y libros</li>
                <li>80 etiquetas para lápices y colores</li>
                <li>40 etiquetas de ropa termoadhesivas</li>
                <li>4 etiquetas para loncheras</li>
                <li>10 etiquetas para cubiertos</li>
                <li>6 etiquetas para tomatodo</li>
                <li>8 etiquetas para recipiente de comida</li>
                <li>20 tarjetitas personalizadas</li>
                <li>2 tags acrílicos para mochila</li>
                <li>1 sello para ropa con tinta textil</li>
              </ul>
              <div className="mt-4 text-pink-600 font-bold text-lg">S/ 120.00</div>
              <a
                href={wa("Hola 👋, quiero el Pack escolar premium (210 etiquetas + sello).")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-[#F24B9B] px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* TERMOADHESIVAS */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5">2) Etiquetas de ropa termoadhesivas</h2>
          <p className="text-gray-600 mb-3">
            <span className="font-medium">Medida:</span> 4.5 × 1.5 cm
          </p>
          <QtyTable
            headers={["Cantidad", "Precio", "—", "—"]}
            rows={[
              { label: "20 unidades", q1: "S/ 30.00" },
              { label: "30 unidades", q1: "S/ 40.00" },
              { label: "40 unidades", q1: "S/ 50.00" },
            ]}
          />
        </section>

        {/* ETIQUETAS PARA ÚTILES */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5">3) Etiquetas para útiles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Para lápices y colores</h3>
              <QtyTable
                headers={["Cantidad", "Precio", "—", "—"]}
                rows={[
                  { label: "80 unidades", q1: "S/ —" },
                  { label: "120 unidades", q1: "S/ —" },
                ]}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Para cuadernos y libros</h3>
              <QtyTable
                headers={["Cantidad", "Precio", "—", "—"]}
                rows={[
                  { label: "25 unidades", q1: "S/ —" },
                  { label: "50 unidades", q1: "S/ —" },
                ]}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold">Para tajadores</h3>
              <QtyTable
                headers={["Cantidad", "Precio", "—", "—"]}
                rows={[
                  { label: "25 unidades", q1: "S/ —" },
                  { label: "50 unidades", q1: "S/ —" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* SELLOS PARA ROPA */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-5">4) Sellos para ropa</h2>
          <QtyTable
            headers={["Descripción", "Precio", "—", "—"]}
            rows={[
              { label: "1 sello con tinta textil", q1: "S/ —" },
              { label: "2 sellos con tinta textil", q1: "S/ —" },
            ]}
          />
        </section>

        {/* TAGS ACRÍLICOS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5">5) Tags acrílicos</h2>
          <QtyTable
            headers={["Cantidad", "Precio", "—", "—"]}
            rows={[
              { label: "5 tags", q1: "S/ —" },
              { label: "10 tags", q1: "S/ —" },
            ]}
          />
        </section>

        {/* CTA */}
        <div className="mb-24 text-center">
          <a
            href={wa("Hola PapoomArt 👋, quiero cotizar etiquetas escolares.")}
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
