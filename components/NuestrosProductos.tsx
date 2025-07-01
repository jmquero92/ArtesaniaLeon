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

      {/* Contenido de productos */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        {/* Producto 1 */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          <div className="relative col-span-12 md:col-span-6 h-72 md:h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/productos/vajilla1.jpg"
              alt="Vajilla 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-6 text-[#5C432D]">
            <h3 className="text-3xl font-cormorant mb-4">Colección Tierra</h3>
            <p className="text-base font-light leading-relaxed">
              Formas suaves y tonos naturales pensados para el día a día. Cada pieza
              es única, elaborada a mano y resistente para el uso alimentario.
            </p>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 text-[#5C432D]">
            <h3 className="text-3xl font-cormorant mb-4">Serie Tradición</h3>
            <p className="text-base font-light leading-relaxed">
              Inspirada en motivos clásicos españoles, esta serie rescata la
              alfarería tradicional, combinando estética y funcionalidad.
            </p>
          </div>
          <div className="relative col-span-12 md:col-span-6 order-1 md:order-2 h-72 md:h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/productos/vajilla2.jpg"
              alt="Vajilla 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
