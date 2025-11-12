// pages/donar.tsx
import Head from "next/head";
import DonationWidget from "@/components/DonationWidget";

export default function DonarPage() {
  return (
    <>
      <Head>
        <title>Dona ahora — DonaSonrisas</title>
        <meta name="description" content="Elige un monto y dona en minutos. Recibirás constancia por correo." />
      </Head>

      <section className="container mt-10">
        <h1 className="text-3xl font-bold">Dona ahora</h1>
        <p className="mt-2 text-gray-600">
          Cada aporte se transforma en alimentos, salud, educación y protección.
        </p>
        <div className="card p-6 md:p-10 mt-6">
          <DonationWidget />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Aceptamos tarjeta, transferencias y pronto Yape/Plin. Si necesitas boleta/factura, escríbenos.
        </p>
      </section>
    </>
  );
}
