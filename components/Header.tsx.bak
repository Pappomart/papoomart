// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaChevronRight,
  FaShoppingCart,
} from "react-icons/fa";

type Props = {
  /** para empujar el header hacia abajo si hay un banner encima */
  offsetTop?: number;
};

export default function Header({ offsetTop = 0 }: Props) {
  // Menú móvil
  const [mobileOpen, setMobileOpen] = useState(false);
  // Submenús en móvil
  const [tiendaOpen, setTiendaOpen] = useState(false);
  const [celebrarOpen, setCelebrarOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur"
      style={{ top: offsetTop }}
    >
      <div className="mx-auto max-w-7xl h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo (link a inicio) */}
        <Link
          href="/"
          aria-label="Ir al inicio — PapoomArt"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png" // tu logo transparente en /public/logo.png
            alt="PapoomArt"
            width={300}
            height={90}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 text-base font-medium">
          <Link href="/sobre" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* ====== TIENDA (dropdown nivel 1) ====== */}
          <div className="relative group">
            <button
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tienda <FaChevronDown className="text-xs mt-0.5" />
            </button>

            <div
              className="
                absolute left-0 top-full mt-2 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg
                opacity-0 pointer-events-none transition
                group-hover:opacity-100 group-hover:pointer-events-auto
              "
            >
              {/* Opción con submenú (Etiquetas para celebrar) */}
              <div className="relative group/celebrar">
                <Link
                  href="/etiquetas/celebrar"
                  className="block rounded-md px-3 py-2 hover:bg-pink-50 transition pr-9"
                >
                  Etiquetas para celebrar
                </Link>

                {/* ▶ flyout a la derecha (nivel 2) */}
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2 text-gray-500
                    group-hover/celebrar:text-pink-600
                  "
                >
                  <FaChevronRight />
                </button>

                <div
                  className="
                    absolute left-full top-0 ml-2 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg
                    opacity-0 pointer-events-none transition
                    group-hover/celebrar:opacity-100 group-hover/celebrar:pointer-events-auto
                  "
                >
                  <Link
                    href="/etiquetas/celebrar/packs"
                    className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    <span className="text-lg">🎉</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        Packs de cumpleaños personalizados
                      </p>
                      <p className="text-xs text-gray-500">
                        Etiquetas listas para tu fiesta
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/etiquetas/celebrar/elige"
                    className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    <span className="text-lg">🏷️</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        Elige tus etiquetas
                      </p>
                      <p className="text-xs text-gray-500">
                        Tamaños, formas y cantidades
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Otras categorías de Tienda (nivel 1) */}
              <Link
                href="/etiquetas/escolar"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Etiquetas y sellos escolares
              </Link>
              <Link
                href="/detalles"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Detalles personalizados
              </Link>
              <Link
                href="/corporativo"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
              >
                Papoom corporativo
              </Link>
            </div>
          </div>

          <Link
            href="/promociones"
            className="hover:text-pink-600 transition-colors"
          >
            Promociones
          </Link>

          {/* Buscador (opcional) */}
          <form action="/buscar" method="GET" className="relative">
            <input
              name="q"
              type="search"
              placeholder="Buscar productos…"
              className="w-64 rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>

          {/* Carrito */}
          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-3 py-2 hover:opacity-90 transition"
          >
            <FaShoppingCart /> <span>Carrito</span>
          </Link>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* PANEL MÓVIL */}
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

            {/* ACORDEÓN: TIENDA */}
            <div className="border-t border-gray-100 pt-3 mt-2">
              <button
                className="w-full text-left flex justify-between items-center py-2 font-medium hover:text-pink-600"
                onClick={() => setTiendaOpen((v) => !v)}
                aria-expanded={tiendaOpen}
                aria-controls="m-sub-ti"
              >
                Tienda
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    tiendaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {tiendaOpen && (
                <div id="m-sub-ti" className="pl-2">
                  {/* Celebrar con subnivel */}
                  <div className="mt-1">
                    <button
                      className="w-full text-left flex justify-between items-center py-2 hover:text-pink-600"
                      onClick={() => setCelebrarOpen((v) => !v)}
                      aria-expanded={celebrarOpen}
                      aria-controls="m-sub-cele"
                    >
                      Etiquetas para celebrar
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          celebrarOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {celebrarOpen && (
                      <div id="m-sub-cele" className="pl-4 flex flex-col">
                        <Link
                          href="/etiquetas/celebrar/packs"
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm hover:text-pink-600"
                        >
                          🎉 Packs de cumpleaños personalizados
                        </Link>
                        <Link
                          href="/etiquetas/celebrar/elige"
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm hover:text-pink-600"
                        >
                          🏷️ Elige tus etiquetas
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Otras categorías */}
                  <Link
                    href="/etiquetas/escolar"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 hover:text-pink-600"
                  >
                    Etiquetas y sellos escolares
                  </Link>
                  <Link
                    href="/detalles"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 hover:text-pink-600"
                  >
                    Detalles personalizados
                  </Link>
                  <Link
                    href="/corporativo"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 hover:text-pink-600"
                  >
                    Papoom corporativo
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/promociones"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600 transition-colors border-t border-gray-100 mt-2"
            >
              Promociones
            </Link>

            <Link
              href="/carrito"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-pink-600 transition-colors"
            >
              🛒 Carrito
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
