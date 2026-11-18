# Despliegue en Hostinger

El sitio se publica de dos formas a partir del mismo código. Ambos sitios están
en la cuenta de hosting `u322888101`.

| Sitio | Tipo | Cómo se compila |
| --- | --- | --- |
| `staging.be-exen.com` | Aplicación Node.js (Next.js) | `npm run build` (lo hace Hostinger) |
| `be-exen.com` | Archivos estáticos | `npm run build:static` (en local, genera `out/`) |

## Staging: staging.be-exen.com

- Configuración de compilación en Hostinger: Node.js 22, Next.js, salida `.next`,
  script `build`, npm.
- No tiene despliegue automático: cada versión se compila a mano, desde `main`
  en GitHub o subiendo un `.zip` del código (`git archive`).
- Responde con `X-Robots-Tag: noindex, nofollow` para no competir en buscadores
  con el dominio principal.

## Producción: be-exen.com

`be-exen.com` es el dominio principal de la cuenta. Su carpeta `public_html`
también contiene `plataforma/`, la carpeta de `plataforma.be-exen.com`, y los
archivos de WordPress. Por eso no se publica como aplicación Node.js: eso
reemplazaría todo el contenido de la carpeta. Se publica la versión estática
encima, sin borrar nada:

1. `npm run build:static` genera `out/` con el sitio y dos `.htaccess`:
   - `out/.htaccess`: redirige las URLs del sitio anterior, sirve la página
     404, bloquea el panel y los scripts PHP de WordPress y mantiene las reglas
     de caché que había. Solo actúa sobre `be-exen.com`: los subdominios y
     `/plataforma/` siguen igual.
   - `out/_next/static/.htaccess`: caché larga para los archivos con hash.
2. Subir el contenido de `out/` a `public_html`, sobrescribiendo solo esos
   archivos. El `.htaccess` va al final: hasta ese momento sigue respondiendo
   WordPress.
3. Limpiar la caché del servidor y del CDN de Hostinger.
4. Comprobar: el inicio, `/aviso-de-privacidad/`, una URL vieja
   (`/residencial/` → `/#soluciones`), `/wp-login.php` (403) y
   `plataforma.be-exen.com`.

Las reglas se probaron en un Apache 2.4 local con la misma estructura de
carpetas (LiteSpeed, el servidor de Hostinger, es compatible con ellas).

## Volver a WordPress

Los archivos y la base de datos de WordPress no se borran. Para volver basta con
restaurar su `.htaccess`:

1. Subir `deploy/wordpress.htaccess` como `public_html/.htaccess`. Es la copia
   exacta del que tenía el sitio el 17 de noviembre de 2026.
2. Limpiar la caché de Hostinger.

Con ese `.htaccess`, el servidor vuelve a dar prioridad a `index.php` y los
archivos del sitio nuevo quedan sin uso.
