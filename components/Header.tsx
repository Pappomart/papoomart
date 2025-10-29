// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [deskSubOpen, setDeskSubOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-[8rem] md:h-[9rem]">
        {/* Logo: ahora lleva a la home */}
        <Link href="/" aria-label="Ir al inicio" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={720}
            height={270}
            priority
            className="h-24 md:h-28 w-auto"  // ajustado a la mitad si ya lo habías reducido
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-800 font-medium text-lg">
          {/* Bienvenidos -> /sobre */}
          <Link href="/sobre" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Tienda con submenú estable (hover + click) */}
          <div
            className="relative"
            onMouseEnter={() => setDeskSubOpen(true)}
            onMouseLeave={() => setDeskSubOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={deskSubOpen}
              onClick={() => setDeskSubOpen(v => !v)}
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
            >
              Tienda <FaChevronDown className={`text-xs mt-1 transition-transform ${deskSubOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-full w-[24rem] rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-50 transition-opacity duration-150
              ${deskSubOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              onMouseEnter={() => setDeskSubOpen(true)}
              onMouseLeave={() => setDeskSubOpen(false)}
            >
              <Link href="/tienda/celebrar"  role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link href="/tienda/escolares" role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
                Etiquetas y sellos escolares
              </Link>
              <Link href="/tienda/regalos"   role="menuitem" className="block rounded-md px-4 py-2 hover:bg-pink-50">
                Regalos personalizados
              </Link>
            </div>
          </div>

          {/* Promociones -> /promociones */}
          <Link href="/promociones" className="hover:text-pink-600 transition-colors">
            Promociones
          </Link>

          {/* Buscador */}
          <form action="/buscar" method="GET" className="relative hidden lg:block">
            <input
              name="q"
              type="search"
              placeholder="Buscar productos…"
              className="w-72 rounded-full border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Buscar productos"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>

          {/* Carrito destacado */}
          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 hover:opacity-90 transition"
            aria-label="Ir al carrito"
          >
            <FaShoppingCart />
            <span className="hidden sm:inline">Carrito</span>
          </Link>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setMobileOpen(v => !v)}
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
            <Link href="/sobre" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
              Bienvenidos
            </Link>

            <button
              onClick={() => setMobileSubOpen(v => !v)}
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

            {/* Carrito móvil */}
            <Link
              href="/carrito"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-pink-600 text-white px-4 py-2 justify-center hover:opacity-90"
            >
              <FaShoppingCart />
              Carrito
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
