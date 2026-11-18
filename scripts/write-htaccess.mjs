// Genera los .htaccess de la versión estática (out/) que se publica en
// be-exen.com, un hosting compartido de Hostinger con LiteSpeed (compatible
// con las reglas de Apache). Se ejecuta con `npm run build:static`.
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

const htaccess = `# BE Excellent Energy: versión estática del sitio (Next.js export).
# Generado por scripts/write-htaccess.mjs; no editar a mano.
#
# Reemplaza al .htaccess de WordPress. Los archivos de WordPress siguen en el
# servidor pero ya no se sirven. Cómo volver atrás: docs/despliegue.md.

ErrorDocument 404 /404.html

# Caché del navegador: las mismas reglas que tenía WordPress (también aplican
# a las carpetas vecinas), salvo el HTML, que se revalida siempre para que los
# cambios del sitio se vean al momento.
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

# Solo aplica a be-exen.com: los subdominios (como plataforma.be-exen.com)
# conservan su comportamiento.
RewriteCond %{HTTP_HOST} !^(www\\.)?be-exen\\.com$ [NC]
RewriteRule ^ - [L]

RewriteRule ^plataforma(/|$) - [L]
RewriteRule ^\\.well-known/ - [L]

# WordPress queda retirado: su panel y sus scripts PHP no responden.
RewriteRule ^(wp-admin|wp-includes)(/|$) - [F,L]
RewriteRule ^wp-content/.*\\.php$ - [F,L]
RewriteRule ^(index|xmlrpc|wp-[a-z-]+)\\.php$ - [F,L]

# URLs del sitio anterior.
${redirectRules}

# Inicio: index.html y no el index.php de WordPress. Las demás páginas son
# carpeta/index.html (trailingSlash en next.config.ts) y el servidor las
# sirve directamente, añadiendo la barra final si falta.
RewriteRule ^$ /index.html [L]
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
