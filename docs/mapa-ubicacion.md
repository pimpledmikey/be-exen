# Ubicación y aliados — 14 de septiembre de 2026

## Implementación
- Los nueve aliados son visibles fuera del desplegable, con sus imágenes originales.
- Mapa amplio y tarjeta verde de contacto: flotante en escritorio y debajo en móvil.
- MapLibre GL JS 5.6.0 con OpenFreeMap Dark por defecto, sin clave.
- Tonos verdes, marcador con el logo, zoom, centrado y perspectiva; se conserva la atribución.
- MapTiler es opcional: NEXT_PUBLIC_MAPTILER_KEY selecciona su estilo oscuro al compilar. Utilizar una clave pública limitada a los dominios del sitio.
- Respaldo de Google Maps ante error inicial, sin pedir geolocalización del visitante.

## Ubicación confirmada por el propietario
Enlace recibido: https://maps.app.goo.gl/MHv3N4QpdnAY1JMYA

El enlace redirige a Calle Rosa de Castilla 8, 76137 Santa María Magdalena, Querétaro.
Coordenadas del punto: latitud 20.5936388; longitud -100.4586914.
Se usan los campos !3d/!4d del punto de Google Maps, no las coordenadas @ del centro de cámara.
Esta dirección sustituye la antigua Av. del Roble 3 de la web anterior.
La tarjeta, el mapa de respaldo, el marcador y Cómo llegar usan la ubicación confirmada.

## Configuración
No se necesita una cuenta o clave para el proveedor por defecto.
Para elegir MapTiler, configurar NEXT_PUBLIC_MAPTILER_KEY en Hostinger y volver a compilar.
Las coordenadas están en app/location.tsx y en el respaldo de public/maps/be-exen.html; ya no se necesitan variables de latitud/longitud.

## Verificación
La compilación y comprobación de esta revisión se documentan en el PR #2.
Validar escritorio/móvil, centrado, perspectiva, navegación a Google Maps y respaldo.
La configuración del dominio y purga de caché pertenecen a Hostinger.

## Fuentes
- Ubicación proporcionada directamente por el propietario.
- https://openfreemap.org/quick_start/
- https://maplibre.org/maplibre-gl-js/docs/examples/custom-marker-icons/
- https://docs.maptiler.com/sdk-js/api/map-styles/
