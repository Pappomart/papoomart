// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type HeaderProps = {
  /** Altura extra (px) para empujar el header hacia abajo si hay banner */
  offsetTop?: number;
};

export default function Header({ offsetTop = 0 }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);       // mobile nav (si lo necesitas)
  const [tiendaOpen, setTiendaOpen] = useState(false);   // mega menu "Tienda"
  const megaRef = useRef<HTMLDivElement | null>(null);

  // Cerrar con click afuera / Escape
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!megaRef.current) return;
      if (!megaRef.current.contains(e.target as Node)) setTiendaOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setTiendaOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Datos del submenú (4 opciones)
  const tiendaItems: Array<{
    href: string;
    title: string;
    desc: string;
    img?: string;
  }> = [
    {
      href: "/tienda/escolar",
      title: "Etiquetas para celebrar",
      desc: "Etiquetas de útiles, ropa y sellos personalizados.",
      img: "/mega/escolar.png",
    },
    {
      href: "/tienda/etiquetas",
      title: "Etiquetas para el cole",
      desc: "Vinil resistente al agua, troquel y brillantes.",
      img: "/mega/etiquetas.png",
    },
    {
      href: "/tienda/detalles",
      title: "Detalles personalizados",
      desc: "Tazas, tomatodos y cajitas para regalar.",
      img: "/mega/detalles.png",
    },
    {
      href: "/tienda/corporativo",
      title: "Papoom Corporativo",
      desc: "Kits de bienvenida y branding para empresas.",
      img: "/mega/corporativo.png",
    },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 transition-all duration-200"
      style={{ top: offsetTop }}
      ref={megaRef}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-20 md:h-24 flex items-center justify-between gap-4">
        {/* LOGO (doble tamaño vs. antes) */}
        <Link href="/" className="shrink-0 flex items-center gap-2" aria-label="PapoomArt, volver al inicio">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={220}   // antes 110 → ahora el doble
            height={64}
            priority
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-slate-800">
          {/* Bienvenidos */}
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* TIENDA con mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setTiendaOpen(true)}
            onMouseLeave={() => setTiendaOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors"
              aria-haspopup="true"
              aria-expanded={tiendaOpen}
              onClick={() => setTiendaOpen((v) => !v)}
            >
              Tienda
              <FiChevronDown
                className={`transition-transform ${tiendaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Panel mega-menu */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${
                tiendaOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div
                className={`w-[92vw] max-w-5xl rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-150 ${
                  tiendaOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
                  {tiendaItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-xl border border-transparent hover:border-pink-200 p-4 transition-colors"
                      onClick={() => setTiendaOpen(false)}
                    >
                      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-gray-50">
                        {item.img ? (
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={600}
                            height={450}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        ) : null}
                      </div>
                      <h4 className="mt-3 text-base font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                    </Link>
                  ))}
                </div>

                {/* Barra inferior con atajos */}
                <div className="border-t border-gray-200 px-4 py-3 flex flex-wrap items-center gap-3 text-sm">
                  <Link href="/catalogo" className="text-pink-600 hover:underline" onClick={() => setTiendaOpen(false)}>Ver catálogo completo</Link>
                  <span className="text-gray-300">•</span>
                  <Link href="/promociones" className="text-slate-700 hover:text-pink-600" onClick={() => setTiendaOpen(false)}>Promociones</Link>
                  <span className="text-gray-300">•</span>
                  <Link href="/ayuda" className="text-slate-700 hover:text-pink-600" onClick={() => setTiendaOpen(false)}>Ayuda para comprar</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/promociones" className="hover:text-pink-600 transition-colors">
            Promociones
          </Link>

          <Link href="/carrito" className="hover:text-pink-600 transition-colors">
            Carrito
          </Link>
        </nav>

        {/* Buscador / acciones a la derecha (placeholder) */}
        <div className="hidden md:block w-64">
          <input
            type="search"
            placeholder="Buscar productos..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 text-[14px] outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Botón mobile menu (opcional) */}
        <button
          className="md:hidden rounded-md border px-3 py-2 text-sm"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>

      {/* Nav mobile simple (si lo quieres) */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 text-[15px]">
            <Link href="/" onClick={() => setMenuOpen(false)}>Bienvenidos</Link>

            {/* Tienda en mobile: lista simple */}
            <details>
              <summary className="cursor-pointer select-none">Tienda</summary>
              <div className="mt-2 pl-3 flex flex-col gap-1">
                {[
                  { href: "/tienda/escolar", label: "Pack Escolar" },
                  { href: "/tienda/etiquetas", label: "Etiquetas & Stickers" },
                  { href: "/tienda/detalles", label: "Detalles personalizados" },
                  { href: "/tienda/corporativo", label: "Papoom Corporativo" },
                ].map((i) => (
                  <Link key={i.href} href={i.href} onClick={() => setMenuOpen(false)}>
                    {i.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/promociones" onClick={() => setMenuOpen(false)}>Promociones</Link>
            <Link href="/carrito" onClick={() => setMenuOpen(false)}>Carrito</Link>
          </div>
        </div>
      )}
    </header>
  );
}
