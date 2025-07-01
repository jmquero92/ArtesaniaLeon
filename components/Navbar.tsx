"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo */}
      <div
        className={`fixed top-4 left-4 z-50 flex items-center space-x-2 px-3 py-2 rounded-md bg-white/30 backdrop-blur-2xl border border-white/20 shadow-lg transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-black text-lg md:text-2xl font-diskus tracking-tight">
          Artesanía León
        </span>
      </div>

      {/* Botón Menú */}
      <nav
        className={`fixed top-4 right-4 z-50 px-3 py-2 rounded-md bg-white/30 backdrop-blur-2xl border border-white/20 shadow-lg transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 font-cormorant text-black text-base md:text-lg tracking-wide hover:opacity-70 transition-opacity duration-300"
        >
          MENÚ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Overlay menú */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b1f14]/80 via-[#5a4734]/80 to-[#a58a6c]/70 opacity-95"></div>

        {/* Menú principal */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-2xl md:text-3xl font-cormorant text-white px-6 text-center">
          {/* Botón cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl hover:text-[#e57373] transition-colors"
          >
            ✕
          </button>

          {/* Enlaces */}
          <Link
            href="#quienes-somos"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e57373] transition-colors"
          >
            La Empresa
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e57373] transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e57373] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e57373] transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
