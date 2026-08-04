import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

const title = "Marcos Pirchio Giani | Desarrollador Full Stack";
const description =
  "Técnico en Desarrollo de Software especializado en desarrollo Full Stack. Creación de soluciones robustas y escalables con Java, Spring Boot, React y Next.js.";

const ogImageAlt =
  "Marcos Pirchio Giani — Desarrollador de software, automatización y productos digitales";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcospirchio.dev"),
  title,
  description,
  alternates: {
    canonical: "https://marcospirchio.dev",
  },
  openGraph: {
    title,
    description,
    url: "https://marcospirchio.dev",
    siteName: title,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@marcoospirchio",
    title,
    description,
    images: [{ url: "/images/og-image.jpg", alt: ogImageAlt }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcos Pirchio Giani",
  url: "https://marcospirchio.dev",
  jobTitle: "Desarrollador Full Stack",
  description,
  sameAs: [
    "https://github.com/marcospirchio",
    "https://www.linkedin.com/in/marcos-pirchio-giani",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
