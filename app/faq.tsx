import { ArrowUpRight, Plus } from "lucide-react";

import { whatsappUrl } from "./company";
import { faqs } from "./faq-data";

const questionUrl = whatsappUrl("Hola BE Excellent Energy, tengo una pregunta sobre paneles solares.");

// <details> nativo: las respuestas quedan en el HTML (útil para buscadores)
// y el acordeón funciona sin JavaScript.
export function Faq() {
  return (
    <section className="section faq-section" id="preguntas" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="faq-intro">
          <p className="section-kicker">Preguntas frecuentes</p>
          <h2 id="faq-title">Lo que más nos preguntan.</h2>
          <p>
            Si tu duda no está aquí, escríbenos. Te respondemos con gusto y sin
            compromiso.
          </p>
          <a className="text-link" href={questionUrl} target="_blank" rel="noopener noreferrer">
            Hacer otra pregunta <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} name="preguntas-frecuentes" open={index === 0}>
              <summary>
                <h3>{faq.question}</h3>
                <Plus size={22} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
