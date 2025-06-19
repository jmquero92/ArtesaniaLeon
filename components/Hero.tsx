"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section ref={ref} className="relative h-screen overflow-hidden">
        {/* Fondo con efecto parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('/hero-ceramica.jpg')] bg-cover bg-center z-0"
        />

        {/* Degradado opcional para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />

        {/* Contenido sobre el fondo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 max-w-4xl mx-auto pt-40 text-center text-white px-4"
        >
          <h1 className="text-7xl md:text-9xl font-diskus font-bold">
            Artesanía León
          </h1>
          <p className="mt-6 text-2xl font-cormorant drop-shadow-md leading-snug">
            Tradición alfarera desde 1906<br />
            Cerámica fabricada en España.
          </p>
        </motion.div>
      </section>
    </>
  );
}
