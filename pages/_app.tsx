// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Banner (siempre visible al cargar hasta que el usuario lo cierre)
  const [showBanner, setShowBanner] = useState(true);
  const hideBanner = useCallback(() => setShowBanner(false), []);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerH, setBannerH] = useState(0);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const update = () =>
      setBannerH(showBanner ? el.getBoundingClientRect().height : 0);
    update();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [showBanner]);

  const BRAND = {
    name: "DonaSonrisas",
    site: process.env.NEXT_PUBLIC_SITE_URL || "https://donasonrisas.org",
    email: "contacto@donasonrisas.org",
    phoneHuman: "+51 997 374 878",
    phoneE164: "+51997374878",
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "51997374878"}`,
    title: "DonaSonrisas — Ayudamos a niños y familias con amor y transparencia",
    description:
      "Programas de apoyo en niñez, educación, salud y emergencias. Dona, apadrina o súmate como voluntario.",
    ogImage: "/og.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link rel="canonical" href={BRAND.site} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* JSON-LD Organization */}
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
            }),
          }}
        />
      </Head>

      {/* Banner superior (siempre visible hasta cerrar) */}
      {showBanner && (
        <div
          ref={bannerRef}
          className="relative bg-[#F47C6C] text-white text-center text-xs sm:text-sm py-2 px-4 font-medium z-[60]"
        >
          <div className="mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0 leading-tight">
              Dona hoy y multiplica impacto. <strong>Transparencia 100%</strong>.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={BRAND.whatsapp + "?text=" + encodeURIComponent("Hola DonaSonrisas 👋 Quiero donar/ayudar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#F47C6C] px-3 py-1 rounded-md text-xs sm:text-sm font-semibold hover:bg-pink-50"
              >
                WhatsApp
              </a>
              <button
                onClick={() => setShowBanner(false)}
                className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-white"
                aria-label="Cerrar aviso"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header fijo compensado por banner */}
      <Header offsetTop={bannerH} />

      {/* Espaciador (altura del header) */}
      <div className="h-[6rem]" />

      <main className="mx-auto max-w-7xl px-4 md:px-8">
        <Component {...pageProps} />
      </main>

      <WhatsAppButton />

      <Footer brandName={BRAND.name} />
    </div>
  );
}
