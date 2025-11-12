// pages/contacto.tsx
import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head><title>Contacto — DonaSonrisas</title></Head>
      <section className="container mt-10 max-w-2xl">
        <h1 className="text-3xl font-bold">Contacto</h1>
        <p className="mt-2 text-gray-600">
          Escríbenos a contacto@donasonrisas.org o por WhatsApp para coordinar donaciones y alianzas.
        </p>
        <form className="card p-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" placeholder="Nombre" />
            <input className="input" placeholder="Email" type="email" />
          </div>
          <textarea className="input mt-4" rows={4} placeholder="Tu mensaje" />
          <button className="btn btn-primary mt-4">Enviar</button>
        </form>
      </section>
    </>
  );
}
