import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { whatsappUrl } from "./company";
import { BrandLogo } from "./site-chrome";

export const metadata: Metadata = {
  title: "Página no encontrada | BE Excellent Energy",
};

export default function NotFound() {
  return (
    <main className="site-shell not-found">
      <Link href="/" aria-label="BE Excellent Energy, inicio">
        <BrandLogo className="not-found-logo" />
      </Link>
      <p className="section-kicker">Error 404</p>
      <h1>Esta página ya no está aquí.</h1>
      <p>
        Renovamos nuestro sitio y es posible que el enlace que seguiste haya
        cambiado. Desde el inicio encuentras todo.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">
          Ir al inicio <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <a
          className="button button-ghost"
          href={whatsappUrl("Hola BE Excellent Energy, quiero cotizar un proyecto energético.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  );
}
