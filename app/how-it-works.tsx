import { Cpu, Gauge, House, Sun } from "lucide-react";

// Explicación tomada de la página «Residencial» del sitio anterior de BE ExEn.
const steps = [
  { icon: Sun, title: "Paneles solares", text: "Convierten la luz del sol en energía eléctrica." },
  { icon: Cpu, title: "Inversor", text: "Transforma la corriente directa en corriente alterna, lista para usarse." },
  { icon: House, title: "Tu consumo", text: "Tu casa o negocio aprovecha primero la energía que produce." },
  { icon: Gauge, title: "Medidor bidireccional", text: "Contabiliza la energía sobrante y la abona a tu favor para que la uses después, por ejemplo de noche." },
];

export function HowItWorks() {
  return (
    <div className="energy-flow">
      <div className="energy-flow-heading">
        <div>
          <p className="section-kicker">Cómo funciona</p>
          <h3>Del sol a tu recibo, sin complicaciones.</h3>
        </div>
        <p>Así trabaja un sistema solar interconectado a la red de CFE.</p>
      </div>
      <ol>
        {steps.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <span className="flow-icon">
              <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
