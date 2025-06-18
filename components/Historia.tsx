"use client";

import Image from "next/image";

export default function NuestraHistoria() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* Imagen a la izquierda */}
        <div className="relative col-span-12 md:col-span-5 h-72 md:h-[450px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/historia-alfareria.jpg"
            alt="Nuestra Historia"
            fill
            className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-5xl md:text-6xl font-cormorant font-semibold text-gray-900 mb-6 leading-tight">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Artesanía León es un taller familiar de alfarería y cerámica con raíces que se extienden a lo largo de cuatro generaciones.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Fundado en 1970 por Diego León del Río, nace como legado de un linaje de alfareros que sigue inspirando nuestras piezas hasta hoy.
          </p>
          <a
            href="/historia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300 tracking-wide uppercase text-sm shadow-md"
          >
            Leer más
          </a>
        </div>
      </div>
    </section>
  );
}
