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

## Despliegue en Hostinger Web Apps

1. En hPanel, abre **Sitios web → Web Apps → Añadir sitio web**.
2. Selecciona **Importar repositorio Git**.
3. Conecta GitHub y elige `pimpledmikey/be-exen`.
4. Hostinger detectará Next.js automáticamente.
5. Configura Node.js 22, ejecuta `npm run build` y usa `npm run start` para iniciar.
6. Revisa la vista previa antes de conectar `be-exen.com`.

## Contenido

- Inicio con propuesta de valor y llamada a cotización.
- Cifras de impacto, quiénes somos y aliados.
- Soluciones residencial, comercial, industrial e híbrida, y consultoría para el Mercado Eléctrico Mayorista.
- Proyectos reales y clientes.
- Proceso llave en mano y cómo funciona un sistema solar.
- Financiamiento FIDE y calculadora solar.
- Sostenibilidad (ODS), preguntas frecuentes, contacto y ubicación.
- Aviso de privacidad en `/aviso-de-privacidad`.

Los datos de la empresa (contacto, redes, cifras) se editan en `app/company.ts`.
El detalle de cada revisión está en `docs/`.

## Dominio y buscadores

El sitio asume `https://be-exen.com` como dominio principal (URL canónica,
`sitemap.xml` y datos estructurados). Para otro dominio, define
`NEXT_PUBLIC_SITE_URL` antes de compilar. `staging.be-exen.com` se sirve con
`noindex`. Las URLs del sitio anterior en WordPress se redirigen desde
`next.config.ts`.

© BE Excellent Energy
