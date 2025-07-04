'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)

  return (
    <footer className="bg-black/40 backdrop-blur-xl text-white py-12 px-6 border-t border-white/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
        
        {/* Información */}
        <div className="space-y-2 text-sm font-light">
          <h3 className="text-lg font-cormorant mb-2">Información</h3>
          <ul className="space-y-1">
            <li><Link href="#quienes-somos" className="hover:underline">La Empresa</Link></li>
            <li><Link href="/privacidad" className="hover:underline">Política de Privacidad</Link></li>
            <li><Link href="/aviso-legal" className="hover:underline">Aviso Legal</Link></li>
            <li><Link href="/cookies" className="hover:underline">Política de Cookies</Link></li>
            <li><Link href="/redes-sociales" className="hover:underline">Política de Redes Sociales</Link></li>
            <li><Link href="/catalogo" className="hover:underline">Catálogo Completo</Link></li>
            <li><Link href="/disenos" className="hover:underline">Diseños</Link></li>
          </ul>
        </div>

        {/* Logo y sello Andalucía alineados */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 md:w-28">
              <Image
                src="/logo.png"
                alt="Logo Artesanía León"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-24 md:w-28">
              <Image
                src="/ceramicaandalucia.png"
                alt="Artesanía Hecha en Andalucía"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl font-diskus tracking-tight">Artesanía León</h2>
          <p className="text-sm text-white/70 text-center">
            {t.footer?.brandDescription ?? 'Desde 1906, cerámica con alma.'}
          </p>
        </div>

        {/* Contacto y redes */}
        <div className="space-y-4 text-sm font-light">
          <div>
            <h3 className="text-lg font-cormorant mb-2">Contacto</h3>
            <p><span className="text-white/60">Email:</span> info@artesanialeon.es</p>
            <p><span className="text-white/60">Teléfono:</span> +34 957 68 42 23</p>
            <p><span className="text-white/60">WhatsApp:</span> +34 693 571 473</p>
            <p><span className="text-white/60">Dirección:</span> Calle el Horno, 4,<br />14540 La Rambla, Córdoba</p>
          </div>

          <div>
            <h3 className="text-lg font-cormorant mb-2">{t.footer?.followUs ?? 'Síguenos'}</h3>
            <div className="flex justify-center md:justify-start gap-4 text-white/80">
              <a href="#" aria-label="Instagram" className="hover:text-[#e57373] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#e57373] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.6c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H18l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-6 text-xs text-center text-white/60">
        © {new Date().getFullYear()} Artesanía León · {t.footer?.copyright ?? 'Todos los derechos reservados.'}
      </div>
    </footer>
  )
}
