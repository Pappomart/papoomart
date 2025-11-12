// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Banner: SIEMPRE aparece al cargar; solo se oculta si el usuario pulsa “X”
  const [showBanner, setShowBanner] = useState(true);
  const hideBanner = useCallback(() => setShowBanner(false), []);

  // ⚙️ Marca (ajustado a dominio final)
  const BRAND = {
    name: "PapoomArt",
    site: "https://papoomart.com",                 // <— tu dominio
    email: "papoomartperu@gmail.com",
    phoneHuman: "+51 997 374 878",
    phoneE164: "+51997374878",
    social: {
      instagram: "https://instagram.com/PapoomArt",
      facebook: "https://facebook.com/PapoomArt",
      tiktok: "https://www.tiktok.com/@PapoomArt",
      youtube: "https://www.youtube.com/@PapoomArt",
      pinterest: "https://www.pinterest.com/PapoomArt",
      x: "https://x.com/PapoomArt",
      threads: "https://www.threads.net/@PapoomArt",
      whatsapp: "https://wa.me/51997374878",
    },
    title: "PapoomArt — Detalles personalizados que cuentan historias",
    description:
      "Etiquetas, sellos y regalos personalizados hechos en Perú. Envíos express y atención por WhatsApp.",
    ogImage: "/og.jpg",
  };

  // Canonical dinámico
  const router = useRouter();
  const path = router.asPath.split("#")[0]; // sin hash
  const canonical = `${BRAND.site}${path === "/" ? "" : path}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        {/* Básicos */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <title>{BRAND.title}</title>
        <meta name="description" content={BRAND.description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />

        {/* Idiomas (raíz en es-PE; copia genérica es) */}
        <link rel="alternate" hrefLang="es-PE" href={canonical} />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />

        {/* OpenGraph & Twitter */}
        <meta property="og:site_name" content={BRAND.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={BRAND.title} />
        <meta property="og:description" content={BRAND.description} />
        <meta property="og:image" content={BRAND.ogImage} />
        <meta property="og:locale" content="es_PE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={BRAND.title} />
        <meta name="twitter:description" content={BRAND.description} />
        <meta name="twitter:image" content={BRAND.ogImage} />
        <meta name="twitter:site" content="@PapoomArt" />

        {/* Iconos */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND.name,
              url: BRAND.site,
              email: BRAND.email,
              logo: `${BRAND.site}/logo.png`,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: BRAND.phoneE164,
                  contactType: "customer support",
                  areaServed: "PE",
                  availableLanguage: ["es-PE", "es", "en"],
                },
              ],
              sameAs: Object.values(BRAND.social),
            }),
          }}
        />
        {/* JSON-LD: WebSite + SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: BRAND.site,
              name: BRAND.name,
              potentialAction: {
                "@type": "SearchAction",
                target: `${BRAND.site}/buscar?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      {/* 🔔 Banner superior — aparece siempre, se oculta solo si el usuario lo cierra */}
      {showBanner && (
        <div className="relative bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium z-[60]">
          <div className="mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 leading-tight">
              <strong>Envíos gratis</strong> por compras mayores a <strong>S/. 120</strong>.{" "}
              <strong>Envíos express en 24h</strong> (consultar precios por inbox).
            </p>

            <div className="flex items-center justify-center gap-2">
              <a
                href={`${BRAND.social.whatsapp}?text=${encodeURIComponent(
                  "Hola PapoomArt 👋 Quiero información de envíos y pedidos personalizados."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                {BRAND.phoneHuman}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                {BRAND.email}
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

      {/* 🧭 Header fijo */}
      <Header />

      {/* Contenido */}
      <main className="mx-auto max-w-7xl px-4 md:px-8">
        <Component {...pageProps} />
      </main>

      {/* Botón flotante WhatsApp */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} {BRAND.name} · Lima, Perú
        </div>
      </footer>
    </div>
  );
}
