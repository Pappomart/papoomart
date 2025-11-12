// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";

const CLOSE_DELAY = 150;

export default function Header({ offsetTop = 0 }: { offsetTop?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [openProgramas, setOpenProgramas] = useState(false);
  const [openAyudar, setOpenAyudar] = useState(false);

  const mainTimer = useRef<number | null>(null);
  const progTimer = useRef<number | null>(null);
  const ayudarTimer = useRef<number | null>(null);

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };
  const openNow = (setter: (v:boolean)=>void, ref?: React.MutableRefObject<number | null>) => {
    if (ref) clearTimer(ref);
    setter(true);
  };
  const closeDelayed = (setter:(v:boolean)=>void, ref:React.MutableRefObject<number|null>, delay=CLOSE_DELAY) => {
    clearTimer(ref);
    ref.current = window.setTimeout(()=>{ setter(false); ref.current=null; }, delay) as unknown as number;
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
      style={{ top: offsetTop }}
    >
      <div className="mx-auto max-w-7xl h-20 px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="DonaSonrisas, inicio">
          <Image src="/logo.png" alt="DonaSonrisas" width={210} height={70} priority className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 text-base font-medium">
          <Link href="/#nosotros" className="hover:text-pink-600">Quiénes somos</Link>

          {/* Programas */}
          <div
            className="relative"
            onMouseEnter={() => openNow(setOpenMain, mainTimer)}
            onMouseLeave={() => closeDelayed(setOpenMain, mainTimer)}
          >
            <button
              className="inline-flex items-center gap-1 hover:text-pink-600"
              onClick={() => setOpenMain((v) => !v)}
            >
              Programas <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {openMain && (
              <div
                className="absolute left-0 top-full mt-2 w-[320px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-[60]"
                onMouseEnter={() => openNow(setOpenMain, mainTimer)}
                onMouseLeave={() => closeDelayed(setOpenMain, mainTimer)}
              >
                <Link href="/programas/ninez" className="block rounded-md px-3 py-2 hover:bg-pink-50">Niñez</Link>
                <Link href="/programas/educacion" className="block rounded-md px-3 py-2 hover:bg-pink-50">Educación</Link>
                <Link href="/programas/salud" className="block rounded-md px-3 py-2 hover:bg-pink-50">Salud</Link>
                <Link href="/programas/emergencias" className="block rounded-md px-3 py-2 hover:bg-pink-50">Emergencias</Link>
              </div>
            )}
          </div>

          {/* Cómo ayudar */}
          <div
            className="relative"
            onMouseEnter={() => openNow(setOpenAyudar, ayudarTimer)}
            onMouseLeave={() => closeDelayed(setOpenAyudar, ayudarTimer)}
          >
            <button className="inline-flex items-center gap-1 hover:text-pink-600">
              Cómo ayudar <FaChevronDown className="text-xs mt-0.5" />
            </button>
            {openAyudar && (
              <div
                className="absolute left-0 top-full mt-2 w-[320px] rounded-xl border border-gray-200 bg-white p-2 shadow-lg z-[60]"
                onMouseEnter={() => openNow(setOpenAyudar, ayudarTimer)}
                onMouseLeave={() => closeDelayed(setOpenAyudar, ayudarTimer)}
              >
                <Link href="/donar" className="block rounded-md px-3 py-2 hover:bg-pink-50">Donar</Link>
                <Link href="/#apadrinar" className="block rounded-md px-3 py-2 hover:bg-pink-50">Apadrinar</Link>
                <Link href="/#voluntariado" className="block rounded-md px-3 py-2 hover:bg-pink-50">Voluntariado</Link>
                <Link href="/#empresas" className="block rounded-md px-3 py-2 hover:bg-pink-50">Empresas</Link>
              </div>
            )}
          </div>

          <Link href="/transparencia" className="hover:text-pink-600">Transparencia</Link>
          <Link href="/blog" className="hover:text-pink-600">Blog</Link>
          <Link href="/contacto" className="hover:text-pink-600">Contacto</Link>

          <Link href="/donar" className="btn btn-primary !py-2 !px-4">Donar ahora</Link>

          <form action="/buscar" method="GET" className="relative">
            <input
              name="q"
              type="search"
              placeholder="Buscar…"
              className="w-56 rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </form>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 text-gray-800">
            <Link href="/#nosotros" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Quiénes somos</Link>
            <Link href="/programas" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Programas</Link>
            <Link href="/donar" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Cómo ayudar</Link>
            <Link href="/transparencia" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Transparencia</Link>
            <Link href="/blog" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Blog</Link>
            <Link href="/contacto" onClick={()=>setMobileOpen(false)} className="py-2 hover:text-pink-600">Contacto</Link>

            <form action="/buscar" method="GET" className="relative mt-3">
              <input
                name="q"
                type="search"
                placeholder="Buscar…"
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
