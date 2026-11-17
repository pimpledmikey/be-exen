import type { NextConfig } from "next";

// URLs del sitio anterior (WordPress) → secciones equivalentes del sitio nuevo.
// Evita enlaces rotos y conserva el posicionamiento al reemplazar WordPress.
const legacyRedirects: Array<[source: string, destination: string]> = [
  ["/residencial", "/#soluciones"],
  ["/comercio", "/#soluciones"],
  ["/industria", "/#soluciones"],
  ["/sunpower", "/#soluciones"],
  ["/nosotros-2nosotros", "/#nosotros"],
  ["/clientes", "/#proyectos"],
  ["/vinculos", "/#nosotros"],
  ["/contacto", "/#contacto"],
  ["/blog", "/"],
  ["/2021/:path*", "/"],
  ["/2022/:path*", "/"],
  ["/category/:path*", "/"],
  ["/author/:path*", "/"],
  ["/feed", "/"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/post-sitemap.xml", "/sitemap.xml"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
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
};

export default nextConfig;
