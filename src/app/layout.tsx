import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "@fontsource/urbanist";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Sportiva: tu app deportiva inteligente para encontrar partidos, rivales y comunidad",
  description: "Sportiva es una app deportiva inteligente, social y conectada, que potencia la experiencia de juego, genera comunidad y evoluciona el deporte.",
  keywords: "deporte social, app de partidos, encuentra cancha, tenis local, fútbol entre amigos",
  openGraph: {
    title: "Sportiva: App deportiva inteligente",
    description: "Encuentra partidos, rivales y comunidad en Sportiva",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sportiva",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-inter antialiased bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
