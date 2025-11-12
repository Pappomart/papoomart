// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DonationWidget from "@/components/DonationWidget";
import ImpactCard from "@/components/ImpactCard";
import ProgramCard from "@/components/ProgramCard";
import StoryCard from "@/components/StoryCard";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>DonaSonrisas — Juntos cambiamos vidas</title>
        <meta name="description" content="Niñez, salud, educación y respuesta a emergencias. Dona, apadrina o sé voluntario." />
      </Head>

      {/* HERO */}
      <section className="container mt-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ayudemos hoy para transformar el mañana
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tu aporte llega donde más se necesita. Transparencia, impacto y cercanía.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/donar" className="btn btn-primary">Donar ahora</Link>
            <a href="#apadrinar" className="btn btn-outline">Apadrinar</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image src="/hero.jpg" alt="Acciones solidarias de DonaSonrisas" fill className="object-cover" />
        </div>
      </section>

      {/* IMPACTO */}
      <section className="container mt-16">
        <h2 className="text-2xl font-semibold mb-6">Nuestro impacto</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactCard value="+5,000" label="Niños beneficiados" />
          <ImpactCard value="120" label="Colegios aliados" />
          <ImpactCard value="24" label="Regiones atendidas" />
          <ImpactCard value="100%" label="Transparencia" />
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="container mt-16">
        <h2 className="text-2xl font-semibold mb-6">Programas</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ProgramCard href="/programas/ninez" title="Niñez" description="Protección, alimentación y espacios seguros." />
          <ProgramCard href="/programas/educacion" title="Educación" description="Útiles, talleres y reforzamiento escolar." />
          <ProgramCard href="/programas/salud" title="Salud" description="Controles, campañas y atención temprana." />
          <ProgramCard href="/programas/emergencias" title="Emergencias" description="Respuesta rápida y apoyo humanitario." />
        </div>
      </section>

      {/* DONACIÓN RÁPIDA */}
      <section className="container mt-16">
        <div className="card p-6 md:p-10">
          <h3 className="text-xl font-semibold">Dona en 1 minuto</h3>
          <p className="text-gray-600 mt-1">Elegí un monto o ingresa uno libre. Recibirás constancia por e-mail.</p>
          <div className="mt-6">
            <DonationWidget />
          </div>
        </div>
      </section>

      {/* HISTORIAS */}
      <section className="container mt-16">
        <h2 className="text-2xl font-semibold mb-6">Historias reales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StoryCard title="Voluntariado en Cusco" excerpt="Más de 200 kits escolares y chequeos de salud." />
          <StoryCard title="Respuesta a lluvias" excerpt="Albergues temporales y víveres en 48 horas." />
          <StoryCard title="Programa lectura" excerpt="Clubes de lectura en 15 colegios." />
        </div>
      </section>

      {/* TRANSPARENCIA */}
      <section className="container mt-16">
        <div className="card p-6 md:p-10">
          <h3 className="text-xl font-semibold">Transparencia total</h3>
          <p className="text-gray-600 mt-1">
            Publicamos reportes, auditorías y el uso de cada donación.
          </p>
          <Link href="/transparencia" className="btn btn-outline mt-4 inline-block">Ver reportes</Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container mt-16 mb-20">
        <div className="card p-6 md:p-10 text-center">
          <h3 className="text-xl font-semibold">Súmate a la comunidad</h3>
          <p className="text-gray-600 mt-2">Recibe historias, avances y oportunidades para ayudar.</p>
          <div className="mt-4 max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
