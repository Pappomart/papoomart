// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { useState, useCallback, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Banner (se puede cerrar; reaparece al refrescar)
  const [showBanner, setShowBanner] = useState(true);
  const hideBanner = useCallback(() => setShowBanner(false), []);

  // Altura real del banner para empujar el header hacia abajo
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerH, setBannerH] = useState(0);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const update = () => setBannerH(showBanner ? el.getBoundingClientRect().height : 0);
    update();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [showBanner]);

  // ---- SEO + redes ----
  const BRAND = {
    name: "PapoomArt",
    site: "https://papoomart.vercel.app",
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
  // ----------------------

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <title>{BRAND.title}</title>
        <meta name="description" content={BRAND.description} />
        <meta property="og:site_name" content={BRAND.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BRAND.site} />
        <meta property="og:title" content={BRAND.title} />
        <meta property="og:description" content={BRAND.description} />
        <meta property="og:image" content={BRAND.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={BRAND.title} />
        <meta name="twitter:description" content={BRAND.description} />
        <meta name="twitter:image" content={BRAND.ogImage} />
        <meta name="twitter:site" content="@PapoomArt" />

        {/* JSON-LD Organization + sameAs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND.name,
              url: BRAND.site,
              email: BRAND.email,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: BRAND.phoneE164,
                  contactType: "customer support",
                  areaServed: "PE",
                  availableLanguage: ["es-PE", "es", "en"],
                },
              ],
              sameAs: [
                BRAND.social.instagram,
                BRAND.social.facebook,
                BRAND.social.tiktok,
                BRAND.social.youtube,
                BRAND.social.pinterest,
                BRAND.social.x,
                BRAND.social.threads,
              ],
            }),
          }}
        />
      </Head>

      {/* 🔔 Banner superior — no tapa el header */}
      {showBanner && (
        <div
          ref={bannerRef}
          aria-label="Información de envíos"
          className="relative bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium z-[60]"
        >
          <div className="mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 leading-tight">
              <strong>Envíos gratis</strong> por compras mayores a <strong>S/. 120</strong>.{" "}
              <strong>Envíos express en 24h</strong> (consultar precios por inbox).
            </p>

            <div className="flex items-center justify-center gap-2">
              {/* Teléfono → WhatsApp */}
              <a
                href={`${BRAND.social.whatsapp}?text=Hola%20PapoomArt!%20Quiero%20informaci%C3%B3n%20sobre%20env%C3%ADos%20y%20pedidos%20personalizados.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                {BRAND.phoneHuman}
              </a>

              {/* Correo */}
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50 transition-colors"
              >
                {BRAND.email}
              </a>

              {/* Cerrar banner */}
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

      {/* 🧭 Header fijo desplazado por la altura del banner */}
      <Header offsetTop={bannerH} />

      {/* Espaciador por header fijo */}
      <div className="h-[8rem] md:h-[9rem]" />

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
