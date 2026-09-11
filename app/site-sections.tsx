"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, BatteryCharging, Building2, Check, ChevronDown, Factory, Gauge, House, Leaf, Pause, Play, ShieldCheck } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectTypes } from "./projects";

const icons = { residencial: House, comercial: Building2, industrial: Factory, hibrido: BatteryCharging };
const benefits = [
  { icon: Gauge, title: "Ahorro energético", description: "Genera parte de la energía que consumes y reduce el impacto de futuros incrementos." },
  { icon: ShieldCheck, title: "Inversión respaldada", description: "Ingeniería, instalación y acompañamiento en un mismo equipo especializado." },
  { icon: Leaf, title: "Menos emisiones", description: "Avanza hacia tus objetivos ambientales con energía limpia producida en sitio." },
];

export function AboutDetails({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="about-details">
      <CollapsibleTrigger className="button about-toggle">
        {open ? "Menos sobre nosotros" : "Más sobre nosotros"}
        <ChevronDown size={20} aria-hidden="true" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="about-expanded">
          <div className="purpose-grid">
            <article className="purpose-card">
              <p className="section-kicker">Nuestra misión</p>
              <h3>Energía que responde a tus necesidades.</h3>
              <p>Somos una empresa mexicana con más de 10 años de experiencia que responde a las necesidades energéticas de nuestros clientes, ofreciéndoles soluciones para la autogeneración y el consumo sostenible de la energía eléctrica.</p>
            </article>
            <article className="purpose-card">
              <p className="section-kicker">Nuestra visión</p>
              <h3>Impulsar la transición energética de México.</h3>
              <p>Nuestra visión es contribuir a la transición energética del país, reduciendo las emisiones de CO₂ al medio ambiente y ayudar a mejorar la economía de todos nuestros clientes, ofreciendo servicios de calidad que rebasen sus expectativas.</p>
              <p>Queremos ser más que una empresa instaladora de equipos de energía renovable, buscamos ser un referente en energía renovable en el país innovando constantemente nuestros servicios y productos.</p>
            </article>
          </div>
          <div className="benefit-list">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div className="benefit-item" key={title}>
                <span><Icon size={22} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Solutions() {
  return (
    <Tabs defaultValue="residencial" className="solutions-tabs">
      <TabsList aria-label="Tipo de proyecto" className="solution-grid">
        {projectTypes.map((project, index) => {
          const Icon = icons[project.id];
          return (
            <TabsTrigger key={project.id} value={project.id} className="solution-card">
              <span className="solution-card-top"><span className="solution-icon"><Icon size={24} aria-hidden="true" /></span><span className="solution-number">0{index + 1}</span></span>
              <span className="solution-card-copy"><strong>{project.name}</strong><span>{project.description}</span></span>
              <span className="solution-detail">Conoce esta solución <ChevronDown size={18} aria-hidden="true" /></span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {projectTypes.map(project => (
        <TabsContent key={project.id} value={project.id} className="project-panel">
          {project.caseStudy ? (
            <article className="case-study">
              <img src={project.caseStudy.image} alt={project.caseStudy.imageAlt} loading="lazy" />
              <div>
                <p className="section-kicker">Caso de éxito · {project.name}</p>
                <h3>{project.caseStudy.title}</h3>
                <p>{project.caseStudy.description}</p>
                <ul>{project.caseStudy.results.map(result => <li key={result}><Check size={18} aria-hidden="true" />{result}</li>)}</ul>
                <a className="text-link" href={project.contactUrl} target="_blank" rel="noopener noreferrer">Quiero un proyecto así <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </article>
          ) : (
            <div className="project-description">
              <div><p className="section-kicker">{project.name}</p><h3>{project.heading}</h3><p>{project.detail}</p></div>
              <div className="project-scope"><ul>{project.scope.map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul><a className="text-link" href={project.contactUrl} target="_blank" rel="noopener noreferrer">Conocer un proyecto similar <ArrowRight size={18} aria-hidden="true" /></a></div>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function ServicesMarquee() {
  const [paused, setPaused] = useState(false);
  const items = ["Diseño a la medida", "Gestión ante CFE", "Monitoreo"];
  return (
    <div className={`services-marquee${paused ? " is-paused" : ""}`} aria-label="Ventajas del servicio">
      <div className="marquee-window">
        <div className="marquee-track">
          {[0, 1, 2, 3].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy > 0 ? true : undefined}>{items.map(item => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}</div>)}
        </div>
      </div>
      <button type="button" className="marquee-control" onClick={() => setPaused(!paused)} aria-label={paused ? "Reanudar movimiento" : "Pausar movimiento"} aria-pressed={paused}>{paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}</button>
    </div>
  );
}
