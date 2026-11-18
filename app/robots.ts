import type { MetadataRoute } from "next";

import { siteUrl } from "./company";

// Se genera al compilar (necesario también para la exportación estática).
export const dynamic = "force-static";

// El entorno de pruebas se excluye de buscadores con la cabecera
// X-Robots-Tag definida en next.config.ts, no desde este archivo.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
