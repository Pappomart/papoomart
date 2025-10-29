// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  // Submenú desktop controlado por hover + click
  const [deskSubOpen, setDeskSubOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-28 md:h-32">
        {/* LOGO MUY grande (sin texto) */}
        <Link href="/" aria-label="PapoomArt, inicio" className="flex items-center">
          <Image
            src="/logo.png" // asegúrate que exista en /public
            alt="PapoomArt"
            width={480}
            height={180}
            priority
            className="h-24 md:h-28 w-auto"  // controla el alto visible
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-lg">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Tienda con submenú (sin gap y clickeable) */}
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
              Tienda
              <FaChevronDown
                className={`text-xs mt-1 transition-transform ${deskSubOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Panel del submenú */}
            <div
              role="menu"
              className={`absolute left-0 top-full w-[24rem] rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-50
                transition-opacity duration-150
                ${deskSubOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              // mantener abierto mientras el mouse está sobre el panel
              onMouseEnter={() => setDeskSubOpen(true)}
              onMouseLeave={() => setDeskSubOpen(false)}
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
              className="w-72 rounded-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
