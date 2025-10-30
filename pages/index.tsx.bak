import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { listProducts } from '@/lib/shop';
import {
  FaYoutube, FaInstagram, FaFacebookF, FaTiktok,
  FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal,
  FaCreditCard, FaMotorcycle, FaClock
} from 'react-icons/fa';

export default function Home() {
  const products = listProducts().slice(0, 3);

  return (
    <>
      <Head>
        <title>PapoomArt — Papelería creativa, stickers y cajas personalizadas</title>
        <meta
          name="description"
          content="PapoomArt crea papelería creativa, stickers resistentes al agua y cajas personalizadas para regalos que sí emocionan. Hecho en Perú."
        />
        <link rel="canonical" href="https://papoomart.com/" />
        <meta property="og:title" content="PapoomArt — Papeles creativos, stickers y cajas personalizadas" />
        <meta property="og:description" content="Stickers resistentes al agua, papeles creativos y boxes personalizados. Cotiza por WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://papoomart.com/" />
        <meta property="og:image" content="https://papoomart.com/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PapoomArt — Papeles creativos, stickers y cajas personalizadas" />
        <meta name="twitter:description" content="Stickers, papeles creativos y cajas personalizadas para cada ocasión." />
        <meta name="twitter:image" content="https://papoomart.com/og-cover.jpg" />
      </Head>

      <main>
        {/* === HERO === */}
        <section className="container mt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Regalos personalizados que sí emocionan
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Arma tu detalle con nombre: tazas, tomatodos y stickers resistentes al agua.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/catalogo" className="btn btn-primary">Ver catálogo</Link>
                <Link href="/sobre" className="btn btn-outline">Cómo funciona</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/hero.png"
                alt="Papelería creativa y regalos personalizados"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* === FAVORITOS === */}
        <section className="container mt-16">
          <h2 className="text-2xl font-semibold mb-6">Favoritos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <Link key={p.id} href={`/producto/${p.id}`} className="card overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-gray-500 mt-1">S/ {p.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 mt-2">{p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* === BENEFICIOS (debajo de Favoritos) === */}
        <section className="relative mt-16">
          <svg className="absolute -top-6 left-0 w-full h-6" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#E8F7DF" d="M0,32L60,26.7C120,21,240,11,360,26.7C480,43,600,85,720,90.7C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,0L0,0Z"/>
          </svg>

          <div className="bg-[#E8F7DF] pt-8 pb-2" />
          <div className="bg-white">
            <div className="container py-14">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                  <FaCreditCard className="text-5xl text-pink-500" />
                  <h3 className="mt-4 text-2xl font-semibold text-teal-800">Pago seguro</h3>
                  <p className="mt-2 text-gray-600">Tarjeta, depósito bancario o Yape.</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaMotorcycle className="text-5xl text-teal-500" />
                  <h3 className="mt-4 text-2xl font-semibold text-teal-800">Despacho fácil</h3>
                  <p className="mt-2 text-gray-600">Recojo, envío a domicilio o agencia.</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaClock className="text-5xl text-pink-500" />
                  <h3 className="mt-4 text-2xl font-semibold text-teal-800">Tipos de envíos</h3>
                  <p className="mt-2 text-gray-600">Lima: regular y programado. Provincias: regular/Express (≥ S/ 250).</p>
                </div>
              </div>
            </div>
          </div>

          <svg className="w-full h-8" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#F24B9B" d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,122.7C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z"/>
          </svg>
        </section>

        {/* === FRANJA DE MARCA (gradiente + nubes + luna + redes) === */}
        <section className="relative overflow-hidden">
          {/* ondas blancas arriba/abajo para continuidad */}
          <svg className="w-full h-8" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,122.7C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z"/>
          </svg>

          {/* fondo en degradado ligado a marca (rosa → coral) */}
          <div className="relative bg-gradient-to-r from-[#F24B9B] via-[#FF6FAE] to-[#FF8CC6] text-white">
            {/* Nubes decorativas izquierda y derecha */}
            <svg className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-64 opacity-25" viewBox="0 0 200 100" aria-hidden="true">
              <path
                d="M40,70 C20,70 10,60 10,50 C10,40 20,30 35,32 C40,20 55,12 70,18 C77,6 92,0 108,5 C118,0 134,4 140,16 C158,14 170,26 170,40 C170,56 156,70 136,70 Z"
                fill="#FFFFFF"
              />
            </svg>
            <svg className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-72 opacity-25" viewBox="0 0 220 120" aria-hidden="true">
              <path
                d="M50,85 C30,85 20,74 20,64 C20,52 32,44 46,46 C52,34 70,28 86,34 C95,20 116,16 132,22 C142,16 162,22 168,36 C188,34 202,48 202,64 C202,80 186,92 164,92 Z"
                fill="#FFFFFF"
              />
            </svg>
            {/* luna sutil */}
            <svg className="absolute right-10 top-6 w-10 opacity-60" viewBox="0 0 64 64" aria-hidden="true">
              <defs>
                <clipPath id="moon-cut">
                  <circle cx="32" cy="32" r="16" />
                </clipPath>
              </defs>
              <circle cx="32" cy="32" r="16" fill="#FFE9B6" />
              <circle cx="38" cy="28" r="16" fill="#FF6FAE" clipPath="url(#moon-cut)" />
            </svg>

            {/* contenido */}
            <div className="container py-12 flex flex-col items-center gap-6 relative">
              <h3 className="text-2xl md:text-3xl font-semibold text-center">
                ¿Quieres compartir tu foto? Etiquétanos <span className="font-bold">@papoomart.pe</span>
              </h3>
              <div className="flex items-center gap-6 text-3xl">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:opacity-90"><FaYoutube /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-90"><FaInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-90"><FaFacebookF /></a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:opacity-90"><FaTiktok /></a>
              </div>
            </div>
          </div>

          <svg className="w-full h-8" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,122.7C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,0L0,0Z"/>
          </svg>
        </section>

        {/* === COLUMNA DE LINKS / CONTACTO / PAGOS / SUSCRIPCIÓN === */}
        <section className="bg-white">
          <div className="container py-14 grid gap-12 md:grid-cols-4">
            <div>
              <h4 className="text-xl font-semibold text-teal-800 mb-4">Consultas</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/instrucciones" className="hover:underline">Instrucciones de uso</a></li>
                <li><a href="/politicas" className="hover:underline">Políticas y condiciones</a></li>
                <li><a href="/reclamos" className="hover:underline">Libro de reclamaciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-teal-800 mb-4">Sobre PapoomArt</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="/sobre" className="hover:underline">Nuestra historia</a></li>
                <li><a href="/agentes" className="hover:underline">Buscamos Agente</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/club" className="hover:underline">Club PapoomArt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-teal-800 mb-4">Contáctanos</h4>
              <p className="text-gray-700">+51 970 928 583</p>
              <p className="text-gray-700">papoomartperu@gmail.com</p>
              <div className="flex items-center gap-4 mt-4 text-2xl text-gray-700">
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600"><FaInstagram /></a>
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-pink-600"><FaFacebookF /></a>
                <a href="https://tiktok.com" aria-label="TikTok" className="hover:text-pink-600"><FaTiktok /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-teal-800 mb-4">Métodos de pago</h4>
              <div className="flex items-center gap-3 text-3xl text-gray-700">
                <FaCcVisa /><FaCcMastercard /><FaCcAmex /><FaPaypal />
                <span className="text-xs font-semibold px-2 py-1 rounded bg-cyan-100 text-cyan-700">PLIN</span>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-fuchsia-100 text-fuchsia-700">YAPE</span>
              </div>

              <h4 className="text-xl font-semibold text-teal-800 mt-8 mb-3">Suscríbete al club</h4>
              <form
                className="space-y-3"
                onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#F24B9B] text-white font-semibold py-2 hover:opacity-90 transition"
                >
                  ¡Suscríbete!
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* === CTA WHATSAPP === */}
        <section className="container mt-16">
          <div className="card p-6 md:p-10 text-center">
            <h3 className="text-xl font-semibold">¿Tienes una idea en mente?</h3>
            <p className="text-gray-600 mt-2">Escríbenos por WhatsApp para cotizar diseños a medida.</p>
            <a
              href={`https://wa.me/51970928583?text=${encodeURIComponent('Hola PapoomArt 👋, quiero pedir stickers y cajas personalizadas!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 inline-block"
            >
              Escríbenos
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
