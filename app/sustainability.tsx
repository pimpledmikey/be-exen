import { Leaf, PiggyBank } from "lucide-react";

// Compromiso publicado por BE ExEn en la página «Nosotros» de su sitio
// anterior: dos metas y cinco Objetivos de Desarrollo Sostenible de la ONU.
const goals = [
  { icon: PiggyBank, text: "Ayudarte a generar tu propia energía y reducir el costo de tu recibo de CFE." },
  { icon: Leaf, text: "Ayudar al planeta a reducir la contaminación y las emisiones de gases de efecto invernadero." },
];

const objectives = [
  { number: 7, title: "Energía asequible y no contaminante", text: "Es nuestra razón de ser. Participamos en proyectos que generan electricidad para hogares y para pequeñas, medianas y grandes empresas, reduciendo sus emisiones de CO₂." },
  { number: 9, title: "Industria, innovación e infraestructura", text: "Desarrollamos proyectos para que los procesos industriales sean más eficientes y autosustentables, y acercamos a la industria a programas de financiamiento." },
  { number: 11, title: "Ciudades y comunidades sostenibles", text: "Con energía renovable en hogares e industrias sumamos a la sostenibilidad de las comunidades y ciudades." },
  { number: 12, title: "Producción y consumo responsables", text: "Proponemos esquemas de ahorro y de consumo de energías renovables a partir de lo que cada hogar e industria necesita." },
  { number: 13, title: "Acción por el clima", text: "Sustituir la energía generada con combustibles fósiles por energía solar es una acción positiva para mitigar el cambio climático." },
];

export function Sustainability() {
  return (
    <section className="section sustainability-section" id="sostenibilidad" aria-labelledby="sustainability-title">
      <div className="container sustainability-grid">
        <div className="sustainability-copy">
          <p className="section-kicker">Sostenibilidad</p>
          <h2 id="sustainability-title">Ahorras tú, gana el planeta.</h2>
          <p>
            En BE ExEn trabajamos con dos metas. Al mismo tiempo que reduces lo
            que pagas de electricidad, ayudas a frenar el calentamiento global.
          </p>
          <ul className="goal-list">
            {goals.map(({ icon: Icon, text }) => (
              <li key={text}>
                <span>
                  <Icon size={22} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="ods-intro">
            Nuestra estrategia está alineada con los Objetivos de Desarrollo
            Sostenible (ODS) de la ONU:
          </p>
          <ul className="ods-grid">
            {objectives.map((objective) => (
              <li className="ods-card" key={objective.number}>
                <p className="ods-number">ODS {objective.number}</p>
                <h3>{objective.title}</h3>
                <p>{objective.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
