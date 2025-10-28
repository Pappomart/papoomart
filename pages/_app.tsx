// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaBoxOpen, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        {/* Meta responsive y SEO base */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* 🔔 Banner superior (NO fijo = mejor SEO/LCP/CLS) */}
      <div
        aria-label="Información de envíos"
        className="bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium"
      >
        <div className="mx-auto max-w-6xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 leading-tight">
            Pedidos de <strong>Lunes a Domingo</strong> se envían el <strong>Jueves</strong> de la
            siguiente semana. Provincia: +2 días. Pedidos personalizados por inbox 💬
          </p>

          <a
            href="https://wa.me/51970928583?text=Hola%20PapoomArt!%20Quiero%20saber%20m%C3%A1s%20sobre%20los%20env%C3%ADos%20y%20pedidos%20personalizados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center self-center sm:self-auto bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Header (no fijo; responsive + safe-area) */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl h-14 sm:h-16 md:h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between">
          <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PapoomArt"
              width={36}
              height={36}
              priority
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
            <span className="font-semibold text-base sm:text-lg md:text-xl">PapoomArt</span>
          </Link>

          {/* Navegación: se oculta en móvil si quieres luego agregar un menú */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-gray-800 text-sm md:text-base">
            <Link href="/catalogo" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaBoxOpen aria-hidden="true" /> <span>Catálogo</span>
            </Link>
            <Link href="/sobre" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaInfoCircle aria-hidden="true" /> <span>Sobre nosotros</span>
            </Link>
            <Link href="/carrito" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaShoppingCart aria-hidden="true" /> <span>Carrito</span>
            </Link>
          </nav>

          {/* Botón menú móvil (placeholder, por si luego activas un drawer) */}
          <button
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
            aria-label="Abrir menú"
            type="button"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 text-xs sm:text-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PapoomArt · Lima, Perú</p>
          <p>Este sitio es un template original. No reproduce marcas, textos ni fotos de terceros.</p>
        </div>
      </footer>
    </div>
  );
}

/*
Si QUIERES el banner FIJO (siempre visible):
1) Cambia la clase del banner a: "fixed top-0 left-0 w-full z-50 bg-[#F47C6C] ..."
2) Añade un espaciador justo DESPUÉS del banner, con altura responsiva:
   <div className="h-10 sm:h-10 md:h-10" />
3) Si además haces el header fijo, recuerda sumar su altura al spacer total.
*/
