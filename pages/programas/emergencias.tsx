// pages/transparencia.tsx
import Head from "next/head";

export default function Transparencia() {
  return (
    <>
      <Head>
        <title>Transparencia — DonaSonrisas</title>
        <meta name="description" content="Reportes, auditorías y uso de fondos. Transparencia 100%." />
      </Head>
      <section className="container mt-10">
        <h1 className="text-3xl font-bold">Transparencia</h1>
        <p className="mt-2 text-gray-600">
          Publicamos el uso de cada sol. Descarga reportes y auditorías.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <a className="card p-6 hover:shadow" href="#" target="_blank" rel="noreferrer">Reporte 2024 (PDF)</a>
          <a className="card p-6 hover:shadow" href="#" target="_blank" rel="noreferrer">Estados financieros (PDF)</a>
        </div>
      </section>
    </>
  );
}
