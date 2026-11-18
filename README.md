# BE Excellent Energy

Sitio corporativo de BE Excellent Energy para presentar soluciones de paneles solares, proyectos llave en mano y consultoría energética.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Hostinger

- `staging.be-exen.com`: aplicación Node.js; Hostinger compila `main` con
  `npm run build`.
- `be-exen.com`: versión estática. Con cada cambio en `main`, GitHub Actions
  compila `npm run build:static` y guarda `out/` en la rama `sitio-estatico`,
  que Hostinger clona con Git en `public_html/sitio/`. No se publica en la raíz
  de `public_html` porque ahí también vive `plataforma.be-exen.com`.

Pasos y comprobaciones: `docs/despliegue.md`.

## Contenido

- Inicio con propuesta de valor y llamada a cotización.
- Cifras de impacto, quiénes somos y aliados.
- Soluciones residencial, comercial, industrial e híbrida, y consultoría para el Mercado Eléctrico Mayorista.
- Proyectos reales y clientes.
- Proceso llave en mano y cómo funciona un sistema solar.
- Financiamiento FIDE y calculadora solar.
- Sostenibilidad (ODS), preguntas frecuentes, contacto y ubicación.
- Aviso de privacidad en `/aviso-de-privacidad/`.

Los datos de la empresa (contacto, redes, cifras) se editan en `app/company.ts`.
El detalle de cada revisión está en `docs/`.

## Dominio y buscadores

El sitio asume `https://be-exen.com` como dominio principal (URL canónica,
`sitemap.xml` y datos estructurados). Para otro dominio, define
`NEXT_PUBLIC_SITE_URL` antes de compilar. `staging.be-exen.com` se sirve con
`noindex`. Las URLs del sitio anterior en WordPress se redirigen según
`deploy/legacy-redirects.json`: en staging lo hace `next.config.ts` y en
`be-exen.com` el `.htaccess` de `public_html`.

© BE Excellent Energy
