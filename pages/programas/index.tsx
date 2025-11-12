// pages/programas/index.tsx
import Head from "next/head";
import ProgramCard from "@/components/ProgramCard";

export default function ProgramasIndex() {
  return (
    <>
      <Head><title>Programas — DonaSonrisas</title></Head>
      <section className="container mt-10">
        <h1 className="text-3xl font-bold">Programas</h1>
        <p className="mt-2 text-gray-600">Conoce cómo actuamos en cuatro ejes.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          <ProgramCard href="/programas/ninez" title="Niñez" description="Protección, alimentación y espacios seguros." />
          <ProgramCard href="/programas/educacion" title="Educación" description="Útiles, talleres y reforzamiento escolar." />
          <ProgramCard href="/programas/salud" title="Salud" description="Controles, campañas y atención temprana." />
          <ProgramCard href="/programas/emergencias" title="Emergencias" description="Respuesta rápida y apoyo humanitario." />
        </div>
      </section>
    </>
  );
}
