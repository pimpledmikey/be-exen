# Despliegue en Hostinger

El sitio se publica de dos formas a partir del mismo código, las dos con el Git
de Hostinger. Ambos sitios están en la cuenta de hosting `u322888101` (plan
Business).

| Sitio | Tipo | Cómo se publica |
| --- | --- | --- |
| `staging.be-exen.com` | Aplicación Node.js (Next.js) | Hostinger compila `main` con `npm run build` en cada push |
| `be-exen.com` | Archivos estáticos | GitHub Actions compila `npm run build:static` y guarda `out/` en la rama `sitio-estatico`; Hostinger publica esa rama en `public_html` en cada push |

Los dos usan la conexión con GitHub de hPanel (Sitios web → el sitio →
Desplegar desde Git, o Avanzado → Git).

## Staging: staging.be-exen.com

- Configuración de compilación: Node.js 22, Next.js, salida `.next`, script
  `build`, npm.
- Responde con `X-Robots-Tag: noindex, nofollow` para no competir en buscadores
  con el dominio principal.

## Producción: be-exen.com

- `public_html` contiene solo el sitio: lo que hay en la rama `sitio-estatico`.
  Hostinger reemplaza su contenido en cada despliegue.
- `out/.htaccess`, generado por `scripts/write-htaccess.mjs`:
  - sirve la página 404 del sitio;
  - mantiene las reglas de caché;
  - redirige las URLs del sitio anterior (`deploy/legacy-redirects.json`);
  - bloquea cualquier `.php` y la carpeta `.git`, porque el sitio no tiene
    código de servidor.
- `out/_next/static/.htaccess`: caché larga para los archivos con hash.

### Publicar una versión nueva

1. Fusionar los cambios en `main`.
2. La acción **Publicar be-exen.com** de GitHub Actions compila el sitio y
   actualiza la rama `sitio-estatico`. También se puede lanzar a mano desde la
   pestaña Actions.
3. Hostinger publica la rama sola en `public_html`. Si un cambio no se ve,
   limpiar la caché de Hostinger.

### Comprobaciones

- `https://be-exen.com/` y `/aviso-de-privacidad/` muestran el sitio.
- `/aviso-de-privacidad` añade la barra final.
- `/residencial/` redirige a `/#soluciones`.
- `/no-existe` muestra la página 404 del sitio.
- `/wp-login.php` responde 403.

Las reglas se probaron en un Apache 2.4 local (LiteSpeed, el servidor de
Hostinger, es compatible con ellas).

## Sitios retirados (noviembre de 2026)

Antes de retirarlos se descargó una copia de seguridad de Hostinger con los
archivos y las bases de datos.

- **WordPress**, el sitio anterior de be-exen.com.
- **La plataforma** (`plataforma.be-exen.com`). Su código está en
  `github.com/JosueRecoba/BE_ExEn`. Ocupaba `public_html/plataforma` y
  compartía con WordPress la base de datos `u322888101_Rf5pe`.
  - Se borraron el subdominio y esa base de datos.
  - Queda pendiente borrar su repositorio en hPanel → be-exen.com → Avanzado →
    Git, para que un push a su repositorio no vuelva a clonarla en
    `public_html`. Aun así, sus `.php` no se ejecutarían.

La base de datos `u322888101_beexenty_inv` no es de ninguno de los dos.
Acepta conexiones remotas, así que la usa otra aplicación, y se conserva.
