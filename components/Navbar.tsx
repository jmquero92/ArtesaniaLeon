"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-yellow-50 shadow-md dark:bg-black border-b-2 border-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo con línea a la derecha */}
        <Link
          href="/"
          className="flex items-center pr-6 border-r border-gray-300 dark:border-gray-600"
        >
          <Image
            src="/logo.png"
            alt="Logo Cerámica León"
            width={60}
            height={60}
          />
          <span className="ml-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-diskus">
            Artesanía León
          </span>
        </Link>

        {/* Menú con líneas verticales entre enlaces */}
        <div className="hidden md:flex text-lg font-medium items-center">
          <Link
            href="#quienes-somos"
            className="px-4 border-r border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            La Empresa
          </Link>

          {/* Desplegable de Catálogo */}
          <div className="relative group">
            <button
              className="px-4 border-r border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center"
            >
              Catálogo ▼
            </button>
            {/* Submenú */}
            <div
              className="
                absolute left-0 top-full mt-1 w-48 bg-white dark:bg-zinc-800 rounded shadow-md
                overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out
                group-hover:max-h-40 group-hover:opacity-100
              "
            >
              <Link href="/familia1" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700">Familia 1</Link>
              <Link href="/familia2" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700">Familia 2</Link>
              <Link href="/familia3" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700">Familia 3</Link>
            </div>
          </div>

          <Link
            href="#blog"
            className="px-4 border-r border-gray-300 dark:border-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            className="px-4 hover:text-red-600 dark:hover:text-blue-400 transition"
          >
            Contacto
          </Link>
        </div>

        {/* Botón para móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-3 space-y-2 text-sm font-medium">
          <Link href="#quienes-somos" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Quiénes somos
          </Link>
          <Link href="#catalogo" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Catálogo
          </Link>
          <Link href="#blog" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <Link href="#contacto" className="block hover:text-blue-600 dark:hover:text-blue-400">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}