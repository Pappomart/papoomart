// components/Header.tsx
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 sm:h-16 md:h-20 bg-white/90 backdrop-blur border-b border-gray-200">
      {/* notch iOS */}
      <div className="pt-[env(safe-area-inset-top)]" />
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="PapoomArt, ir al inicio">
          <img src="/logo.svg" alt="" className="h-6 sm:h-7 md:h-8 w-auto" />
          <span className="text-base sm:text-lg md:text-xl font-bold">PapoomArt</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <a className="hover:underline" href="/tienda">Tienda</a>
          <a className="hover:underline" href="/reclamos">Reclamos</a>
          <a className="hover:underline" href="/contacto">Contacto</a>
        </nav>

        {/* Menú móvil (placeholder) */}
        <button className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300" aria-label="Abrir menú">
          ☰
        </button>
      </div>
    </header>
  );
}

