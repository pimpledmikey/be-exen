import { ArrowUpRight, FileText, ListChecks, FolderOpen, FolderCheck, BadgeCheck, PanelsTopLeft, ReceiptText } from "lucide-react";

const steps = [
  { icon: FileText, title: "Solicitas información", text: "Te pones en contacto con BE ExEn." },
  { icon: ListChecks, title: "Conoces los requisitos", text: "BE ExEn te comparte lo necesario para iniciar." },
  { icon: FolderOpen, title: "Entregas documentos", text: "Reúnes y entregas tu documentación a BE ExEn." },
  { icon: FolderCheck, title: "Integramos el expediente", text: "BE ExEn prepara y presenta tu proyecto." },
  { icon: BadgeCheck, title: "FIDE evalúa y autoriza", text: "El proyecto pasa por la revisión de FIDE." },
  { icon: PanelsTopLeft, title: "Instalamos tu sistema", text: "BE ExEn instala los paneles solares y FIDE supervisa." },
  { icon: ReceiptText, title: "Pagas en tu recibo", text: "Cubres el financiamiento a través de tu recibo de CFE." },
];

export function Financing() {
  return (
    <section className="section financing-section" id="financiamiento">
      <div className="container">
        <div className="financing-intro">
          <div>
            <p className="section-kicker">Financiamiento FIDE</p>
            <h2>El siguiente paso de tu negocio puede ser solar.</h2>
            <p>Con Eco-Crédito Empresarial, las micro, pequeñas y medianas empresas con tarifas PDBT, GDMTO y GDBT pueden financiar equipos e instalación para usar la energía de forma más eficiente.</p>
            <a className="button button-primary" href="https://wa.me/524421040693?text=Hola%20BE%20ExEn%2C%20quiero%20conocer%20los%20requisitos%20del%20financiamiento%20FIDE%20para%20mi%20negocio." target="_blank" rel="noopener noreferrer">Conocer los requisitos <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="finance-terms">
            <div className="finance-identity"><img src="/allies/fide.png" alt="FIDE, Fideicomiso para el Ahorro de Energía Eléctrica" width="180" height="90" loading="lazy" /><span>Eco-Crédito<br /><strong>Empresarial</strong></span></div>
            <dl>
              <div><dt>Plazo de pago</dt><dd>Hasta <strong>60 meses</strong></dd></div>
              <div><dt>Tasa de interés fija*</dt><dd><strong>13%</strong></dd></div>
              <div><dt>Forma de pago</dt><dd>En tu recibo de <strong>CFE</strong></dd></div>
              <div><dt>Tu ahorro</dt><dd>Ayuda a <strong>pagar tu crédito</strong></dd></div>
            </dl>
            <p className="finance-note">*Tasa publicada por FIDE para julio–septiembre de 2026. Financiamiento sujeto a evaluación, autorización y condiciones vigentes. Confirma enganche, comisiones y tasa aplicables a tu proyecto.</p>
            <a className="text-link" href="https://www.ecocreditoempresarial.com/" target="_blank" rel="noopener noreferrer">Consultar el programa oficial <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="finance-process">
          <p className="section-kicker">Así te acompañamos</p>
          <h3>De la solicitud a tu primer ahorro.</h3>
          <ol>
            {steps.map(({ icon: Icon, title, text }, index) => <li key={title}><div className="finance-step-icon"><Icon size={28} strokeWidth={1.6} aria-hidden="true" /><span>{index + 1}</span></div><h4>{title}</h4><p>{text}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
