import { ArrowUpRight, MapPin, MessageCircle, Navigation } from "lucide-react";

const address = "Calle Rosa de Castilla 8, 76137 Santa María Magdalena, Querétaro.";
const directions = "https://www.google.com/maps/dir/?api=1&destination=" + "20.5936388,-100.4586914";

export function Location() {
  // These values are public map configuration, never server credentials.
  const key = process.env.NEXT_PUBLIC_MAPTILER_KEY?.trim() || "";
  // Pin supplied by the owner: https://maps.app.goo.gl/MHv3N4QpdnAY1JMYA
  const params = new URLSearchParams({ key, lat: "20.5936388", lng: "-100.4586914" }).toString();
  return (
    <section className="section location-section location-redesign" id="ubicacion" aria-labelledby="location-title">
      <div className="container">
        <div className="location-heading">
          <div>
            <p className="section-kicker">Aquí empieza tu próximo proyecto</p>
            <h2 id="location-title">Conectemos tu idea<br />con nueva energía.</h2>
          </div>
          <p>Conversemos sobre lo que necesitas. Nuestro equipo te acompaña a encontrar la solución para tu hogar o negocio.</p>
        </div>
        <div className="location-stage">
          <iframe className="location-map" title="Mapa de ubicación de BE Excellent Energy" src={"/maps/be-exen.html" + (params ? "#" + params : "")} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div className="location-card">
            <img className="location-brand" src="/brand/be-exen-logo.svg" alt="BE Excellent Energy" width="220" height="82" loading="lazy" />
            <p className="location-city">Querétaro, México</p>
            <h3>Estamos cerca de ti.</h3>
            <address><MapPin size={21} aria-hidden="true" /><span>{address}</span></address>
            <a className="button button-primary" href={directions} target="_blank" rel="noopener noreferrer"><Navigation size={18} aria-hidden="true" /> Cómo llegar <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="location-whatsapp" href="https://wa.me/524421040693?text=Hola%20BE%20ExEn%2C%20quisiera%20coordinar%20una%20visita%20para%20platicar%20sobre%20mi%20proyecto." target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Coordinar una visita por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
