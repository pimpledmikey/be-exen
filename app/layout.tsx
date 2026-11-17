import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./company";

const title = "BE Excellent Energy | Soluciones energéticas";
const description =
  "Soluciones solares residenciales, comerciales, industriales y sistemas híbridos. Ingeniería, instalación, consultoría energética y asesoría sobre financiamiento FIDE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  // Conserva la propiedad de Google Search Console del sitio anterior.
  verification: { google: "4Yv6LJGmxYY3HgPpZx8PqqfKxGtPEqb51MQmOoZZDmY" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "BE Excellent Energy",
    title,
    description,
    images: [
      {
        url: "/images/solar-industrial.webp",
        width: 1024,
        height: 576,
        alt: "Instalación de paneles solares en una nave comercial",
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
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
