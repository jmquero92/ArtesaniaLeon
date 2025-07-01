"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🚀 Versión MOBILE (logo centrado, menú izquierda) */}
      <div className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden flex justify-center">
        {/* Logo centrado */}
        <div className="bg-black/60 backdrop-blur-lg px-3 py-2 rounded-md flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
        </div>

        {/* Botón menú a la izquierda */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 bg-black/60 backdrop-blur-lg rounded-md text-white"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* 🖥️ Versión DESKTOP (logo izquierda, menú derecha) */}
      <div className="hidden md:flex fixed top-4 left-6 z-50 items-center space-x-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-md transition-opacity duration-300">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-white text-2xl font-diskus tracking-tight">
          Artesanía León
        </span>
      </div>

      <nav
        className={`hidden md:block fixed top-4 right-6 z-50 px-4 py-2 bg-black/40 backdrop-blur-md rounded-md transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 font-cormorant text-white text-lg tracking-wide hover:opacity-70"
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
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Fondo degradado oscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b1f14]/80 to-[#5a4734]/70 opacity-95" />

        {/* Menú central */}
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
