"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Header({ offsetTop = 0 }: { offsetTop?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // submenu Tienda en móvil
  const [celebrarOpen, setCelebrarOpen] = useState(false); // sub-submenu celebrar en móvil
  const [escolarOpen, setEscolarOpen] = useState(false); // sub-submenu escolares en móvil

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
      style={{ top: offsetTop }}
    >
      <div className="mx-auto max-w-7xl h-20 px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={240}
            height={90}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 text-base font-medium">
          <Link href="/sobre" className="hover:text-pink-600 transition-colors">
            Bienvenidos
          </Link>

          {/* TIENDA dropdown (desktop) */}
          <div className="relative group">
            <button
              className="inline-flex items-center gap-1 hover:text-pink-600 transition-colors focus:outline-none"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tienda <FaChevronDown className="text-xs mt-0.5" />
            </button>

            {/* Contenedor del dropdown principal */}
            <div className="absolute left-0 top-full mt-2 w-[320px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto">
              {/* Etiquetas para celebrar (ya existente con dos opciones) */}
              <div className="relative group/celebrar">
                <Link
                  href="/tienda/celebrar"
                  className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-pink-50 transition"
                >
                  <span>Etiquetas para celebrar</span>
                  <FaChevronRight className="text-xs opacity-70" />
                </Link>

                {/* Flyout celebrar */}
                <div className="absolute top-0 left-[100%] ml-2 w-[280px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover/celebrar:opacity-100 group-hover/celebrar:pointer-events-auto">
                  <Link
                    href="/tienda/celebrar/packs"
                    className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    🎉 Packs de cumpleaños personalizados
                  </Link>
                  <Link
                    href="/tienda/celebrar/elige"
                    className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    🏷️ Elige tus etiquetas
                  </Link>
                </div>
              </div>

              {/* Etiquetas y sellos escolares (NUEVO flyout) */}
              <div className="relative group/escolares mt-1">
                <Link
                  href="/tienda/escolares"
                  className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-pink-50 transition"
                >
                  <span>Etiquetas y sellos escolares</span>
                  <FaChevronRight className="text-xs opacity-70" />
                </Link>

                {/* Flyout escolares */}
                <div className="absolute top-0 left-[100%] ml-2 w-[280px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 pointer-events-none transition group-hover/escolares:opacity-100 group-hover/escolares:pointer-events-auto">
                  <Link
                    href="/tienda/escolares/packs"
                    className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    📚 Packs escolares
                  </Link>
                  <Link
                    href="/tienda/escolares/elige"
                    className="block rounded-md px-3 py-2 hover:bg-pink-50 transition"
                  >
                    🧷 Elige tus etiquetas escolares
                  </Link>
                </div>
              </div>

              {/* Regalos personalizados */}
              <Link
                href="/detalles"
                className="block rounded-md px-3 py-2 hover:bg-pink-50 transition mt-1"
              >
                Regalos personalizados
              </Link>
            </div>
          </div>

          <Link href="/promociones" className="hover:text-pink-600 transition-colors">
            Promociones
          </Link>

          {/* Buscador simple */}
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

            {/* Acordeón Tienda */}
            <div className="border-t pt-2 mt-2">
              <button
                className="w-full text-left flex justify-between items-center py-2 font-medium hover:text-pink-600"
                onClick={() => setSubmenuOpen(!submenuOpen)}
              >
                Tienda
                <FaChevronDown
                  className={`text-xs transition-transform ${submenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Subopciones de Tienda */}
              {submenuOpen && (
                <div className="pl-3">
                  {/* Celebrar (sub-submenu) */}
                  <button
                    className="w-full text-left flex justify-between items-center py-2 hover:text-pink-600"
                    onClick={() => setCelebrarOpen(!celebrarOpen)}
                  >
                    Etiquetas para celebrar
                    <FaChevronDown
                      className={`text-xs transition-transform ${celebrarOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {celebrarOpen && (
                    <div className="pl-3 pb-2 flex flex-col gap-1">
                      <Link href="/tienda/celebrar/packs" onClick={() => setMobileOpen(false)} className="py-1 text-sm hover:text-pink-600">
                        🎉 Packs de cumpleaños personalizados
                      </Link>
                      <Link href="/tienda/celebrar/elige" onClick={() => setMobileOpen(false)} className="py-1 text-sm hover:text-pink-600">
                        🏷️ Elige tus etiquetas
                      </Link>
                    </div>
                  )}

                  {/* Escolares (sub-submenu NUEVO) */}
                  <button
                    className="w-full text-left flex justify-between items-center py-2 hover:text-pink-600"
                    onClick={() => setEscolarOpen(!escolarOpen)}
                  >
                    Etiquetas y sellos escolares
                    <FaChevronDown
                      className={`text-xs transition-transform ${escolarOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {escolarOpen && (
                    <div className="pl-3 pb-2 flex flex-col gap-1">
                      <Link href="/tienda/escolares/packs" onClick={() => setMobileOpen(false)} className="py-1 text-sm hover:text-pink-600">
                        📚 Packs escolares
                      </Link>
                      <Link href="/tienda/escolares/elige" onClick={() => setMobileOpen(false)} className="py-1 text-sm hover:text-pink-600">
                        🧷 Elige tus etiquetas escolares
                      </Link>
                    </div>
                  )}

                  <Link href="/detalles" onClick={() => setMobileOpen(false)} className="py-2 hover:text-pink-600">
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

            {/* Buscador móvil (opcional) */}
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
