import type { NextConfig } from "next";

import legacyRedirects from "./deploy/legacy-redirects.json";

// El mismo sitio se publica de dos formas:
// - Servidor Node.js (staging.be-exen.com): `npm run build`.
// - Archivos estáticos (be-exen.com, hosting compartido): `npm run build:static`,
//   que genera out/ con su .htaccess. Ahí las redirecciones las hace el
//   servidor web (scripts/write-htaccess.mjs), no Next.js.
const isStaticExport = process.env.STATIC_EXPORT === "1";

// URLs del sitio anterior (WordPress) → secciones equivalentes del sitio nuevo.
const redirects = legacyRedirects as Array<[source: string, destination: string]>;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // URLs con barra final, como las tenía WordPress (/aviso-de-privacidad/).
  // En la versión estática cada página queda como carpeta/index.html.
  trailingSlash: true,
  // El sitio usa <img> directamente: se desactiva el optimizador de imágenes
  // de Next.js, que no hace falta y añade superficie de ataque.
  images: { unoptimized: true },
  ...(isStaticExport
    ? { output: "export" as const }
    : {
        async redirects() {
          return redirects.map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
          }));
        },
        async headers() {
          return [
            {
              // El entorno de pruebas no debe aparecer en buscadores.
              source: "/:path*",
              has: [{ type: "host", value: "staging.be-exen.com" }],
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ];
        },
      }),
};

export default nextConfig;
