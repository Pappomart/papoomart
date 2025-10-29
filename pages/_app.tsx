// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { useEffect, useState, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import Header from "@/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Banner dismissible
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissed = localStorage.getItem("pa_banner_dismissed") === "1";
      if (dismissed) setShowBanner(false);
    }
  }, []);

  const hideBanner = useCallback(() => {
    setShowBanner(false);
    try {
      localStorage.setItem("pa_banner_dismissed", "1");
    } catch {}
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* 🔔 Banner superior (el cliente puede ocultarlo) */}
      {showBanner && (
        <div
          aria-label="Información de envíos"
          className="relative bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium"
        >
          <div className="mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 leading-tight">
              Pedidos de <strong>Lunes a Domingo</strong> se envían el{" "}
              <strong>Jueves</strong> de la siguiente semana. Provincia: +2 días.
              Pedidos personalizados por inbox.
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
                className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-white"
                aria-label="Ocultar aviso"
                title="Ocultar"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🧭 Header NUEVO (fijo) */}
      <Header />

      {/* Espaciador por header fijo (ajusta si cambias la altura del header) */}
      <div className="h-20" />

      {/* Contenido */}
      <main className="mx-auto max-w-7xl px-4 md:px-8">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} PapoomArt · Lima, Perú
        </div>
      </footer>
    </div>
  );
}
