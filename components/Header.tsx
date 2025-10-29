// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Cerrar panel móvil con click afuera o ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      {/* notch iOS */}
      <div className="pt-[env(safe-area-inset-top)]" />

      <div className="mx-auto max-w-6xl h-16 md:h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* LOGO sin fondo */}
        <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"      // asegúrate de tener public/logo.png (transparente)
            alt="PapoomArt"
            width={180}
            height={64}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-gray-900 text-base font-medium">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Tienda con submenú (hover/focus) */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tienda <FaChevronDown className="text-xs mt-0.5" />
            </button>

            <div
              role="menu"
              className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100"
            >
              <Link href="/tienda/celebrar" role="menuitem" className="block rounded-md px-3 py-2 hover:bg-pink-50">
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link href="/tienda/escolares" role="menuitem" className="block rounded-md px-3 py-2 hover:bg-pink-50">
                Etiquetas y sellos escolares
              </Link>
              <Link href="/tienda/regalos" role="menuitem" className="block rounded-md px-3 py-2 hover:bg-pink-50">
                Regalos personalizados
              </Link>
            </div>
          </div>

          <Link href="/promociones" className="hover:text-pink-600 transition-colors">
            Promociones
          </Link>

          {/* Buscador */}
          <form action="/buscar" method="GET" className="relative">
            <input
              name="q"
              type="search"
              placeholder="Buscar productos..."
              className="w-64 rounded-full border border-gray-300 pl-9 pr-2 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Buscar productos"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>

        {/* BOTON MENÚ MÓVIL */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen((v) => !v);
          }}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* PANEL MÓVIL */}
      <div
        ref={panelRef}
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg transition-transform duration-200 ${mobileOpen ? "translate-y-0" : "-translate-y-2 pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col p-4 text-gray-900">
          <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
            Bienvenidos
          </Link>

          {/* Submenú móvil */}
          <div className="border rounded-lg">
            <button
              type="button"
              onClick={() => setMobileSubOpen((v) => !v)}
              className="w-full text-left px-3 py-2 font-medium flex items-center justify-between hover:text-pink-600"
              aria-expanded={mobileSubOpen}
              aria-controls="submenu-tienda"
            >
              Tienda
              <FaChevronDown className={`text-xs transition-transform ${mobileSubOpen ? "rotate-180" : ""}`} />
            </button>

            <div id="submenu-tienda" className={`${mobileSubOpen ? "block" : "hidden"} px-2 pb-2`}>
              <Link href="/tienda/celebrar" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-pink-50">
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link href="/tienda/escolares" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-pink-50">
                Etiquetas y sellos escolares
              </Link>
              <Link href="/tienda/regalos" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm hover:bg-pink-50">
                Regalos personalizados
              </Link>
            </div>
          </div>

          <Link href="/promociones" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
            Promociones
          </Link>

          {/* Buscador móvil */}
          <form action="/buscar" method="GET" className="relative mt-3">
            <input
              name="q"
              type="search"
              placeholder="Buscar productos..."
              className="w-full rounded-lg border border-gray-300 pl-9 pr-2 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Buscar productos"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>
      </div>
    </header>
  );
}
