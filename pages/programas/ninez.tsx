// pages/programas/ninez.tsx
import Head from "next/head";
import Link from "next/link";

export default function Ninez() {
  return (
    <>
      <Head>
        <title>Programa Niñez — DonaSonrisas</title>
        <meta name="description" content="Protección, alimentación y espacios seguros para niños y niñas."/>
      </Head>

      <section className="container mt-10">
        <h1 className="text-3xl font-bold">Programa Niñez</h1>
        <p className="mt-2 text-gray-600">Protegemos y acompañamos la primera infancia.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold">¿Qué hacemos?</h2>
            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
              <li>Kits alimentarios y nutrición.</li>
              <li>Espacios seguros y recreativos.</li>
              <li>Orientación familiar.</li>
            </ul>
            <Link href="/donar" className="btn btn-primary mt-6 inline-block">Donar a Niñez</Link>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Impacto reciente</h3>
            <p className="text-gray-600 mt-2">+800 niños beneficiados en 6 meses.</p>
          </div>
        </div>
      </section>
    </>
  );
}
