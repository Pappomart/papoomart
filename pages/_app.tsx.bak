// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { FaBoxOpen, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';

export default function MyApp({ Component, pageProps }: AppProps) {
  // --- Banner dismissible ---
  const [showBanner, setShowBanner] = useState(true);
  useEffect(() => {
    // Lee preferencia del cliente
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('pa_banner_dismissed') === '1';
      if (dismissed) setShowBanner(false);
    }
  }, []);
  const hideBanner = useCallback(() => {
    setShowBanner(false);
    try {
      localStorage.setItem('pa_banner_dismissed', '1');
    } catch {}
  }, []);

  // --- Men¨² m¨®vil ---
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Bloquea scroll de fondo cuando el men¨² est¨¢ abierto
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (menuOpen) body.classList.add('overflow-hidden');
    else body.classList.remove('overflow-hidden');
    return () => body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* ?? Banner (cliente puede ocultarlo) */}
      {showBanner && (
        <div
          aria-label="Informaci¨®n de env¨ªos"
          className="relative bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium"
        >
          <div className="mx-auto max-w-6xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 leading-tight">
              Pedidos de <strong>Lunes a Domingo</strong> se env¨ªan el <strong>Jueves</strong> de la
              siguiente semana. Provincia: +2 d¨ªas. Pedidos personalizados por inbox ??
            </p>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://wa.me/51970928583?text=Hola%20PapoomArt!%20Quiero%20saber%20m%C3%A1s%20sobre%20los%20env%C3%ADos%20y%20pedidos%20personalizados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                Contactar
              </a>
              <button
                type="button"
                onClick={hideBanner}
                className="inline-flex items-center justify-center rounded-md/2 bg-white/10 hover:bg-white/20 px-2 py-1 text-white"
                aria-label="Ocultar aviso"
                title="Ocultar"
              >
                ?
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
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

          {/* Nav desktop */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-gray-800 text-sm md:text-base">
            <Link href="/catalogo" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaBoxOpen aria-hidden="true" /> <span>Cat¨¢logo</span>
            </Link>
            <Link href="/sobre" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaInfoCircle aria-hidden="true" /> <span>Sobre nosotros</span>
            </Link>
            <Link href="/carrito" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
              <FaShoppingCart aria-hidden="true" /> <span>Carrito</span>
            </Link>
          </nav>

          {/* Bot¨®n men¨² m¨®vil */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Abrir men¨²"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl border border-gray-300 shadow-sm"
          >
            {/* Icono hamburguesa / close */}
            <span className="block h-5 w-5">
              {menuOpen ? '?' : '¡Ô'}
            </span>
          </button>
        </div>
      </header>

      {/* Overlay + panel men¨² m¨®vil */}
      <div
        className={`sm:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/40" />
        {/* panel */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-xl transition-transform duration-200 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b flex items-center justify-between">
            <span className="font-semibold">Men¨²</span>
            <button
              className="rounded-md border px-2 py-1"
              onClick={closeMenu}
              aria-label="Cerrar men¨²"
            >
              Cerrar
            </button>
          </div>
          <nav className="p-4 flex flex-col gap-3 text-base">
            <Link href="/catalogo" onClick={closeMenu} className="hover:text-pink-600">
              Cat¨¢logo
            </Link>
            <Link href="/sobre" onClick={closeMenu} className="hover:text-pink-600">
              Sobre nosotros
            </Link>
            <Link href="/carrito" onClick={closeMenu} className="hover:text-pink-600">
              Carrito
            </Link>
            {/* Puedes a?adir m¨¢s enlaces aqu¨ª */}
          </nav>
        </div>
      </div>

      {/* Contenido */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 text-xs sm:text-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>? {new Date().getFullYear()} PapoomArt ¡¤ Lima, Per¨²</p>
          <p>Este sitio es un template original. No reproduce marcas, textos ni fotos de terceros.</p>
        </div>
      </footer>
    </div>
  );
}
