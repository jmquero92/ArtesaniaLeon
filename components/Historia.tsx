"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NuestraHistoria() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section ref={ref} className="w-full bg-[#fcf9f4]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Imagen lado izquierdo con parallax */}
        <div className="relative w-full h-80 md:h-auto overflow-hidden">
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

        {/* Texto lado derecho */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center px-8 md:px-20 py-16"
        >
          <h2 className="text-4xl md:text-5xl font-cormorant text-[#5C432D] mb-6 leading-tight">
            Más que cerámica,<br /> una historia que se moldea con el tiempo.
          </h2>
          <p className="text-lg text-[#7C5F47] leading-relaxed max-w-prose">
            Desde 1906, en el corazón de León, nuestra familia ha cultivado una
            tradición alfarera que une tierra, fuego y manos. Cada pieza encierra el
            legado de cuatro generaciones comprometidas con el arte de transformar
            barro en forma, y forma en emoción.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
