// Genera los .htaccess de la versión estática que se publica en be-exen.com,
// un hosting compartido de Hostinger con LiteSpeed (compatible con las reglas
// de Apache). Se ejecuta con `npm run build:static`.
//
// - deploy/public_html.htaccess: el .htaccess de public_html. Sirve el
//   dominio desde public_html/sitio/, la carpeta donde Hostinger clona con Git
//   la rama sitio-estatico. No viaja por Git: cuando cambia se copia a mano al
//   servidor (docs/despliegue.md).
// - out/_next/static/.htaccess: caché larga para los archivos con hash.
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const redirects = JSON.parse(
  await readFile(new URL("deploy/legacy-redirects.json", root), "utf8"),
);

// Carpeta de public_html donde Hostinger clona la rama sitio-estatico.
const siteDir = "sitio";

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

const publicHtml = `# be-exen.com: .htaccess de public_html.
# Generado por scripts/write-htaccess.mjs; no editar a mano. No viaja por Git:
# cuando cambia se copia a public_html/.htaccess (docs/despliegue.md).
#
# El sitio está en public_html/${siteDir}/, donde Hostinger clona con Git la rama
# sitio-estatico. Estas reglas lo sirven en la raíz del dominio; los
# subdominios y public_html/plataforma no cambian.

ErrorDocument 404 /${siteDir}/404.html

# Caché del navegador: las mismas reglas que tenía el sitio anterior (también
# aplican a las carpetas vecinas), salvo el HTML, que se revalida siempre para
# que los cambios del sitio se vean al momento.
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

# Solo be-exen.com: los subdominios (como plataforma.be-exen.com) siguen igual.
RewriteCond %{HTTP_HOST} !^(www\\.)?be-exen\\.com$ [NC]
RewriteRule ^ - [L]

RewriteRule ^plataforma(/|$) - [L]
RewriteRule ^\\.well-known/ - [L]

# Los datos de Git de la copia publicada nunca se sirven.
RewriteRule (^|/)\\.git(/|$) - [F,L]

# /${siteDir}/ no es una dirección pública: redirige a la raíz.
RewriteCond %{THE_REQUEST} \\s/+${siteDir}[/?\\s]
RewriteRule ^${siteDir}/?(.*)$ /$1 [R=301,L]
RewriteRule ^${siteDir}/ - [L]

# URLs del sitio anterior (WordPress).
${redirectRules}

# Carpetas sin barra final: la barra se añade en la dirección pública.
RewriteCond %{DOCUMENT_ROOT}/${siteDir}/$1 -d
RewriteRule ^(.*[^/])$ /$1/ [R=301,L]

# Todo lo demás sale de public_html/${siteDir}/; lo que no existe ahí recibe la
# página 404 del sitio. El resto de public_html, incluido lo que quede de
# WordPress, deja de ser accesible desde el dominio.
RewriteRule ^(.*)$ /${siteDir}/$1 [L]
</IfModule>
`;

// Los archivos de _next/static llevan un hash en el nombre: pueden guardarse
// en caché un año sin riesgo de servir versiones viejas.
const staticCache = `<IfModule mod_headers.c>
Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>
`;

await writeFile(new URL("deploy/public_html.htaccess", root), publicHtml);
await writeFile(new URL("out/_next/static/.htaccess", root), staticCache);
console.log(
  `deploy/public_html.htaccess: ${redirects.length} redirecciones del sitio anterior`,
);
