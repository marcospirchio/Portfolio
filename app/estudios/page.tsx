import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EstudiosContent } from "@/components/estudios/EstudiosContent";

export const metadata: Metadata = {
  title: "Progreso académico | Marcos Pirchio Giani",
  description:
    "Seguimiento en vivo de la Tecnicatura Universitaria en Desarrollo de Software y la Licenciatura en Gestión de las Tecnologías de la Información en UADE.",
};

export default function EstudiosPage() {
  return (
    <>
      <Header />
      <EstudiosContent />
      <Footer />
    </>
  );
}
