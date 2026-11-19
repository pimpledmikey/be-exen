# Despliegue en Hostinger

El sitio se publica de dos formas a partir del mismo código. Ambos sitios están
en la cuenta de hosting `u322888101` (plan Business).

| Sitio | Tipo | Qué se publica |
| --- | --- | --- |
| `staging.be-exen.com` | Aplicación Node.js (Next.js) | La rama `main`, compilada por Hostinger con `npm run build`; hoy no se puede actualizar (ver más abajo) |
| `be-exen.com` | Archivos estáticos | La rama `sitio-estatico`: el `out/` de `npm run build:static`, que GitHub Actions actualiza con cada push a `main` |

## Publicación automática con Git

Hostinger publica be-exen.com solo, con cada push, cuando GitHub está conectado
en hPanel (Sitios web → Administrar → Avanzado → Git). Con la conexión hecha, se
activa una vez con la operación `hosting_deploy` del conector de Hostinger:
`type: static`, rama `sitio-estatico`.

El Git clásico de hPanel (clonar un repositorio público en una carpeta) no sirve
para la raíz de be-exen.com. Solo clona en carpetas vacías, y Hostinger conserva
el `.htaccess` al vaciar `public_html`.

## Publicar a mano

Mientras GitHub no esté conectado, se publica con el conector de Hostinger:

1. Comprimir en un `.zip` el contenido de la rama `sitio-estatico`, sin `.git`.
   Subirlo a una rama temporal del repositorio.
2. Clonar esa rama con `hosting_git_deploy-website-repository` en una carpeta
   que no exista de `public_html`, por ejemplo `paquete`.
3. Ejecutar `hosting_websites_deploy-static-site-archive` con la ruta del `.zip`.
   Reemplaza todo `public_html` por el sitio en unos segundos, y el `.htaccess`
   del paquete sustituye al anterior.
4. Borrar la rama temporal y limpiar la caché con `hosting_cache_clear`.


## Producción: be-exen.com

- `public_html` contiene solo el sitio.
- `out/.htaccess`, generado por `scripts/write-htaccess.mjs`:
  - sirve la página 404 del sitio;
  - mantiene las reglas de caché;
  - redirige `www.be-exen.com` a `be-exen.com`;
  - redirige las URLs del sitio anterior (`deploy/legacy-redirects.json`);
  - bloquea cualquier `.php` y la carpeta `.git`, porque el sitio no tiene
    código de servidor.
- `out/_next/static/.htaccess`: caché larga para los archivos con hash.

### Comprobaciones

- `https://be-exen.com/` y `/aviso-de-privacidad/` muestran el sitio.
- `/aviso-de-privacidad` añade la barra final.
- `/residencial/` redirige a `/#soluciones`.
- `/no-existe` muestra la página 404 del sitio.
- `/wp-login.php` responde 403.

Las reglas se probaron en un Apache 2.4 local y en el servidor de Hostinger
(LiteSpeed con su CDN).

## Staging: staging.be-exen.com

Hostinger compila staging en su propio servidor, que tiene una versión de glibc
anterior a la 2.29:

- Next.js 16.3 y posteriores ya no compilan ahí: su compilador pide glibc 2.30.
- La serie 16.2 sí compila, pero tiene vulnerabilidades críticas sin corregir,
  incluida la 16.2.12.

Por eso staging sigue con la compilación de septiembre de 2026 (Next.js 16.2.6).
La compilación del 18 de noviembre con `main` falló por esa razón. Producción no
tiene el problema: se compila en GitHub Actions.

Responde con `X-Robots-Tag: noindex, nofollow` para no competir en buscadores
con el dominio principal.

## Sitios retirados (18 de noviembre de 2026)

Se retiraron WordPress y la plataforma (`plataforma.be-exen.com`). Antes, BE
ExEn descargó una copia de seguridad de Hostinger con los archivos y las bases
de datos. El código de la plataforma está en `github.com/JosueRecoba/BE_ExEn`.

Se borró:

- el subdominio `plataforma.be-exen.com`;
- todo lo que había en `public_html`: WordPress, la plataforma, `demo/`,
  `bedigital/` y un respaldo de WordPress de 2023;
- la base de datos `u322888101_Rf5pe`, que compartían WordPress y la plataforma.

Se conservó `u322888101_beexenty_inv`. No es de ninguno de los dos: acepta
conexiones remotas, así que la usa otra aplicación.

Queda pendiente borrar en hPanel (be-exen.com → Avanzado → Git) estos
repositorios:

- `JosueRecoba/BE_ExEn`, que apuntaba a `public_html/plataforma`. Un push a ese
  repositorio volvería a clonar la plataforma en `public_html`, aunque sus `.php`
  no se ejecutarían.
- Las entradas `sitio` y `paquete`, que quedaron de la migración.
