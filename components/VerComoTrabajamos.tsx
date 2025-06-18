"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VerComoTrabajamos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section

    >
      <div
        className="max-w-7xl mx-auto p-8 rounded-lg shadow-lg bg-white/80 dark:bg-black/60"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-800 dark:text-yellow-400 font-diskus">
          Ver cómo trabajamos
        </h2>

        <div className="relative" style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/uqWDS8ZBYSU?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1"
            title="Ver cómo trabajamos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}