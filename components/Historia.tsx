'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function NuestraHistoria() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0px', '0px'])

  const { locale } = useLanguage()
  const { t } = useTranslation(locale)

  return (
    <section ref={ref} className="w-full bg-[#fcf9f4] m-0 p-0">
      <div className="flex flex-col md:flex-row h-screen mb-0 pb-0">
        {/* Imagen con parallax */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <Image
              src="/historia-alfareria.jpg"
              alt="Taller artesano"
              fill
              className="object-cover brightness-95 contrast-90"
              priority
            />
          </motion.div>
        </div>

        {/* Texto con transición al cambiar idioma */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 px-8 md:px-20 py-10 mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={locale}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl font-cormorant text-[#5C432D] mb-6 leading-tight whitespace-pre-line">
                {t.historia.title}
              </h2>
              <p className="text-lg text-[#7C5F47] leading-relaxed max-w-prose whitespace-pre-line">
                {t.historia.paragraph}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
