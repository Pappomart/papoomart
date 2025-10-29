// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // Estado del submenú en DESKTOP (abre por hover y también por click)
  const [deskSubOpen, setDeskSubOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-24 md:h-28">
        {/* LOGO grande SIN texto */}
        <Link href="/" aria-label="PapoomArt, inicio" className="flex items-center">
          <Image
            src="/logo.png"              // asegúrate que exista public/logo.png con transparencia
            alt="PapoomArt"
            width={340}
            height={130}
            priority
            className="h-16 md:h-20 w-auto" // controla el alto visible (logo más grande)
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-lg">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Tienda con submenú (hover + click, clickeable y con z-50) */}
          <div
            className="relative"
            onMouseEnter={() => setDeskSubOpen(true)}
            onMouseLeave={() => setDeskSubOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={deskSubOpen}
              onClick={() => setDeskSubOpen((v) => !v)}
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
            >
              Tienda <FaChevronDown className={`text-xs mt-1 transition-transform ${deskSubOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-full mt-3 w-[22rem] rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-50
                transition-all duration-150 
                ${deskSubOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
            >
              <Link href="/tienda/celebrar" role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link href="/tienda/escolares" role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
                Etiquetas y sellos escolares
              </Link>
              <Link href="/tienda/regalos" role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
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
              placeholder="Buscar productos…"
              className="w-64 rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Buscar productos"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-gray-300"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* PANEL MÓVIL */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 text-gray-800 text-base">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
              Bienvenidos
            </Link>

            {/* Submenú móvil */}
            <button
              onClick={() => setMobileSubOpen((v) => !v)}
              className="flex justify-between items-center py-2 font-medium hover:text-pink-600"
              aria-expanded={mobileSubOpen}
              aria-controls="submenu-tienda"
            >
              Tienda
              <FaChevronDown className={`transition-transform ${mobileSubOpen ? "rotate-180" : ""}`} />
            </button>

            <div id="submenu-tienda" className={`${mobileSubOpen ? "block" : "hidden"} pl-4`}>
              <Link href="/tienda/celebrar"  onClick={() => setMobileOpen(false)} className="block py-1 hover:text-pink-600">
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link href="/tienda/escolares" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-pink-600">
                Etiquetas y sellos escolares
              </Link>
              <Link href="/tienda/regalos"   onClick={() => setMobileOpen(false)} className="block py-1 hover:text-pink-600">
                Regalos personalizados
              </Link>
            </div>

            <Link href="/promociones" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
              Promociones
            </Link>

            {/* Buscador móvil */}
            <form action="/buscar" method="GET" className="relative mt-3">
              <input
                name="q"
                type="search"
                placeholder="Buscar productos…"
                className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
