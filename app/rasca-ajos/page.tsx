"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Imagen {
  src: string;
  alt: string;
  categoria: string;
  relacionadas?: string[];
}

const imagenes: Imagen[] = [
  // 🟡 CLASICOS
  { src: "/Rascaajos/clasicos/10-1.png", alt: "10-1", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/113.png", alt: "113", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/13-7.png", alt: "13-7", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/13-9.png", alt: "13-9", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/14 G.png", alt: "14 G", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/18A.jpg", alt: "18A", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/18C.jpeg", alt: "18C", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/20-Q.png", alt: "20-Q", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/23 O.png", alt: "23 O", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/23 R.png", alt: "23 R", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/4.jpg", alt: "4", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/702470.png", alt: "702470", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/72.png", alt: "72", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/77.png", alt: "77", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/BR.png", alt: "BR", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/L (ACTUAL).jpeg", alt: "L (ACTUAL)", categoria: "clasicos" },
  { src: "/Rascaajos/clasicos/ras-12-14.png", alt: "ras-12-14", categoria: "clasicos" },

  // 🔵 RAYAS
  { src: "/Rascaajos/rayas/7024111.png", alt: "7024111", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024128.png", alt: "7024128", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024129.png", alt: "7024129", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024130.png", alt: "7024130", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024133.png", alt: "7024133", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024134.png", alt: "7024134", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024136.png", alt: "7024136", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024137.png", alt: "7024137", categoria: "rayas" },
  { src: "/Rascaajos/rayas/7024138.png", alt: "7024138", categoria: "rayas" },

  // ⚫ ZEBRA
  { src: "/Rascaajos/zebra/702487.png", alt: "702487", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702488.png", alt: "702488", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702489.png", alt: "702489", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702490.png", alt: "702490", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702491.png", alt: "702491", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702492.png", alt: "702492", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702493.png", alt: "702493", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702494.png", alt: "702494", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702495.png", alt: "702495", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702496.png", alt: "702496", categoria: "zebra" },
  { src: "/Rascaajos/zebra/702497.png", alt: "702497", categoria: "zebra" },

  // 🎄 NAVIDAD
  { src: "/Rascaajos/navidad/22-AD rojo aguado muy claro marron.png", alt: "22-AD rojo aguado muy claro marron", categoria: "navidad" },
  { src: "/Rascaajos/navidad/22-AE rojo marron.png", alt: "22-AE rojo marron", categoria: "navidad" },
  { src: "/Rascaajos/navidad/23-AR.png", alt: "23-AR", categoria: "navidad" },
  { src: "/Rascaajos/navidad/23-AS.png", alt: "23-AS", categoria: "navidad" },
  { src: "/Rascaajos/navidad/23-AT.png", alt: "23-AT", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702472.png", alt: "702472", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702473.png", alt: "702473", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702474.png", alt: "702474", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702475.png", alt: "702475", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702476.png", alt: "702476", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702477.png", alt: "702477", categoria: "navidad" },
  { src: "/Rascaajos/navidad/702478.png", alt: "702478", categoria: "navidad" },

  // 🔴 PISQUITOS
  { src: "/Rascaajos/pisquitos/22-AN.png", alt: "22-AN", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/22-AO.png", alt: "22-AO", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/22-AP.png", alt: "22-AP", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/22-AQ.png", alt: "22-AQ", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/22-AR.png", alt: "22-AR", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 A.png", alt: "23 A", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 B.png", alt: "23 B", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 C.png", alt: "23 C", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 D.png", alt: "23 D", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 E.png", alt: "23 E", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 F.png", alt: "23 F", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 G.png", alt: "23 G", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23 H.png", alt: "23 H", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23-AR.png", alt: "23-AR", categoria: "pisquitos" },
  { src: "/Rascaajos/pisquitos/23-AU.png", alt: "23-AU", categoria: "pisquitos" },
];

const categorias = [
  "todos",
  "clasicos",
  "rayas",
  "zebra",
  "navidad",
  "pisquitos",
  "negro/olas",
  "mar",
  "esponjitas",
  "cenefas",
  "manchas",
  "lavanda",
  "abstractos",
  "salpicado",
  "burbujas"
];

export default function MiniGaleria() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [imageList, setImageList] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);

  const imagenesFiltradas =
    categoriaActiva === "todos"
      ? imagenes
      : imagenes.filter((img) => img.categoria === categoriaActiva);

  const openLightbox = (relacionadas: string[], initial: string) => {
    setImageList(relacionadas);
    setCurrentImage(initial);
    setIndex(relacionadas.indexOf(initial));
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setAutoplay(false);
    setCurrentImage("");
  };

  const nextImage = () => {
    const next = (index + 1) % imageList.length;
    setIndex(next);
    setCurrentImage(imageList[next]);
  };

  const prevImage = () => {
    const prev = (index - 1 + imageList.length) % imageList.length;
    setIndex(prev);
    setCurrentImage(imageList[prev]);
  };

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => nextImage(), 4000);
    }
    return () => clearTimeout(timeoutRef.current!);
  }, [index, autoplay]);

  return (
    <div className="min-h-screen bg-[#fdfaf7] p-4">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold font-cormorant"
        >
          Galería Mini
        </motion.h1>
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              categoriaActiva === cat
                ? "bg-yellow-500 text-white"
                : "bg-white text-yellow-700 border-yellow-400 hover:bg-yellow-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={categoriaActiva}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {imagenesFiltradas.map((img) => (
            <div
              key={`${img.categoria}-${img.src}`}
              className="cursor-pointer group bg-white p-3 shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition"
              onClick={() => openLightbox(img.relacionadas || [img.src], img.src)}
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 text-center text-sm text-gray-600 font-semibold tracking-wide">
                Ref: {img.alt}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const delta = touchStartX.current - e.changedTouches[0].clientX;
              if (delta > 50) nextImage();
              else if (delta < -50) prevImage();
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage}
                alt="zoomed"
                className="rounded-xl max-h-[80vh] mx-auto object-contain shadow-xl"
              />
              <div className="flex justify-center mt-4 gap-2 overflow-x-auto">
                {imageList.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="thumb"
                    onClick={() => {
                      setCurrentImage(src);
                      setIndex(i);
                    }}
                    className={`h-16 rounded-md cursor-pointer border ${
                      currentImage === src
                        ? "border-yellow-500"
                        : "border-transparent"
                    } hover:scale-105 transition-transform duration-300`}
                  />
                ))}
              </div>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-yellow-600"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-yellow-600"
              >
                ›
              </button>
              <button
                onClick={() => setAutoplay(!autoplay)}
                className="absolute bottom-6 right-6 bg-yellow-600 text-white px-3 py-1 rounded text-xs hover:bg-yellow-700 shadow"
              >
                {autoplay ? "Detener" : "▶ Auto"}
              </button>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
