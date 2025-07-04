'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const { locale } = useLanguage()
  const { t } = useTranslation(locale)

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-[url('/hero-ceramica.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />

      <div className="relative z-20 max-w-4xl mx-auto pt-40 text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale} // clave para que reanime al cambiar idioma
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-7xl md:text-9xl font-diskus font-bold">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-2xl font-cormorant drop-shadow-md leading-snug whitespace-pre-line">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
