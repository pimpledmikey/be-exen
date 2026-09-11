const allies = [
  { name: "Comisión Federal de Electricidad (CFE)", file: "cfe.png" },
  { name: "FIDE — Fideicomiso para el Ahorro de Energía Eléctrica", file: "fide.png" },
  { name: "CIBanco", file: "cibanco.png" },
  { name: "BBVA", file: "bbva.png" },
  { name: "redgirasol", file: "redgirasol.jpg" },
  { name: "COPARMEX Querétaro", file: "coparmex-queretaro.png" },
  { name: "ASOLMEX — Asociación Mexicana de Energía Solar", file: "asolmex.png", className: "ally-asolmex" },
  { name: "SunPower from Maxeon Solar Technologies", file: "sunpower-maxeon.jpg", className: "ally-trim-square" },
  { name: "LONGi Solar", file: "longi-solar.jpg", className: "ally-trim-wide" },
];

export function Allies() {
  return (
    <section className="allies-section" aria-labelledby="allies-title">
      <div className="allies-heading"><p className="section-kicker">Principales aliados</p><h3 id="allies-title">Vínculos que nos fortalecen.</h3></div>
      <ul className="allies-grid">
        {allies.map(ally => <li className="ally" key={ally.name}><img src={`/allies/${ally.file}`} alt={ally.name} className={ally.className} loading="lazy" width="240" height="120" /></li>)}
      </ul>
    </section>
  );
}
