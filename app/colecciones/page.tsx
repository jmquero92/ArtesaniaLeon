'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Categoria = 'todos' | 'flores' | 'mar' | 'rayas' | 'salpicado'

interface Imagen {
  src: string
  alt: string
  categoria: Categoria
}

const imagenes: Imagen[] = [
  { src: '/25-1-scaled.jpeg', alt: '25-1', categoria: 'rayas' },
  { src: '/25-2-scaled.jpeg', alt: '25-2', categoria: 'rayas' },
  { src: '/25-3-scaled.jpeg', alt: '25-3', categoria: 'rayas' },
  { src: '/25-4-scaled.jpeg', alt: '25-4', categoria: 'rayas' },
  { src: '/25-6-scaled.jpeg', alt: '25-6', categoria: 'mar' },
  { src: '/25-7-scaled.jpeg', alt: '25-7', categoria: 'flores' },
  { src: '/25-8-scaled.jpeg', alt: '25-8', categoria: 'mar' },
  { src: '/25-9-scaled.jpeg', alt: '25-9', categoria: 'flores' },
  { src: '/25-10-scaled.jpeg', alt: '25-10', categoria: 'flores' },
  { src: '/25-11-scaled.jpeg', alt: '25-11', categoria: 'flores' },
  { src: '/25-13-scaled.jpeg', alt: '25-13', categoria: 'mar' },
  { src: '/25-14-scaled.jpeg', alt: '25-14', categoria: 'flores' },
  { src: '/25-17-scaled.jpeg', alt: '25-17', categoria: 'flores' },
  { src: '/25-18-scaled.jpeg', alt: '25-18', categoria: 'mar' },
  { src: '/25-19-scaled.jpeg', alt: '25-19', categoria: 'mar' },
  { src: '/25-20-scaled.jpeg', alt: '25-20', categoria: 'mar' },
  { src: '/22-2-scaled.png', alt: '22-2', categoria: 'salpicado' },
]

const categorias: Categoria[] = ['todos', 'flores', 'mar', 'rayas', 'salpicado']

export default function ColeccionesProtegidas() {
  const [inputPassword, setInputPassword] = useState('')
  const [accessGranted, setAccessGranted] = useState(false)
  const [error, setError] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('todos')
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })

  const CORRECT_PASSWORD = '2905'
  const imagenesFiltradas = categoriaActiva === 'todos'
    ? imagenes
    : imagenes.filter((img) => img.categoria === categoriaActiva)

  const imagenActual = imagenes[lightbox.index]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox.open) return
      if (e.key === 'ArrowRight') {
        setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % imagenes.length }))
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) => ({ ...prev, index: (prev.index - 1 + imagenes.length) % imagenes.length }))
      } else if (e.key === 'Escape') {
        setLightbox({ ...lightbox, open: false })
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  if (!accessGranted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#e8dfd3] to-[#fffdf8] text-[#5C432D] font-cormorant flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 space-y-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Acceso a Colecciones</h1>
          <p className="text-sm text-gray-700">Introduce la contraseña para acceder a contenido exclusivo.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (inputPassword === CORRECT_PASSWORD) {
                setAccessGranted(true)
                setError(false)
              } else {
                setError(true)
              }
            }}
            className="space-y-4"
          >
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:ring-2 focus:ring-yellow-600 focus:outline-none transition"
            />
            <button
              type="submit"
              className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md font-medium transition"
            >
              Entrar
            </button>
          </form>
          {error && <p className="text-sm text-red-500 font-medium">Contraseña incorrecta, inténtalo de nuevo.</p>}
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gradient-to-b from-[#f5eee3] via-[#f9f6f0] to-[#fffdf8] text-[#5C432D] font-cormorant min-h-screen py-16 px-4">
<div className="text-center mb-12">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="text-5xl md:text-6xl font-bold font-cormorant"
  >
    Colecciones 2025
  </motion.h2>

  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    className="mt-2 h-1 w-24 bg-yellow-600 rounded-full origin-center mx-auto"
  />
</div>

      {/* Tabs con barra animada abajo */}
      <div className="flex justify-center gap-6 mb-12 border-b border-yellow-300 max-w-full overflow-x-auto">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`relative px-6 py-3 text-lg font-medium transition-colors whitespace-nowrap ${
              categoriaActiva === cat ? 'text-yellow-700' : 'text-gray-500 hover:text-yellow-600'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}

            {categoriaActiva === cat && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-600 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Galería con stagger animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={categoriaActiva}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {imagenesFiltradas.map((img) => (
            <motion.div
              key={img.src}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => setLightbox({ open: true, index: imagenes.indexOf(img) })}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-2 text-sm text-center text-gray-600">{img.alt}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 transition-all duration-500">
          <button
            className="absolute top-5 right-5 text-white text-4xl hover:text-red-400 transition"
            onClick={() => setLightbox({ ...lightbox, open: false })}
          >
            ×
          </button>
          <button
            className="absolute left-4 text-5xl text-white hover:text-yellow-300"
            onClick={() =>
              setLightbox((prev) => ({
                ...prev,
                index: (prev.index - 1 + imagenes.length) % imagenes.length,
              }))
            }
          >
            ‹
          </button>
          <img
            src={imagenActual.src}
            alt={imagenActual.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl transition-all duration-300"
          />
          <button
            className="absolute right-4 text-5xl text-white hover:text-yellow-300"
            onClick={() =>
              setLightbox((prev) => ({
                ...prev,
                index: (prev.index + 1) % imagenes.length,
              }))
            }
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
