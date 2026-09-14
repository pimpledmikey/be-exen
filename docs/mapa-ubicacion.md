# Ubicación y aliados — 14 de septiembre de 2026

## Cambios
- Aliados visibles fuera del desplegable; se conservan los nueve archivos originales.
- Mapa de ancho completo, tarjeta de contacto flotante en escritorio y debajo en móvil.
- MapLibre GL JS 5.6.0 cargado solo en el iframe del mapa cuando existe configuración válida.
- Estilo oscuro de MapTiler con tonos verdes, marcador del logo, controles de zoom, centrado y perspectiva.
- Sin coordenadas inventadas, solicitudes de geolocalización del visitante ni geocodificación automática.
- Si falta configuración o falla la carga inicial, se conserva el mapa de Google basado en la dirección existente.
- No se añaden dependencias npm ni se modifica el lockfile.

## Activar MapLibre en Hostinger
Configurar antes de compilar:
- NEXT_PUBLIC_MAPTILER_KEY: clave pública de mapas de MapTiler.
- NEXT_PUBLIC_OFFICE_LATITUDE: latitud decimal confirmada de la oficina.
- NEXT_PUBLIC_OFFICE_LONGITUDE: longitud decimal confirmada de la oficina.

La clave es visible en el navegador por diseño. Usar una clave para mapas del navegador, con dominios autorizados para be-exen.com y staging.be-exen.com; nunca una credencial privada de administración. Revisar plan/cuotas de MapTiler.
Volver a compilar tras configurar variables: Next.js prerenderiza esta página.

La dirección conservada es Av. del Roble 3, Álamos 2a Sección, 76160 Santiago de Querétaro. El propietario debe confirmar el pin exacto antes de configurar las coordenadas.
Sin estos tres valores el nuevo diseño ya funciona, pero su cartografía sigue siendo Google Maps.

## Verificación
Revisión de integración de componentes, conservación de archivos, enlaces, validación de coordenadas y sintaxis del JavaScript del mapa.
El entorno de ejecución local no estaba disponible para compilar Next.js o inspeccionar el navegador en esta sesión.
Antes de publicar: ejecutar npm ci y npm run build, revisar móvil/escritorio y probar mapa configurado, sin clave, clave inválida y WebGL no disponible.
Verificar el pin con el propietario. La publicación del dominio y limpieza de caché se realizan en Hostinger.

## Referencias
- https://maplibre.org/maplibre-gl-js/docs/examples/custom-marker-icons/
- https://docs.maptiler.com/sdk-js/api/map-styles/
