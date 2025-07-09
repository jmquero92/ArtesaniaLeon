'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const { locale } = useLanguage()
  const { t } = useTranslation(locale)

  // Typewriter hook para el subtítulo
  const [typedText] = useTypewriter({
    words: t.hero.subtitles, // toma el subtítulo traducido
    loop: false,
    typeSpeed: 50,
    deleteSpeed: 40,
    delaySpeed: 2000
  })

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/hero-ceramica.jpg')] bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />

      <div className="relative z-20 max-w-4xl mx-auto pt-40 text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            <h1 className="text-7xl md:text-9xl font-diskus">
              {t.hero.title}
            </h1>

            <p className="mt-6 text-2xl font-cormorant drop-shadow-md leading-snug whitespace-pre-line">
              {typedText}
              <Cursor cursorStyle="|" />
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
