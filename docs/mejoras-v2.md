# Revisión del sitio — noviembre de 2026

Segunda ronda de mejoras y preparación para reemplazar el WordPress de
`be-exen.com` por este sitio. Todo el contenido nuevo sobre la empresa viene de
lo que BE ExEn ya publicaba en su sitio anterior; no hay cifras ni casos
inventados.

## Secciones nuevas

| Sección | Qué muestra | Fuente |
| --- | --- | --- |
| Impacto (`#impacto`) | 6.06 MW en operación, +27 mil t de CO₂, +637 mil árboles y +11,250 vehículos (equivalencias) | Inicio y Clientes del sitio anterior («6,060,000 Watts en operación», «Unidades equivalentes») |
| Proyectos (`#proyectos`) | Galería con filtro y vista ampliada: Euro Te, Hotel Boutique Matian y cuatro proyectos residenciales | Fotos de «Casos de éxito» del sitio anterior |
| Clientes | 25 logos | Imagen «Nuestros clientes» del sitio anterior, separada en logos individuales |
| Cómo funciona | Paneles → inversor → consumo → medidor bidireccional | Página Residencial del sitio anterior |
| Calculadora (`#calculadora`) | Paneles, potencia, generación y superficie estimados a partir del consumo; envía el resultado por WhatsApp | Supuestos en `app/estimator.tsx` |
| Sostenibilidad (`#sostenibilidad`) | Las dos metas de la empresa y los ODS 7, 9, 11, 12 y 13 | Página Nosotros del sitio anterior |
| Preguntas frecuentes (`#preguntas`) | Nueve preguntas | Páginas Residencial y SunPower e infografías del blog |
| Aviso de privacidad | Página `/aviso-de-privacidad` | Aviso del sitio anterior (29 de mayo de 2020) |

También: enlace a LinkedIn, pie de página con más accesos, página 404 propia,
`sitemap.xml`, `robots.txt`, datos estructurados (empresa y preguntas
frecuentes) e icono cuadrado del sitio con el símbolo del logo (`app/icon.svg`,
`app/favicon.ico`, `app/apple-icon.png`).

## Dónde se edita cada cosa

- Teléfono, correo, dirección, redes y cifras de impacto: `app/company.ts`.
- Fotos de proyectos: `app/projects-gallery.tsx` y `public/projects/`.
- Clientes: `app/clients.tsx` y `public/clients/`.
- Preguntas frecuentes: `app/faq-data.ts`.
- Supuestos de la calculadora: constantes al inicio de `app/estimator.tsx`.

## Migración desde WordPress

- **Redirecciones permanentes** en `next.config.ts`: las páginas anteriores
  (`/residencial`, `/comercio`, `/industria`, `/sunpower`, `/nosotros-2nosotros`,
  `/clientes`, `/vinculos`, `/contacto`, `/blog`, entradas `/2021/…` y `/2022/…`)
  llevan a la sección equivalente. `/aviso-de-privacidad` conserva su URL.
- **Google Search Console**: se conserva la etiqueta de verificación del sitio
  anterior en `app/layout.tsx`, para no perder la propiedad al cambiar de sitio.
- **Entorno de pruebas**: `staging.be-exen.com` responde con
  `X-Robots-Tag: noindex` para que no compita con el dominio principal.
- El sitio anterior no tenía Google Analytics ni píxeles; no hay nada que migrar.
- Las cinco entradas del blog no se migraron: tres eran solo una imagen o un
  video. Lo útil de las infografías quedó en las preguntas frecuentes.

## Pendiente de confirmar por BE ExEn

1. **Cifras de impacto**: son las publicadas en 2022. Actualizar si hay un
   corte más reciente.
2. **Calculadora**: usa 5.7 horas solares pico, 78% de eficiencia y paneles de
   550 W. Validar con ingeniería.
3. **Aviso de privacidad**: se migró tal cual, corrigiendo solo las referencias
   al propio sitio (el original apuntaba al dominio de otra empresa). Necesita
   revisión legal: el domicilio del responsable sigue siendo el de 2020
   (Corporativo High Park) y menciona a la autoridad de protección de datos de
   entonces.
4. **Casos con resultados**: las fichas de `app/projects.ts` siguen en
   `caseStudy: null`. Con capacidad instalada y ahorro medido de un proyecto se
   puede publicar un caso completo.
5. **Notaría 31 Querétaro** aparecía como caso comercial, pero su única foto era
   el retrato de una persona; no se incluyó.
6. **Facebook**: el sitio anterior enlazaba a `facebook.com/BEExcellentEnergy` y
   este usa el enlace compartido del documento de mejoras v1. Confirmar cuál es
   la página vigente.

## Verificación

`npm run lint` sin errores y `npm run build` correcto. Revisado en escritorio y
en móvil (375 px): navegación, filtro y vista ampliada de la galería,
calculadora, acordeón de preguntas, aviso de privacidad, página 404 y
redirecciones.
