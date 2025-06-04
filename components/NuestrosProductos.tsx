"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NuestrosProductos() {
  const slides = [
    { src: "/productos/vajilla1.jpg", alt: "Vajilla diseño 1" },
    { src: "/productos/vajilla2.jpg", alt: "Vajilla diseño 2" },
    { src: "/productos/vajilla3.jpg", alt: "Vajilla diseño 3" },
  ];

  // 🔥 Estado para saber si ya está en cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 bg-beige-light">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-900">
          Nuestros Productos
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          Nuevos diseños de vajillas garantizados por nuestro registro sanitario.
        </p>

        {isClient && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            {slides.map(({ src, alt }, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <button className="mt-8 px-6 py-3 bg-yellow-800 text-white rounded-lg shadow-md hover:bg-yellow-700 transition">
          Ver más
        </button>
      </div>
    </section>
  );
}