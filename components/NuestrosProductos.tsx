"use client";

import Image from "next/image";

export default function NuestrosProductos() {
  return (
    <section className="bg-[#fcf9f4] pt-0 pb-0 px-0 mt-0">
      {/* Encabezado con imagen fija de fondo */}
      <div
        className="w-full h-[500px] bg-fixed bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/266379-black-and-white-photo-of-potter-molding-clay-with-.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
          <h2 className="text-4xl md:text-5xl font-cormorant mb-4">
            Nuestros productos
          </h2>
          <p className="text-lg font-light max-w-2xl">
            Vajillas y piezas artesanas que elevan lo cotidiano. Diseños únicos,
            funcionales y con alma.
          </p>
        </div>
      </div>

      {/* Productos tipo tarjeta con texto sobre la imagen */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Producto 1 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/productos/vajilla1.jpg"
            alt="Vajilla 1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <div className="text-white max-w-md">
              <h3 className="text-3xl font-cormorant mb-2">Colección Tierra</h3>
              <p className="text-base font-light">
                Formas suaves y tonos naturales pensados para el día a día. Cada pieza
                es única, elaborada a mano y resistente para el uso alimentario.
              </p>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/productos/vajilla2.jpg"
            alt="Vajilla 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8">
            <div className="text-white max-w-md">
              <h3 className="text-3xl font-cormorant mb-2">Serie Tradición</h3>
              <p className="text-base font-light">
                Inspirada en motivos clásicos españoles, esta serie rescata la alfarería
                tradicional, combinando estética y funcionalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
