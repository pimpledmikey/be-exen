# Revisión del sitio — septiembre de 2026

Implementación del documento **Mejoras_para_la_pagina_web_v1.docx**.

| Solicitud | Resultado |
| --- | --- |
| 1. Recorrido | Después de la portada: Quiénes somos → Soluciones → Cómo lo hacemos → Financiamiento → Contacto → Ubicación. Menús alineados. |
| 2 y 4. Casos de éxito por tipo | Selector accesible para residencial, comercial, industrial e híbrido. Preparado para mostrar la ficha correspondiente; faltan los casos reales. |
| 3. Sistemas híbridos | Cuarta solución con generación, almacenamiento y respaldo de cargas seleccionadas. |
| 5 y 6. Posicionamiento y descripción | Incorporados en el resumen de Quiénes somos. |
| 7 y 8. Misión y visión | Textos completos en Más sobre nosotros. |
| 9. Aliados | Nueve logos locales, con fuentes documentadas en fuentes-logos.json. |
| 10. FIDE | Sección con tarifas elegibles, pago en recibo CFE, hasta 60 meses, ahorro y tasa vigente publicada. Ver diferencias abajo. |
| 11. Proceso FIDE | Siete pasos de la referencia, adaptados a escritorio y móvil. |
| 12. Movimiento | Una sola franja animada con Diseño a la medida, Gestión ante CFE y Monitoreo. Pausa manual y respeto a movimiento reducido. |
| 13. Color | Tono oscuro de la interfaz sustituido por #272B00, preservando la identidad de los logos. |
| 14. Marcos | Eliminados los bordes blancos de la foto principal, insignia de experiencia y distintivo de la foto secundaria. |
| Contacto y Maps | hola@be-exen.com, Instagram @panelesbeexen, Facebook del documento y mapa con dirección del sitio anterior. |

## Contenido pendiente

**Casos de éxito:** el documento y la web anterior no contienen fichas verificables para cada categoría. `app/projects.ts` mantiene `caseStudy: null`; la página muestra el detalle de la solución y permite pedir un proyecto similar por WhatsApp. No se presentan imágenes genéricas ni cifras inventadas como trabajos de BE ExEn.

Para completar cada ficha se necesita título o cliente autorizado, tipo de proyecto, fotografía, descripción y resultados confirmados (por ejemplo, capacidad instalada y ahorro medido). Basta rellenar `caseStudy` en la categoría correspondiente para que el selector presente ese caso.

**Condiciones FIDE:** la propuesta pide TIIE + 5 puntos, 0% de enganche y 0% de apertura. El programa oficial publica **13% fijo para julio–septiembre de 2026**. Se muestra esa tasa con su periodo y enlace; enganche y comisiones quedan sujetos a confirmación, sin anunciar porcentajes no verificados. Los ahorros ayudan a cubrir el crédito; no se garantiza que siempre cubran el pago completo.

Fuentes consultadas el 10 de septiembre de 2026:

- https://www.ecocreditoempresarial.com/ — aviso del tercer trimestre de 2026 y requisitos.
- https://www.fide.org.mx/ecocredito/ — tarifas PDBT, GDBT y GDMTO, tasa y plazo.
- https://www.fide.org.mx/?page_id=52643 — promocionales oficiales actualizados el 1 de septiembre de 2026, tasa fija del 13%.
- https://be-exen.com/ — dirección Av. del Roble 3, Álamos 2a Sección, 76160 Santiago de Querétaro y teléfono conservado.

## Entrega técnica

El proyecto Sites conserva su identidad y dependencias. La exportación para GitHub/Hostinger usa Next.js con las dependencias de los componentes accesibles de pestañas y contenido ampliable; su configuración se conserva en `deploy/hostinger/`. En GitHub estos dos archivos se colocan en la raíz.

La modificación se prepara en una rama para revisión. No cambia el dominio, DNS ni la instalación WordPress existente. No se ha solicitado publicación de esta revisión en este turno.
