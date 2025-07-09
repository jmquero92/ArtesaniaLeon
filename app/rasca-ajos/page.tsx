'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function RascaAjos() {
  const { locale } = useLanguage()

  const content = {
    es: {
      title: 'Rasca Ajos',
      subtitle: 'Tradición y funcionalidad en una sola pieza',
      description: `El Rasca Ajos es una de nuestras piezas más representativas. Hecho a mano con técnicas ancestrales, ofrece una solución eficaz, elegante y duradera para rallar ajos, especias o pequeños ingredientes.`,
    },
    en: {
      title: 'Garlic Grater',
      subtitle: 'Tradition and functionality in one piece',
      description: `The Garlic Grater is one of our most iconic pieces. Handmade using ancestral techniques, it provides an effective, elegant, and long-lasting solution for grating garlic, spices, or small ingredients.`,
    },
  }

  const { title, subtitle, description } = content[locale]

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center space-y-10 font-cormorant backdrop-blur">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-center">
        {title}
      </h1>
      <h2 className="text-xl md:text-2xl text-[#e57373] text-center italic">
        {subtitle}
      </h2>
      <div className="max-w-3xl text-lg md:text-xl text-center md:text-justify">
        {description}
      </div>

      <div className="relative w-full max-w-md h-72 rounded-xl overflow-hidden shadow-lg border border-white/10">
        <Image
          src="/rasca-ajos.jpg"
          alt="Rasca Ajos artesanal"
          fill
          className="object-cover"
        />
      </div>
    </main>
  )
}
