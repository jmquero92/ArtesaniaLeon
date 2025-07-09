'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const sections = [
  {
    title: 'Tradición Hecha Obra',
    desc: 'Llevamos décadas trabajando con las manos, transformando materia en herencia.',
    src: '/detalle-1.jpg'
  },
  {
    title: 'Tacto, Tierra y Tiempo',
    desc: 'Cada pieza refleja la conexión con nuestro entorno, nuestro origen y nuestro presente.',
    src: '/manos.jpg'
  },
  {
    title: 'El Valor de lo Real',
    desc: 'Creamos sin prisas. Porque lo auténtico no se improvisa.',
    src: '/detalle-3.jpg'
  },
  {
    title: 'Hecho para Vivir',
    desc: 'Diseños que acompañan el día a día, sin dejar de emocionar.',
    src: '/empresa2.jpg'
  }
]

export default function EmpresaPage() {
  const [text] = useTypewriter({
    words: [
      'Fusionamos tradición y diseño.',
      'Cada pieza es única.',
      'Hecho a mano con pasión.',
      'Creado para perdurar.'
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1500
  })

  return (
    <main className="bg-black text-white font-cormorant">
      {/* Encabezado con imagen de fondo + typing */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/hero2.jpg" // puedes cambiarla por cualquier fondo impactante
          alt="Fondo header"
          fill
          className="object-cover brightness-50 blur-sm scale-105"
        />

        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-0" />

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight"
        >
          Artesanía León
        </motion.h1>

        {/* Subtítulo con efecto typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          {text}
          <Cursor cursorStyle="|" />
        </motion.p>
      </section>

      {/* Secciones alternadas */}
      {sections.map((item, index) => {
        const isEven = index % 2 === 0
        return (
          <section
            key={item.src}
            className="w-full min-h-screen grid md:grid-cols-2 items-center"
          >
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`relative h-[60vh] md:h-screen w-full ${
                isEven ? '' : 'md:order-2'
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`p-10 md:p-20 flex flex-col justify-center ${
                isEven ? '' : 'md:order-1 text-right md:items-end'
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          </section>
        )
      })}
    </main>
  )
}
