// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaShoppingCart } from "react-icons/fa";

// 👇 declaramos un tipo explícito para aceptar offsetTop
interface HeaderProps {
  offsetTop?: number;
}

export default function Header({ offsetTop = 0 }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
      style={{ top: `${offsetTop}px` }} // ✅ convertimos a string con unidad
    >
      <div className="pt-[env(safe-area-inset-top)]" />
      <div className="mx-auto max-w-7xl h-16 md:h-20 px-4 flex items-center justify-between">
        {/* Logo con enlace al home */}
        <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={200}
            height={100}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 text-base font-medium">
          <Link href="/sobre" className="hover:text-pink-600 transition-colors">
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
            <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto">
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

          {/* Carrito */}
          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
          >
            <FaShoppingCart />
            Carrito
          </Link>
        </nav>

        {/* Menú móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Panel móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 text-gray-800">
            <Link href="/sobre" className="py-2 hover:text-pink-600">
              Bienvenidos
            </Link>

            <button
              className="flex justify-between items-center py-2 hover:text-pink-600"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Tienda
              <FaChevronDown
                className={`text-xs transition-transform ${submenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {submenuOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <Link href="/tienda/celebrar" className="py-1 text-sm hover:text-pink-600">
                  Etiquetas y tarjetas para celebrar
                </Link>
                <Link href="/tienda/escolares" className="py-1 text-sm hover:text-pink-600">
                  Etiquetas y sellos escolares
                </Link>
                <Link href="/tienda/regalos" className="py-1 text-sm hover:text-pink-600">
                  Regalos personalizados
                </Link>
              </div>
            )}

            <Link href="/promociones" className="py-2 hover:text-pink-600">
              Promociones
            </Link>

            <Link
              href="/carrito"
              className="flex items-center gap-2 mt-3 bg-pink-600 text-white px-3 py-2 rounded-md justify-center hover:bg-pink-700"
            >
              <FaShoppingCart /> Carrito
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
