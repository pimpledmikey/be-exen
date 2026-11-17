"use client";

import { useEffect, useRef } from "react";

import { formatNumber } from "@/lib/format";
import { impactFigures } from "./company";

// Cuenta desde cero cuando la cifra entra en pantalla. El HTML del servidor
// ya trae el valor final, así que sin JavaScript se ve la cifra completa.
function Counter({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = formatNumber(value * eased, decimals);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = formatNumber(value, decimals);
    };
  }, [value, decimals]);

  return <span ref={ref}>{formatNumber(value, decimals)}</span>;
}

export function Impact() {
  return (
    <section className="impact-section" id="impacto" aria-labelledby="impact-title">
      <div className="container">
        <div className="impact-heading">
          <div>
            <p className="section-kicker">Nuestro impacto</p>
            <h2 id="impact-title">Energía limpia que ya está trabajando.</h2>
          </div>
          <p>
            Cada sistema que instalamos reduce costos para quien lo usa y
            emisiones para todos. Este es el resultado acumulado de nuestros
            proyectos.
          </p>
        </div>

        <dl className="impact-grid">
          {impactFigures.map((figure) => (
            <div className="impact-item" key={figure.label}>
              <dt>{figure.label}</dt>
              <dd>
                <span className="sr-only">{figure.spoken}</span>
                <span aria-hidden="true">
                  {figure.prefix}
                  <Counter value={figure.value} decimals={figure.decimals} />
                  {figure.unit && <small>{figure.unit}</small>}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="impact-note">
          Equivalencias ambientales publicadas por BE ExEn a partir de los
          sistemas que ha puesto en operación.
        </p>
      </div>
    </section>
  );
}
