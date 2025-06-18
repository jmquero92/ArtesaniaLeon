"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo fijo (opcional) */}
      <div className="fixed top-4 left-6 z-50 flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span className="text-white text-2xl font-diskus tracking-tight">Artesanía León</span>
      </div>

      {/* Botón Menú */}
      <nav className="fixed top-5 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white bg-black/70 px-4 py-2 rounded-full backdrop-blur hover:bg-white hover:text-black transition-colors"
        >
          Menú ☰
        </button>
      </nav>

      {/* Overlay menú */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#201a16] via-[#483d2f] to-[#2b1f14] text-white z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-3xl font-cormorant">
          {/* Botón cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-4xl hover:text-[#f6c867] transition-colors"
          >
            ✕
          </button>

          {/* Enlaces del menú */}
          <Link
            href="#quienes-somos"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f6c867] transition-colors"
          >
            La Empresa
          </Link>
          <Link
            href="#catalogo"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f6c867] transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f6c867] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#f6c867] transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}
