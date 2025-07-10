"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Imagen {
  src: string
  alt: string
  categoria: string
  relacionadas?: string[]
}

const imagenes: Imagen[] = [
  { src: '/25-1-scaled.jpeg', alt: '25-1', categoria: 'rayas' },
  { src: '/25-2-scaled.jpeg', alt: '25-2', categoria: 'rayas' },
  { src: '/25-3-scaled.jpeg', alt: '25-3', categoria: 'rayas' },
  { src: '/25-4-scaled.jpeg', alt: '25-4', categoria: 'rayas' },
  {
    src: '/25-6-scaled.jpeg',
    alt: '25-6',
    categoria: 'mar',
    relacionadas: [
      '/25-6-scaled.jpeg',
      '/25-6-1.jpg',
      '/25-6-2.jpg',
      '/25-6-3.jpg',
      '/25-6-4.jpg',
    ],
  },
  { src: '/25-7-scaled.jpeg', alt: '25-7', categoria: 'flores', 
    relacionadas:[
      '/25-7-scaled.jpeg',
      '/25-7-1.jpg',
      '/25--7-2.jpeg',
    ] },
  { src: '/25-8-scaled.jpeg', alt: '25-8', categoria: 'mar',
    relacionadas:[
      '/25-8-scaled.jpeg',
      '/25-8-1.jpg',
      '/25-8-2.jpg',
      '/25-8-4.jpg',
    ]
   },
  { src: '/25-9-scaled.jpeg', alt: '25-9', categoria: 'flores',
    relacionadas: [
        '/25-9-scaled.jpeg',
        '/25-9-2.jpg',
        '/25-9-3.jpg',
        '/25-9-4.jpg',
    ]
  },
  { src: '/25-10-scaled.jpeg', alt: '25-10', categoria: 'flores',
    relacionadas: [
      '/25-10-scaled.jpeg',
      '/25-10-1.jpeg',
    ]
   },
  { src: '/25-11-scaled.jpeg', alt: '25-11', categoria: 'flores', 
    relacionadas: [
      '/25-11-scaled.jpeg',
      '/25-11-1.jpg',
      '/25-11-2.jpg',
      '/25-11-3.jpg',
      '/25-11-4.jpg',
    ]
  },
  { src: '/25-13-scaled.jpeg', alt: '25-13', categoria: 'mar',
    relacionadas:[
      '/25-13-scaled.jpeg',
      '/25-13-1.jpg',
      '/25-13-2.jpg',
      '/25-13-3.jpg',
      '/25-13-4.jpg',
    ]
   },
  { src: '/25-18.png', alt: '25-18', categoria: 'mar',
    relacionadas:[
      '/25-18.png',
      '/25-18-1.jpg',
      '/25-18-2.jpg',
      '/25-18-4.jpg',
    ]
   },
  { src: '/25-19.png', alt: '25-19', categoria: 'mar',
    relacionadas:[
      '/25-19.png',
      '/25-19-1.jpg',
      '/25-19-2.jpg',
      '/25-19-3.jpg',
      '/25-19s-4.jpg',
    ]
  },
  { src: '/25-20.png', alt: '25-20', categoria: 'mar',
    relacionadas:[
      '/25-20.png',
      '/25-20-1.jpg',
      '/25-20-2.jpg',
      '/25-20-3.jpg',
      '/25-20-4.jpg',
      '/25-20-5.jpg',
    ]
   },
  { src: '/22-2.png', alt: '22-2', categoria: 'salpicado' },
]

const categorias = ['todos', 'flores', 'mar', 'rayas', 'salpicado']

export default function ModernLightboxGallery() {
  const [authenticated, setAuthenticated] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const correctPassword = '2905'

  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState<string>('')
  const [imageList, setImageList] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number>(0)

  const imagenesFiltradas = categoriaActiva === 'todos'
    ? imagenes
    : imagenes.filter((img) => img.categoria === categoriaActiva)

  const openLightbox = (relacionadas: string[], initial: string) => {
    setImageList(relacionadas)
    setCurrentImage(initial)
    setIndex(relacionadas.indexOf(initial))
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setAutoplay(false)
    setCurrentImage('')
  }

  const nextImage = () => {
    const next = (index + 1) % imageList.length
    setIndex(next)
    setCurrentImage(imageList[next])
  }

  const prevImage = () => {
    const prev = (index - 1 + imageList.length) % imageList.length
    setIndex(prev)
    setCurrentImage(imageList[prev])
  }

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => nextImage(), 4000)
    }
    return () => clearTimeout(timeoutRef.current!)
  }, [index, autoplay])

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfaf7] px-4">
        <div className="max-w-md w-full text-center space-y-4 p-8 bg-white rounded-xl shadow-xl border border-yellow-300">
          <h2 className="text-2xl font-bold text-yellow-700">Acceso Privado</h2>
          <input
            type="password"
            placeholder="Introduce la contraseña"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={() => {
              if (inputPassword === correctPassword) setAuthenticated(true)
            }}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg font-semibold"
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fdfaf7] p-8">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-cormorant"
        >
          Colecciones 2025
        </motion.h1>
      </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imagenesFiltradas.map((img) => (
          <div
            key={img.src}
            className="group cursor-pointer overflow-hidden rounded-xl shadow-lg relative"
            onClick={() => openLightbox(img.relacionadas || [img.src], img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-0 right-0 text-center text-gray-100 text-sm font-medium bg-black/50 py-1 pointer-events-none">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const delta = touchStartX.current - e.changedTouches[0].clientX
              if (delta > 50) nextImage()
              else if (delta < -50) prevImage()
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage}
                alt=""
                className="rounded-2xl max-h-[80vh] mx-auto object-contain shadow-2xl transition-all duration-500 cursor-zoom-in"
                onClick={(e) => {
                  const img = e.currentTarget
                  img.classList.toggle('scale-110')
                }}
              />
              <div className="flex justify-center mt-6 gap-4 overflow-x-auto pb-2">
                {imageList.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="mini"
                    onClick={() => {
                      setCurrentImage(src)
                      setIndex(i)
                    }}
                    className={`h-24 rounded-lg cursor-pointer border-2 transition-transform duration-300 hover:scale-105 ${
                      currentImage === src ? 'border-yellow-500' : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 p-2 rounded-full hover:bg-yellow-600"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 p-2 rounded-full hover:bg-yellow-600"
              >
                ›
              </button>
 <button
  onClick={() => setAutoplay(!autoplay)}
  className="absolute bottom-6 right-6 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-700 shadow-lg"
>
  {autoplay ? 'Detener' : '▶ Presentación'}
</button>

<button
  onClick={closeLightbox}
  className="absolute top-4 right-4 text-white text-3xl hover:text-red-400"
>
  ×
</button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
