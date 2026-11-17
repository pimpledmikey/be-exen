// Clientes publicados por BE ExEn en la sección «Nuestros clientes» de su
// sitio anterior. Cada logo vive en public/clients/<archivo>.webp.
const clients = [
  { name: "COEXPAN · EMSUR (Grupo Lantero)", file: "coexpan-emsur" },
  { name: "Expohort", file: "expohort" },
  { name: "Agricultores El Fuerte", file: "agricultores-el-fuerte" },
  { name: "Chipilo", file: "chipilo" },
  { name: "Unifoods", file: "unifoods" },
  { name: "Holiday Inn", file: "holiday-inn" },
  { name: "Hospital Angeles", file: "hospital-angeles" },
  { name: "Leche Querétaro", file: "leche-queretaro" },
  { name: "Innovet", file: "innovet" },
  { name: "Euro Te", file: "euro-te" },
  { name: "Tierratech", file: "tierratech" },
  { name: "Asturiano", file: "asturiano" },
  { name: "Jamón Queso", file: "jamon-queso" },
  { name: "Universidad CNCI", file: "universidad-cnci" },
  { name: "Flor de Alfalfa", file: "flor-de-alfalfa" },
  { name: "Tecnostamp Triulzi Group", file: "tecnostamp-triulzi" },
  { name: "Trico Charcutería", file: "trico" },
  { name: "Hospital San José", file: "hospital-san-jose" },
  { name: "La Gaucha", file: "la-gaucha" },
  { name: "FINCSA", file: "fincsa" },
  { name: "Duplasa", file: "duplasa" },
  { name: "Rheinmetall Automotive", file: "rheinmetall" },
  { name: "EKOhaus", file: "ekohaus" },
  { name: "Vianca", file: "vianca" },
  { name: "PTM", file: "ptm" },
];

export function Clients() {
  return (
    <section className="clients-block" aria-labelledby="clients-title">
      <div className="clients-heading">
        <div>
          <p className="section-kicker">Nuestros clientes</p>
          <h3 id="clients-title">Empresas e instituciones que han confiado en nosotros.</h3>
        </div>
        <p>
          De la industria alimentaria y automotriz a hospitales, hoteles y
          universidades.
        </p>
      </div>
      <ul className="clients-grid">
        {clients.map((client) => (
          <li key={client.file}>
            <img src={`/clients/${client.file}.webp`} alt={client.name} width="240" height="120" loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}
