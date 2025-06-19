/* 
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Este componente está temporalmente desactivado

export default function VerComoTrabajamos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#fcf9f4] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-cormorant text-[#5C432D] mb-4"
        >
          Ver cómo trabajamos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-[#7C5F47] font-light mb-10"
        >
          Un vistazo íntimo al alma del taller.
        </motion.p>

        <div
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/img/video-cover.jpg"
            alt="Vista previa del vídeo"
            width={1280}
            height={720}
            className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 hover:bg-white text-black p-4 rounded-full transition duration-300 shadow-lg">
              ▶
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full max-w-4xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uqWDS8ZBYSU?autoplay=1&mute=1&rel=0&modestbranding=1"
                  title="Ver cómo trabajamos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white text-3xl hover:text-red-400 transition"
                >
                  ×
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
*/
export default function VerComoTrabajamos() {
  return null;
}