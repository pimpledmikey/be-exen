# Despliegue en Hostinger

El sitio se publica de dos formas a partir del mismo código. Ambos sitios están
en la cuenta de hosting `u322888101` (plan Business).

| Sitio | Tipo | Cómo se publica |
| --- | --- | --- |
| `staging.be-exen.com` | Aplicación Node.js (Next.js) | Hostinger compila `main` con `npm run build` |
| `be-exen.com` | Archivos estáticos | GitHub Actions compila `npm run build:static` y guarda `out/` en la rama `sitio-estatico`; Hostinger la clona con Git en `public_html/sitio/` |

## Staging: staging.be-exen.com

- Configuración de compilación: Node.js 22, Next.js, salida `.next`, script
  `build`, npm.
- Compila la rama `main` de GitHub. Necesita GitHub conectado en hPanel
  (Sitios web → staging.be-exen.com → Desplegar desde Git); con la conexión
  activa, cada push a `main` lo vuelve a compilar.
- Responde con `X-Robots-Tag: noindex, nofollow` para no competir en buscadores
  con el dominio principal.

## Producción: be-exen.com

`public_html` de be-exen.com no es solo del sitio: también contiene
`plataforma/`, la carpeta de `plataforma.be-exen.com`, otra aplicación que se
publica con Git desde su propio repositorio. Por eso:

- **En hPanel no se usan "Desplegar desde Git" ni "Sube los archivos de tu sitio
  web" en be-exen.com, ni se borra ese sitio**: reemplazan o borran todo
  `public_html`, plataforma incluida.
- La base de datos `u322888101_Rf5pe`, que era la de WordPress, también la usa
  plataforma: no se borra.

Cómo está montado:

- `public_html/sitio/`: copia de la rama `sitio-estatico` (el contenido de
  `out/`), clonada con el Git de Hostinger (hPanel → be-exen.com → Avanzado →
  Git).
- `public_html/.htaccess`: copia de `deploy/public_html.htaccess`, que genera
  `npm run build:static`. Sirve el dominio desde `sitio/`, redirige las URLs del
  sitio anterior (`deploy/legacy-redirects.json`), no deja ver la carpeta `.git`
  y no afecta a los subdominios ni a `/plataforma/`. No viaja por Git: si cambia
  (solo cambia con las redirecciones), se copia de nuevo a mano.
- `sitio/_next/static/.htaccess`: caché larga para los archivos con hash.

### Publicar una versión nueva

1. Fusionar los cambios en `main`. La acción **Publicar be-exen.com** de GitHub
   Actions compila el sitio y actualiza la rama `sitio-estatico`. También se
   puede lanzar a mano desde la pestaña Actions.
2. Hostinger trae la rama a `public_html/sitio/`:
   - sola, si el repositorio tiene el webhook de despliegue de Hostinger
     (hPanel → be-exen.com → Avanzado → Git muestra la URL);
   - si no, con el botón de desplegar de esa pantalla, o con la operación
     `hosting_git_deploy-website-repository` del conector de Hostinger (rama
     `sitio-estatico`, carpeta `sitio`).
3. Limpiar la caché de Hostinger y comprobar.

### Comprobaciones

- `https://be-exen.com/` y `/aviso-de-privacidad/` muestran el sitio.
- `/aviso-de-privacidad` añade la barra final y `/residencial/` redirige a
  `/#soluciones`.
- `/wp-login.php` da la página 404 del sitio y `/sitio/` redirige a `/`.
- `https://plataforma.be-exen.com/` sigue llevando a `login.php`.

Las reglas se probaron en un Apache 2.4 local con la misma estructura de
carpetas (LiteSpeed, el servidor de Hostinger, es compatible con ellas).

## WordPress retirado

be-exen.com dejó de servir WordPress en noviembre de 2026. Con el `.htaccess`
nuevo ningún archivo suyo es accesible desde el dominio, y sus archivos se
borran de `public_html`: `wp-admin/`, `wp-content/`, `wp-includes/` y los
`.php` de WordPress de la raíz. Las tablas de WordPress siguen dentro de la base
de datos compartida con plataforma.

Mientras sus archivos sigan en el servidor, para volver a WordPress basta con
restaurar su `.htaccess`: `git show e8f8e12:deploy/wordpress.htaccess`.
