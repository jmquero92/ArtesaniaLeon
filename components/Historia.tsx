"use client";

import Image from "next/image";

export default function Historia() {
  return (
    <section className="py-16 bg-[url('/ceramica-textura.jpg')] bg-cover bg-center bg-beige-light">

      <div className="max-w-4xl mx-auto bg-white/70 dark:bg-black/50 p-8 rounded shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="flex-shrink-0 w-full md:w-1/3 rounded overflow-hidden shadow-md">
          <Image
            src="/historia-alfareria.jpg" // tu imagen aquí
            alt="Historia Artesanía León"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-diskus font-bold mb-4 text-yellow-800 dark:text-yellow-400">
            Alfarería y Cerámica León S.L.
          </h2>
          <p className="text-lg font-light leading-relaxed">
            ARTESANÍA LEÓN es un Taller de Alfarería y Cerámica Artesanal de gran tradición familiar que se remonta a cuatro generaciones de alfareros.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed">
            Fue fundado en 1.970 bajo la denominación de «Artesanía León» por Diego León del Río, que trabajaba como socio en la empresa familiar heredada de sus padres, que a la vez la habían heredado de sus progenitores.
          </p>
          {/* Botón "Leer más" */}
          <div className="mt-6">
            <a
              href="/historia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded bg-yellow-800 text-white hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-500 transition-colors"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
