"use client";

import { useState, type KeyboardEvent } from "react";
import { Dialog } from "radix-ui";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import { whatsappUrl } from "./company";

type Category = "industrial" | "comercial" | "residencial";

type Photo = {
  id: string;
  category: Category;
  client: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

// Fotografías de instalaciones reales de BE ExEn, tomadas de la sección
// «Casos de éxito» de su sitio anterior. Agregar aquí los proyectos nuevos.
const photos: Photo[] = [
  { id: "euro-te-cubierta", category: "industrial", client: "Euro Te", caption: "Paneles sobre la cubierta de la nave", alt: "Filas de paneles solares instaladas sobre la cubierta de la nave industrial de Euro Te", width: 1280, height: 720 },
  { id: "hotel-matian", category: "comercial", client: "Hotel Boutique Matian", caption: "Sistema solar en la azotea del hotel", alt: "Paneles solares en la azotea del Hotel Boutique Matian, rodeada de árboles y buganvilias", width: 1200, height: 1600 },
  { id: "residencial-terraza", category: "residencial", client: "Proyecto residencial", caption: "Arreglo en azotea con vista a la ciudad", alt: "Paneles solares sobre estructura inclinada en la azotea blanca de una casa", width: 1280, height: 960 },
  { id: "euro-te-nave", category: "industrial", client: "Euro Te", caption: "Vista general del arreglo fotovoltaico", alt: "Vista general de los paneles solares sobre el techo de lámina de la nave de Euro Te", width: 1119, height: 565 },
  { id: "residencial-tejado", category: "residencial", client: "Proyecto residencial", caption: "Cubierta completa de paneles", alt: "Techo de una casa cubierto por completo con paneles solares", width: 1280, height: 960 },
  { id: "residencial-ladera", category: "residencial", client: "Proyecto residencial", caption: "Estructura elevada sobre la terraza", alt: "Paneles solares montados sobre una estructura elevada en una casa en la ladera", width: 1280, height: 850 },
  { id: "euro-te-inversores", category: "industrial", client: "Euro Te", caption: "Banco de inversores y tableros", alt: "Cuatro inversores y tableros eléctricos montados en el muro interior de la nave", width: 1019, height: 755 },
  { id: "residencial-azotea", category: "residencial", client: "Proyecto residencial", caption: "Paneles sobre estructura en azotea", alt: "Dos filas de paneles solares sobre estructuras de aluminio en una azotea", width: 1280, height: 1031 },
];

const categoryLabels: Record<Category, string> = {
  industrial: "Industrial",
  comercial: "Comercial",
  residencial: "Residencial",
};

const filters: Array<{ id: "todos" | Category; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "industrial", label: "Industrial" },
  { id: "comercial", label: "Comercial" },
  { id: "residencial", label: "Residencial" },
];

const quoteUrl = whatsappUrl(
  "Hola BE Excellent Energy, vi sus proyectos en el sitio web y quiero cotizar el mío.",
);

export function ProjectsGallery() {
  const [filter, setFilter] = useState<"todos" | Category>("todos");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = filter === "todos" ? photos : photos.filter((photo) => photo.category === filter);
  const openIndex = visible.findIndex((photo) => photo.id === openId);
  const current = openIndex >= 0 ? visible[openIndex] : null;

  const step = (offset: number) => {
    if (openIndex < 0) return;
    const next = (openIndex + offset + visible.length) % visible.length;
    setOpenId(visible[next].id);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  return (
    <>
      <div className="projects-toolbar" role="group" aria-label="Filtrar proyectos por tipo">
        {filters.map((item) => {
          const count = item.id === "todos" ? photos.length : photos.filter((photo) => photo.category === item.id).length;
          return (
            <button
              key={item.id}
              type="button"
              className="filter-chip"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span aria-hidden="true">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="projects-grid">
        {visible.map((photo) => (
          <li key={photo.id}>
            <button
              type="button"
              className="project-tile"
              onClick={() => setOpenId(photo.id)}
              aria-label={`Ampliar foto: ${photo.client}, ${photo.caption}`}
            >
              <img
                src={`/projects/${photo.id}-640.webp`}
                srcSet={`/projects/${photo.id}-640.webp 640w, /projects/${photo.id}.webp ${photo.width}w`}
                sizes="(max-width: 600px) 100vw, (max-width: 1040px) 50vw, 380px"
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />
              <span className="project-tile-caption">
                <strong>{photo.client}</strong>
                <span>
                  {categoryLabels[photo.category]} · {photo.caption}
                </span>
              </span>
              <span className="project-tile-expand" aria-hidden="true">
                <Expand size={18} />
              </span>
            </button>
          </li>
        ))}
        <li>
          <a className="project-cta-tile" href={quoteUrl} target="_blank" rel="noopener noreferrer">
            <strong>¿El siguiente proyecto es el tuyo?</strong>
            <span>
              Cotiza por WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>

      <Dialog.Root open={current !== null} onOpenChange={(open) => !open && setOpenId(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="lightbox-overlay" />
          <Dialog.Content className="lightbox" onKeyDown={onKeyDown}>
            {current && (
              <>
                <div className="lightbox-stage">
                  <img
                    key={current.id}
                    src={`/projects/${current.id}.webp`}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                  />
                </div>
                <div className="lightbox-caption">
                  <Dialog.Title>{current.client}</Dialog.Title>
                  <Dialog.Description>
                    {categoryLabels[current.category]} · {current.caption} · {openIndex + 1} de {visible.length}
                  </Dialog.Description>
                </div>
                {visible.length > 1 && (
                  <>
                    <button type="button" className="lightbox-button lightbox-prev" onClick={() => step(-1)} aria-label="Foto anterior">
                      <ChevronLeft size={24} aria-hidden="true" />
                    </button>
                    <button type="button" className="lightbox-button lightbox-next" onClick={() => step(1)} aria-label="Foto siguiente">
                      <ChevronRight size={24} aria-hidden="true" />
                    </button>
                  </>
                )}
              </>
            )}
            <Dialog.Close className="lightbox-button lightbox-close" aria-label="Cerrar">
              <X size={22} aria-hidden="true" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
