import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import VerComoTrabajamos from "@/components/VerComoTrabajamos";
import NuestrosProductos from "@/components/NuestrosProductos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <VerComoTrabajamos />
        <NuestrosProductos />
      </main>
    </>
  );
}