"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaShoppingCart } from "react-icons/fa";

export default function Header({ offsetTop = 0 }: { offsetTop?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 transition-all duration-200"
      style={{ top: offsetTop }}
    >
      <div className="mx-auto max-w-7xl h-24 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* 🟡 LOGO (doble de tamaño) */}
        <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={320}    // antes 160
            height={120}   // antes 60
            priority
            className="h-24 w-auto md:h-28" // altura aumentada
          />
        </Link>

        {/* 🟢 NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 text-base font-medium">
          <Link href="/sobre" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Menú desplegable Tienda */}
          <div className="relative group">
            <button
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
              type="button"
            >
              Tienda <FaChevronDown className="text-xs mt-1" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto z-50">
              <Link
                href="/tienda/celebrar"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link
                href="/tienda/escolares"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Etiquetas y sellos escolares
              </Link>
              <Link
                href="/tienda/regalos"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Regalos personalizados
              </Link>
            </div>
          </div>

          <Link href="/promociones" className="hover:text-pink-600 transition-colors">
            Promociones
          </Link>

          {/* 🔵 Carrito */}
          <Link
            href="/carrito"
            className="flex items-center gap-2 hover:text-pink-600 transition-colors"
          >
            <FaShoppingCart className="text-lg" />
            <span>Carrito</span>
          </Link>

          {/* Buscador */}
          <form action="/buscar" method="GET" className="relative">
            <input
              name="q"
              type="search"
              placeholder="Buscar productos..."
              className="w-64 rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>

        {/* 🟣 BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔵 PANEL MÓVIL */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 text-gray-800">
            <Link
              href="/sobre"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600 transition-colors"
            >
              Bienvenidos
            </Link>

            {/* Submenú Tienda */}
            <div>
              <button
                className="w-full text-left flex justify-between items-center py-2 font-medium hover:text-pink-600"
                onClick={() => setSubmenuOpen(!submenuOpen)}
              >
                Tienda
                <FaChevronDown
                  className={`text-xs transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {submenuOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  <Link
                    href="/tienda/celebrar"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-sm hover:text-pink-600"
                  >
                    Etiquetas y tarjetas para celebrar
                  </Link>
                  <Link
                    href="/tienda/escolares"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-sm hover:text-pink-600"
                  >
                    Etiquetas y sellos escolares
                  </Link>
                  <Link
                    href="/tienda/regalos"
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-sm hover:text-pink-600"
                  >
                    Regalos personalizados
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/promociones"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600 transition-colors"
            >
              Promociones
            </Link>

            <Link
              href="/carrito"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600 transition-colors flex items-center gap-2"
            >
              <FaShoppingCart className="text-lg" />
              Carrito
            </Link>

            {/* Buscador móvil */}
            <form action="/buscar" method="GET" className="relative mt-3">
              <input
                name="q"
                type="search"
                placeholder="Buscar productos..."
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
