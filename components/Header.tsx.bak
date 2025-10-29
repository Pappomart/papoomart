"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-20">
        {/* 🔵 Logo grande */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={200}
            height={80}
            priority
            className="w-auto h-14 md:h-16"
          />
        </Link>

        {/* 🔸 Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-lg">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* Submenú Tienda */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
            >
              Tienda <FaChevronDown className="text-xs mt-1" />
            </button>
            <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-gray-200 bg-white shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <Link
                href="/tienda/celebrar"
                className="block px-4 py-2 hover:bg-pink-50 rounded-t-md"
              >
                Etiquetas y tarjetas para celebrar
              </Link>
              <Link
                href="/tienda/escolares"
                className="block px-4 py-2 hover:bg-pink-50"
              >
                Etiquetas y sellos escolares
              </Link>
              <Link
                href="/tienda/regalos"
                className="block px-4 py-2 hover:bg-pink-50 rounded-b-md"
              >
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
              type="search"
              name="q"
              placeholder="Buscar productos..."
              className="w-64 rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>

        {/* 🔸 Menú móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md border border-gray-300"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Panel móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 text-gray-800 text-base">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
              Bienvenidos
            </Link>

            {/* Submenú móvil */}
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex justify-between items-center py-2 hover:text-pink-600 font-medium"
            >
              Tienda
              <FaChevronDown
                className={`transition-transform ${submenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {submenuOpen && (
              <div className="pl-4 flex flex-col">
                <Link
                  href="/tienda/celebrar"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 hover:text-pink-600"
                >
                  Etiquetas y tarjetas para celebrar
                </Link>
                <Link
                  href="/tienda/escolares"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 hover:text-pink-600"
                >
                  Etiquetas y sellos escolares
                </Link>
                <Link
                  href="/tienda/regalos"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 hover:text-pink-600"
                >
                  Regalos personalizados
                </Link>
              </div>
            )}

            <Link
              href="/promociones"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600"
            >
              Promociones
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
