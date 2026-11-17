// Datos de la empresa en un solo lugar: contacto, redes y cifras publicadas.
// Si cambia un teléfono, una dirección o una cifra, se actualiza aquí.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://be-exen.com"
).replace(/\/$/, "");

export const site = {
  name: "BE Excellent Energy",
  shortName: "BE ExEn",
  legalName: "BE Excellent Energy S.A. de C.V.",
  phoneDisplay: "442 104 0693",
  phoneHref: "tel:+524421040693",
  phoneE164: "+524421040693",
  whatsappNumber: "524421040693",
  email: "hola@be-exen.com",
  address: {
    street: "Calle Rosa de Castilla 8",
    neighborhood: "Santa María Magdalena",
    postalCode: "76137",
    city: "Querétaro",
    region: "Querétaro",
    country: "MX",
  },
  geo: { latitude: 20.5936388, longitude: -100.4586914 },
  social: {
    instagram: "https://www.instagram.com/panelesbeexen/",
    facebook: "https://www.facebook.com/share/1Z14KDDHeG/?mibextid=wwXIfr",
    linkedin: "https://www.linkedin.com/company/be-excellent-energy/",
  },
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ImpactFigure = {
  value: number;
  decimals: number;
  prefix: string;
  unit: string;
  label: string;
  /** Valor leído por lectores de pantalla (la etiqueta va aparte). */
  spoken: string;
};

// Cifras publicadas por BE ExEn en su sitio anterior (be-exen.com, 2022):
// «6,060,000 Watts en operación» y «Para la sociedad · Unidades equivalentes».
// Actualizar aquí cuando la empresa tenga un corte más reciente.
export const impactFigures: ImpactFigure[] = [
  {
    value: 6.06,
    decimals: 2,
    prefix: "",
    unit: "MW",
    label: "de potencia fotovoltaica en operación",
    spoken: "6.06 megawatts",
  },
  {
    value: 27,
    decimals: 0,
    prefix: "+",
    unit: "mil",
    label: "toneladas de CO₂ no emitidas",
    spoken: "Más de 27 mil",
  },
  {
    value: 637,
    decimals: 0,
    prefix: "+",
    unit: "mil",
    label: "árboles plantados, en equivalencia",
    spoken: "Más de 637 mil",
  },
  {
    value: 11250,
    decimals: 0,
    prefix: "+",
    unit: "",
    label: "vehículos fuera de circulación, en equivalencia",
    spoken: "Más de 11,250",
  },
];
