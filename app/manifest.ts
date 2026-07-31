import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marcos Pirchio Giani | Desarrollador Full Stack",
    short_name: "Marcos Pirchio",
    description:
      "Técnico en Desarrollo de Software especializado en desarrollo Full Stack. Creación de soluciones robustas y escalables con Java, Spring Boot, React y Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#121110",
    theme_color: "#121110",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
