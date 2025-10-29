// components/Banner.tsx
// Banner NO fijo => mejor LCP/CLS. Si lo quieres fijo, ver variante al final.
export default function Banner() {
  return (
    <section
      aria-label="Novedades"
      className="relative inset-x-0 z-40 bg-pink-50 border-b border-pink-100 overflow-hidden"
    >
      {/* contenido único (evita duplicar texto para SEO) */}
      <div className="whitespace-nowrap animate-marquee py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base">
        <span className="mx-6">🎄 Campaña navideña — Doña Sonrisas</span>
        <span className="mx-6">⭐ Stickers troquelados resistentes al agua</span>
        <span className="mx-6">🎁 Panetones solidarios — Apoya nuestra ONG</span>
      </div>
    </section>
  );
}

/* 
// Variante FIJA (solo si es indispensable)
// 1) Sustituye el wrapper <section> por:
// <section aria-label="Novedades" className="fixed inset-x-0 z-40 top-14 sm:top-16 md:top-20 bg-pink-50 border-b border-pink-100 overflow-hidden">
//
// 2) En el layout, añade padding-top adicional al main para compensar.
*/
