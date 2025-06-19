"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NuestrosProductos() {
  return (
    <section className="bg-[#fcf9f4] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-cormorant text-[#5C432D] mb-6 text-center"
        >
          Nuestros productos
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-[#7C5F47] font-light text-center max-w-2xl mx-auto mb-16"
        >
          Vajillas y piezas artesanas que elevan lo cotidiano. Diseños únicos, funcionales y con alma.
        </motion.p>

        {/* Producto 1 */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative col-span-12 md:col-span-6 h-72 md:h-[450px] rounded-lg overflow-hidden"
          >
            <Image
              src="/productos/vajilla1.jpg"
              alt="Vajilla 1"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 text-[#5C432D]"
          >
            <h3 className="text-3xl font-cormorant mb-4">Colección Tierra</h3>
            <p className="text-base font-light leading-relaxed">
              Formas suaves y tonos naturales pensados para el día a día. Cada pieza es única,
              elaborada a mano y resistente para el uso alimentario.
            </p>
          </motion.div>
        </div>

        {/* Producto 2 (imagen derecha) */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 order-2 md:order-1 text-[#5C432D]"
          >
            <h3 className="text-3xl font-cormorant mb-4">Serie Tradición</h3>
            <p className="text-base font-light leading-relaxed">
              Inspirada en motivos clásicos españoles, esta serie rescata la alfarería tradicional,
              combinando estética y funcionalidad.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative col-span-12 md:col-span-6 order-1 md:order-2 h-72 md:h-[450px] rounded-lg overflow-hidden"
          >
            <Image
              src="/productos/vajilla2.jpg"
              alt="Vajilla 2"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
