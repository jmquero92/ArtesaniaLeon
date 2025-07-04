'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NuestrosProductos() {
  const { locale } = useLanguage()
  const { t } = useTranslation(locale)

  return (
    <section className="bg-[#fcf9f4] pt-0 pb-0 px-0 mt-0">
      {/* Encabezado con imagen de fondo */}
      <div
        className="w-full h-[500px] bg-fixed bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/266379-black-and-white-photo-of-potter-molding-clay-with-.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={locale}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-cormorant mb-4">
                {t.productos.sectionTitle}
              </h2>
              <p className="text-lg font-light max-w-2xl">
                {t.productos.sectionDescription}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Productos */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Producto 1 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/productos/vajilla1.jpg"
            alt="Vajilla 1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <div className="text-white max-w-md">
              <h3 className="text-3xl font-cormorant mb-2">{t.productos.tierra.title}</h3>
              <p className="text-base font-light">{t.productos.tierra.description}</p>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/productos/vajilla2.jpg"
            alt="Vajilla 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <div className="text-white max-w-md">
              <h3 className="text-3xl font-cormorant mb-2">{t.productos.tradicion.title}</h3>
              <p className="text-base font-light">{t.productos.tradicion.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
