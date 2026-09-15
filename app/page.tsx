import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  Mail,
  Camera,
  UsersRound,
  Phone,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

import { AboutDetails, ServicesMarquee, Solutions } from "./site-sections";
import { Financing } from "./financing";
import { Allies } from "./allies";
import { Location } from "./location";

const whatsappUrl =
  "https://wa.me/524421040693?text=Hola%20BE%20Excellent%20Energy%2C%20quiero%20cotizar%20un%20proyecto%20energ%C3%A9tico.";

const process = [
  {
    step: "01",
    title: "Análisis y asesoría",
    description:
      "Revisamos tu consumo y las condiciones del sitio para definir la solución adecuada.",
  },
  {
    step: "02",
    title: "Diseño de ingeniería",
    description:
      "Dimensionamos un proyecto personalizado con componentes de alta calidad.",
  },
  {
    step: "03",
    title: "Instalación y gestión",
    description:
      "Instalamos el sistema y realizamos los trámites necesarios ante CFE.",
  },
  {
    step: "04",
    title: "Arranque y monitoreo",
    description:
      "Validamos la generación y acompañamos el desempeño de tu sistema solar.",
  },
];

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/be-exen-logo.svg"
      alt="BE Excellent Energy"
      className={className}
    />
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" aria-label="BE Excellent Energy, inicio">
            <BrandLogo className="brand-logo" />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#nosotros">Quiénes somos</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#proceso">Cómo lo hacemos</a>
            <a href="#contacto">Contacto</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>

          <a
            className="header-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Cotiza tu proyecto
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menú">
              <Menu size={24} aria-hidden="true" />
            </summary>
            <nav aria-label="Navegación móvil">
              <a href="#nosotros">Quiénes somos</a>
              <a href="#soluciones">Soluciones</a>
              <a href="#proceso">Cómo lo hacemos</a>
              <a href="#financiamiento">Financiamiento FIDE</a>
              <a href="#contacto">Contacto</a>
              <a href="#ubicacion">Ubicación</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Cotizar ahora
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-icon">
                <Sun size={15} aria-hidden="true" />
              </span>
              Ingeniería para un futuro más eficiente
            </div>

            <h1>
              Energía inteligente.
              <span>Resultados que se sienten.</span>
            </h1>

            <p className="hero-lead">
              Diseñamos e instalamos soluciones solares para hogares, comercios
              e industria. Tú enfócate en lo que importa; nosotros ponemos la
              energía a trabajar.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Quiero ahorrar energía
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#soluciones">
                Conoce las soluciones
              </a>
            </div>

          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/images/solar-industrial.webp"
                alt="Instalación de paneles solares en una nave comercial"
              />
              <div className="image-shade" aria-hidden="true" />
              <div className="image-label">
                <span>Proyecto llave en mano</span>
                <strong>De la ingeniería al arranque</strong>
              </div>
            </div>

            <div className="smart-card">
              <div className="smart-card-top">
                <span className="smart-icon">
                  <Zap size={18} fill="currentColor" aria-hidden="true" />
                </span>
                <span className="status-pill">Energía a tu medida</span>
              </div>
              <p>Smart Solar</p>
              <h2>Tu energía, bajo control.</h2>
              <div className="energy-line" aria-hidden="true">
                {[34, 48, 38, 64, 56, 82, 72, 92, 78, 100].map(
                  (height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
              <div className="smart-card-footer">
                <span>Diseño</span><span>Instalación</span><span>Monitoreo</span>
              </div>
            </div>

            <div className="experience-chip">
              <strong>10+</strong>
              <span>Años de experiencia</span>
            </div>
          </div>
        </div>
        <ServicesMarquee />
      </section>

      <section className="section story-section" id="nosotros">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src="/images/solar-residencial.webp" alt="Casa equipada con paneles solares" loading="lazy" width="1024" height="576" />
              <div className="story-badge">
                <Sun size={20} aria-hidden="true" />
                <span>Energía para hoy.<strong>Visión para mañana.</strong></span>
              </div>
            </div>
            <div className="story-copy">
              <p className="section-kicker">Quiénes somos · BE Excellent Energy</p>
              <h2>Socios estratégicos,<br />no proveedores.</h2>
              <p className="story-lead">Be Excellent Energy es una empresa mexicana con más de 10 años de experiencia diseñando e implementando soluciones energéticas renovables que transforman la energía en una ventaja competitiva.</p>
              <p className="story-lead story-followup">Te acompañamos desde la primera conversación hasta la puesta en marcha, con ingeniería y atención cercana en cada etapa.</p>
              <a className="text-link" href="#soluciones">Descubre qué podemos hacer por ti <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <AboutDetails />
          <Allies />
        </div>
      </section>

      <section className="section solutions-section" id="soluciones">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Qué te ofrecemos</p>
              <h2>Una solución para cada forma de consumir energía.</h2>
            </div>
            <p>
              Cada proyecto empieza entendiendo tus necesidades. Diseñamos una
              estrategia energética para tu espacio, consumo y objetivos.
            </p>
          </div>

          <Solutions />

          <div className="consulting-banner">
            <div className="consulting-copy">
              <span className="mini-kicker">
                <Sparkles size={15} aria-hidden="true" /> Consultoría energética
              </span>
              <h3>Estrategia para la gran industria.</h3>
              <p>
                Te acompañamos en la compra de energía eléctrica dentro del
                Mercado Eléctrico Mayorista de México.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Hablar con un asesor <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="consulting-visual" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="energy-core">
                <Zap size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="container">
          <div className="section-heading process-heading">
            <p className="section-kicker">Cómo lo hacemos · Proyecto llave en mano</p>
            <h2>De tu recibo de luz a un sistema produciendo energía.</h2>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <article className="process-card" key={item.step}>
                <div className="process-step">
                  <span>{item.step}</span>
                  {index < process.length - 1 && <i aria-hidden="true" />}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Financing />

      <section className="cta-section" id="contacto">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-sun" aria-hidden="true" />
            <div className="cta-content">
              <p>Es momento de producir tu propia energía.</p>
              <h2>Cuéntanos sobre tu proyecto.</h2>
              <span>
                Analizamos tus necesidades y te ayudamos a encontrar el mejor
                camino para comenzar a ahorrar.
              </span>
            </div>
            <div className="cta-actions">
              <a
                className="button button-light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar asesoría
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="phone-link" href="tel:+524421040693">
                <Phone size={17} aria-hidden="true" /> 442 104 0693
              </a>
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:hola@be-exen.com"><Mail aria-hidden="true" size={22} /><span><small>Escríbenos</small>hola@be-exen.com</span></a>
            <a href="https://www.instagram.com/panelesbeexen/" target="_blank" rel="noopener noreferrer"><Camera aria-hidden="true" size={22} /><span><small>Instagram</small>@panelesbeexen</span></a>
            <a href="https://www.facebook.com/share/1Z14KDDHeG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><UsersRound aria-hidden="true" size={22} /><span><small>Facebook</small>Paneles Solares</span></a>
          </div>
        </div>
      </section>

      <Location />

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandLogo className="footer-logo" />
            <p>
              Soluciones energéticas para hogares, comercios e industria en
              México.
            </p>
          </div>
          <div className="footer-column">
            <strong>Navegación</strong>
            <a href="#nosotros">Quiénes somos</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#proceso">Cómo lo hacemos</a>
            <a href="#financiamiento">Financiamiento FIDE</a>
          </div>
          <div className="footer-column">
            <strong>Contacto</strong>
            <a href="tel:+524421040693">442 104 0693</a>
            <a href="mailto:hola@be-exen.com">hola@be-exen.com</a>
            <a href="#ubicacion">Querétaro, México</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} BE Excellent Energy</span>
          <span>Ingeniería · Energía · Futuro</span>
        </div>
      </footer>
    </main>
  );
}
