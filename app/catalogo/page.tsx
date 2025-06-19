import Image from "next/image";
import Link from "next/link";

const categorias = [
  { nombre: "ACEITUNEROS", imagen: "ACEITUNEROS/AC1.jpg" },
  { nombre: "APERITIVOS", imagen: "APERITIVOS/AP1.jpg" },
  { nombre: "BANDEJAS", imagen: "BANDEJAS/B1.jpg" },
  { nombre: "CENICEROS", imagen: "CENICEROS/CE1.jpg" },
  // Puedes añadir más cuando tengas imágenes preparadas
];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#f4eee6] text-[#2b1f14] font-cormorant px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-[#a3652a]">
          Catálogo Artesanal
        </h1>

        <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {categorias.map((categoria, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-[1.03] group"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={`/catalogo/${categoria.imagen}`}
                  alt={categoria.nombre}
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-105"
                />
              </div>
              <div className="p-5 text-center text-2xl text-[#5e3b1f] group-hover:text-[#a3652a] transition-colors">
                {categoria.nombre}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
