import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BE Excellent Energy | Soluciones energéticas",
  description:
    "Diseño e instalación de paneles solares, proyectos llave en mano y consultoría energética para hogares, comercios e industria en México.",
  icons: {
    icon: "/brand/be-exen-logo.svg",
    shortcut: "/brand/be-exen-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
