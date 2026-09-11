import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BE Excellent Energy | Soluciones energéticas",
  description:
    "Soluciones solares residenciales, comerciales, industriales y sistemas híbridos. Ingeniería, instalación, consultoría energética y asesoría sobre financiamiento FIDE.",
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
