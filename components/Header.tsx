// components/Header.tsx
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
      <div className="mx-auto max-w-7xl h-20 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* 🟡 LOGO (duplicado de tamaño) */}
        <Link href="/" aria-label="PapoomArt, ir al inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PapoomArt"
            width={320}   // antes 160
            height={120}  // antes 60
            priority
            className="h-20 w-auto md:h-24" // altura duplicada
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
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tienda <FaChevronDown className="text-xs mt-1" />
            </button>

            <d
