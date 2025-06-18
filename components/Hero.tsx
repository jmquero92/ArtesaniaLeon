"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[url('/hero-ceramica.jpg')] bg-cover bg-center h-screen flex items-start justify-center pt-32"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-black bg-opacity-0 p-8 rounded-lg max-w-4xl text-center text-white"
      >
        <h1 className="text-9xl font-diskus font-bold">Artesanía León</h1>
        <p className="mt-4 text-xl font-light">
          Tradición alfarera desde 1906, Cerámica fabricada en España.
        </p>
      </motion.div>
    </motion.section>
  );
}
