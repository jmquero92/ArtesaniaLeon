// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl text-white py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + Nombre */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image src="/logo.png" alt="Logo Artesanía León" width={48} height={48} />
          <h2 className="text-2xl font-diskus tracking-tight">Artesanía León</h2>
          <p className="text-sm text-white/70">Desde 1906, cerámica con alma.</p>
        </div>

        {/* Enlaces */}
        <div className="space-y-2">
          <h3 className="text-lg font-cormorant mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm font-light">
            <li><Link href="#quienes-somos" className="hover:underline">La Empresa</Link></li>
            <li><Link href="/catalogo" className="hover:underline">Catálogo</Link></li>
            <li><Link href="#blog" className="hover:underline">Blog</Link></li>
            <li><Link href="#contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="space-y-2">
          <h3 className="text-lg font-cormorant mb-2">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4 text-white/80">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-[#e57373] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-[#e57373] transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.6c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H18l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-12 text-xs text-center text-white/60">
        © {new Date().getFullYear()} Artesanía León · Todos los derechos reservados.
      </div>
    </footer>
  );
}
