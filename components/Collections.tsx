"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/coleccion1.jpg",
    alt: "Colección 1",
    style: {
      top: 20,
      left: 0,
      width: 320,
      height: 240,
      rotate: -5,
    },
  },
  {
    src: "/coleccion2.jpg",
    alt: "Colección 2",
    style: {
      top: 120,
      left: 280,
      width: 350,
      height: 270,
      rotate: 8,
    },
  },
  {
    src: "/coleccion3.jpg",
    alt: "Colección 3",
    style: {
      top: 40,
      left: 600,
      width: 280,
      height: 210,
      rotate: -3,
    },
  },
];

export default function Collections() {
  return (
    <section
      className="py-16 bg-[url('/ceramica-textura.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundColor: "#f5f1e6", position: "relative", height: "700px" }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-black dark:text-black">
          Nuestras Colecciones
        </h2>
        <p className="mb-12 text-black dark:text-black max-w-xl mx-auto">
          Descubre nuestras colecciones únicas de cerámica artesanal.
        </p>

        <div className="relative w-full h-[500px] mx-auto" style={{ maxWidth: '900px' }}>
          {images.map(({ src, alt, style }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
              style={{
                position: "absolute",
                top: style.top,
                left: style.left,
                width: style.width,
                height: style.height,
                transform: `rotate(${style.rotate}deg)`,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes={`${style.width}px`}
                className="object-cover"
                style={{ position: "absolute" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}