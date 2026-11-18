// Genera los .htaccess de la versión estática que se publica en be-exen.com,
// un hosting compartido de Hostinger con LiteSpeed (compatible con las reglas
// de Apache). Se ejecuta con `npm run build:static` y los deja en out/, que se
// publica tal cual en public_html (docs/despliegue.md).
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const redirects = JSON.parse(
  await readFile(new URL("deploy/legacy-redirects.json", root), "utf8"),
);

const escapeRegex = (value) => value.replace(/[.+?^${}()|[\]\\]/g, "\\$&");

// Convierte una ruta de Next.js ("/blog", "/2021/:path*", "/x.xml") en el
// patrón de RewriteRule equivalente, aceptando la barra final de WordPress.
function toPattern(source) {
  const path = source.replace(/^\//, "");
  if (path.endsWith("/:path*")) {
    return `^${escapeRegex(path.slice(0, -"/:path*".length))}(/.*)?$`;
  }
  if (/\.[a-z]+$/i.test(path)) return `^${escapeRegex(path)}$`;
  return `^${escapeRegex(path)}/?$`;
}

const redirectRules = redirects
  .map(([source, destination]) => `RewriteRule ${toPattern(source)} ${destination} [R=301,L,NE]`)
  .join("\n");

const htaccess = `# BE Excellent Energy (be-exen.com): sitio estático (Next.js export).
# Generado por scripts/write-htaccess.mjs; no editar a mano.

ErrorDocument 404 /404.html
ErrorDocument 403 /404.html
DirectoryIndex index.html

# Caché del navegador: las mismas reglas que tenía el sitio anterior, salvo el
# HTML, que se revalida siempre para que los cambios se vean al momento.
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
ExpiresByType image/x-icon "access plus 1 year"
ExpiresDefault "access plus 1 weeks"
ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# El sitio no tiene código de servidor: ningún archivo .php se ejecuta (ni
# restos de WordPress o de la plataforma retirada) y los datos de Git no se
# sirven.
RewriteRule \\.php$ - [F,L]
RewriteRule (^|/)\\.git(/|$) - [F,L]

# URLs del sitio anterior (WordPress).
${redirectRules}
</IfModule>
`;

// Los archivos de _next/static llevan un hash en el nombre: pueden guardarse
// en caché un año sin riesgo de servir versiones viejas.
const staticCache = `<IfModule mod_headers.c>
Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>
`;

await writeFile(new URL("out/.htaccess", root), htaccess);
await writeFile(new URL("out/_next/static/.htaccess", root), staticCache);
console.log(`out/.htaccess: ${redirects.length} redirecciones del sitio anterior`);
