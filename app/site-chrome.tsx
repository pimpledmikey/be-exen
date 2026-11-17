import Link from "next/link";

import { site } from "./company";

export function BrandLogo({ className = "" }: { className?: string }) {
  return <img src="/brand/be-exen-logo.svg" alt="BE Excellent Energy" className={className} />;
}

// Los enlaces usan «/#sección» para que funcionen también fuera del inicio.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo className="footer-logo" />
          <p>Soluciones energéticas para hogares, comercios e industria en México.</p>
        </div>
        <div className="footer-column">
          <strong>Navegación</strong>
          <Link href="/#nosotros">Quiénes somos</Link>
          <Link href="/#soluciones">Soluciones</Link>
          <Link href="/#proyectos">Proyectos y clientes</Link>
          <Link href="/#proceso">Cómo lo hacemos</Link>
          <Link href="/#financiamiento">Financiamiento FIDE</Link>
        </div>
        <div className="footer-column">
          <strong>Recursos</strong>
          <Link href="/#calculadora">Calculadora solar</Link>
          <Link href="/#sostenibilidad">Sostenibilidad</Link>
          <Link href="/#preguntas">Preguntas frecuentes</Link>
          <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>
        </div>
        <div className="footer-column">
          <strong>Contacto</strong>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/#ubicacion">Querétaro, México</Link>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <span>Ingeniería · Energía · Futuro</span>
      </div>
    </footer>
  );
}
