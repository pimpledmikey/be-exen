export type ProjectType = {
  id: "residencial" | "comercial" | "industrial" | "hibrido";
  name: string;
  description: string;
  heading: string;
  detail: string;
  scope: string[];
  contactUrl: string;
  caseStudy: {
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    results: string[];
  } | null;
};

// Incorporar únicamente proyectos y resultados reales autorizados por BE ExEn.
// El documento de mejoras no incluye fotografías ni fichas de casos de éxito.
const contact = (type: string) => `https://wa.me/524421040693?text=${encodeURIComponent(`Hola BE Excellent Energy, me interesa una solución ${type}. ¿Pueden compartirme un caso de éxito similar a mi proyecto?`)}`;

export const projectTypes: ProjectType[] = [
  { id: "residencial", name: "Residencial", description: "Convierte el sol en ahorro para tu hogar con un sistema diseñado alrededor de tu consumo real.", heading: "Tu hogar, con energía del sol.", detail: "Analizamos tu recibo y el espacio disponible para dimensionar un sistema solar que se adapte a tu casa y a la forma en que consumes electricidad.", scope: ["Sistemas interconectados y aislados", "Diseño según tu consumo", "Instalación, gestión y acompañamiento"], contactUrl: contact("residencial"), caseStudy: null },
  { id: "comercial", name: "Comercial", description: "Reduce costos operativos y mejora la eficiencia energética de tu negocio con una solución escalable.", heading: "Más energía para hacer crecer tu negocio.", detail: "Evaluamos tus horarios de operación y tu demanda de energía para aprovechar la generación solar durante la actividad de tu negocio.", scope: ["Soluciones para comercios y servicios", "Diseño, instalación y monitoreo", "Asesoría sobre financiamiento FIDE"], contactUrl: contact("comercial"), caseStudy: null },
  { id: "industrial", name: "Industrial", description: "Ingeniería para proyectos de mayor demanda, con acompañamiento técnico de principio a fin.", heading: "Ingeniería a la escala de tu operación.", detail: "Integramos la generación solar a la estrategia energética de tu empresa, considerando las condiciones del sitio y las necesidades de tu operación.", scope: ["Proyectos llave en mano", "Ingeniería y gestión de interconexión", "Consultoría energética para la industria"], contactUrl: contact("industrial"), caseStudy: null },
  { id: "hibrido", name: "Sistemas híbridos", description: "Combina paneles solares, almacenamiento y conexión a la red para gestionar mejor tu energía.", heading: "Genera, almacena y aprovecha tu energía.", detail: "Diseñamos la combinación de paneles, inversor y baterías según tu consumo y los equipos que necesitas respaldar. La autonomía depende de la capacidad y las cargas seleccionadas.", scope: ["Generación solar y almacenamiento", "Respaldo para cargas seleccionadas", "Configuración según tus necesidades"], contactUrl: contact("híbrida con baterías"), caseStudy: null },
];
