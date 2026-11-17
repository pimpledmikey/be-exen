"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Building2, Factory, House } from "lucide-react";

import { formatNumber } from "@/lib/format";
import { whatsappUrl } from "./company";

// Supuestos de la calculadora. Son valores de referencia para una primera
// estimación; conviene que ingeniería de BE ExEn los valide o ajuste.
const PEAK_SUN_HOURS = 5.7; // horas solares pico promedio en Querétaro
const SYSTEM_EFFICIENCY = 0.78; // pérdidas por temperatura, inversor y cableado
const PANEL_WATTS = 550;
const PANEL_AREA_M2 = 2.6;
const DAYS_PER_MONTH = 30.4;
const LARGE_SYSTEM_KWP = 500;

type ProjectType = "residencial" | "comercial" | "industrial";
type Period = "bimestral" | "mensual";

const projectTypes: Record<
  ProjectType,
  { label: string; icon: typeof House; period: Period; consumption: number; min: number; max: number; step: number }
> = {
  residencial: { label: "Hogar", icon: House, period: "bimestral", consumption: 800, min: 100, max: 5000, step: 50 },
  comercial: { label: "Negocio", icon: Building2, period: "mensual", consumption: 3000, min: 500, max: 50000, step: 250 },
  industrial: { label: "Industria", icon: Factory, period: "mensual", consumption: 40000, min: 5000, max: 500000, step: 5000 },
};

const periodLabels: Record<Period, string> = {
  bimestral: "kWh por bimestre",
  mensual: "kWh por mes",
};

function estimate(consumption: number, period: Period) {
  const monthly = period === "bimestral" ? consumption / 2 : consumption;
  const dailyYieldPerKwp = PEAK_SUN_HOURS * SYSTEM_EFFICIENCY;
  const neededKwp = monthly / DAYS_PER_MONTH / dailyYieldPerKwp;
  const panels = Math.max(1, Math.ceil((neededKwp * 1000) / PANEL_WATTS));
  const kwp = (panels * PANEL_WATTS) / 1000;
  return {
    panels,
    kwp,
    monthlyGeneration: kwp * dailyYieldPerKwp * DAYS_PER_MONTH,
    area: panels * PANEL_AREA_M2,
  };
}

export function Estimator() {
  const id = useId();
  const [type, setType] = useState<ProjectType>("residencial");
  const [period, setPeriod] = useState<Period>(projectTypes.residencial.period);
  const [input, setInput] = useState(String(projectTypes.residencial.consumption));

  const config = projectTypes[type];
  const consumption = Number(input);
  const valid = Number.isFinite(consumption) && consumption > 0;
  const result = valid ? estimate(consumption, period) : null;

  const chooseType = (next: ProjectType) => {
    setType(next);
    setPeriod(projectTypes[next].period);
    setInput(String(projectTypes[next].consumption));
  };

  const message = result
    ? `Hola BE Excellent Energy, usé la calculadora del sitio web. Proyecto: ${config.label.toLowerCase()}. Consumo: ${formatNumber(consumption)} ${periodLabels[period]}. Estimación: ${formatNumber(result.panels)} paneles (${formatNumber(result.kwp, 1)} kWp). ¿Me ayudan con una propuesta?`
    : "Hola BE Excellent Energy, quiero cotizar un sistema solar.";

  return (
    <div className="estimator-grid">
      <form className="estimator-form" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend>¿Dónde quieres instalar paneles?</legend>
          <div className="type-options">
            {(Object.keys(projectTypes) as ProjectType[]).map((key) => {
              const Icon = projectTypes[key].icon;
              return (
                <label className="type-option" key={key}>
                  <input type="radio" name={`${id}-type`} value={key} checked={type === key} onChange={() => chooseType(key)} />
                  <span>
                    <Icon size={20} aria-hidden="true" />
                    {projectTypes[key].label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="estimator-label" htmlFor={`${id}-consumption`}>
          ¿Cuánta energía consumes?
        </label>
        <div className="consumption-row">
          <input
            id={`${id}-consumption`}
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-describedby={`${id}-help`}
          />
          <select value={period} onChange={(event) => setPeriod(event.target.value as Period)} aria-label="Periodo del consumo">
            <option value="bimestral">{periodLabels.bimestral}</option>
            <option value="mensual">{periodLabels.mensual}</option>
          </select>
        </div>
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={valid ? Math.min(config.max, Math.max(config.min, consumption)) : config.min}
          onChange={(event) => setInput(event.target.value)}
          aria-label="Ajustar consumo"
        />
        <p className="estimator-help" id={`${id}-help`}>
          Lo encuentras en tu recibo de CFE, en el apartado de consumo en kWh.
        </p>
      </form>

      <div className="estimator-result" aria-live="polite">
        <p className="section-kicker">Tu sistema estimado</p>
        {result ? (
          <>
            <p className="estimator-main">
              {formatNumber(result.panels)}
              <small>{result.panels === 1 ? "panel solar" : "paneles solares"}</small>
            </p>
            <dl>
              <div>
                <dt>Potencia</dt>
                <dd>{formatNumber(result.kwp, result.kwp < 100 ? 1 : 0)} kWp</dd>
              </div>
              <div>
                <dt>Generación al mes</dt>
                <dd>≈ {formatNumber(Math.round(result.monthlyGeneration))} kWh</dd>
              </div>
              <div>
                <dt>Superficie de paneles</dt>
                <dd>≈ {formatNumber(Math.round(result.area))} m²</dd>
              </div>
            </dl>
            {result.kwp > LARGE_SYSTEM_KWP && (
              <p className="estimator-scale">
                Un proyecto de esta escala se diseña a la medida; platiquemos tu caso.
              </p>
            )}
          </>
        ) : (
          <p className="estimator-empty">Escribe tu consumo para ver la estimación.</p>
        )}
        <a className="button button-primary" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
          Pedir mi propuesta por WhatsApp
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <p className="estimator-disclaimer">
        Estimación preliminar para cubrir el 100% del consumo indicado, con {PEAK_SUN_HOURS} horas solares
        pico (referencia para Querétaro), {Math.round(SYSTEM_EFFICIENCY * 100)}% de eficiencia del sistema y
        paneles de {PANEL_WATTS} W. La propuesta final depende de tu tarifa, ubicación, orientación y espacio
        disponible.
      </p>
    </div>
  );
}
