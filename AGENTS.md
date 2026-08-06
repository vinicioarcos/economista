# Gobierno del proyecto

Este repositorio contiene un portafolio profesional para estudiantes y recién graduados de Economía. Codex, Claude y Antigravity deben leer este archivo antes de modificar el proyecto.

## Objetivo

Construir una landing pública, rápida y accesible para concursos, prácticas, empleo, becas y colaboraciones académicas. La web y la hoja de vida deben contar la misma historia profesional.

## Fuente de verdad

- `content/profile.json`: datos personales, experiencia, proyectos y enlaces.
- `app/page.tsx`: presentación web de esos datos.
- `scripts/generate_cv.py`: composición del PDF.
- `public/downloads/hoja-de-vida-economista.pdf`: hoja de vida publicada.

Nunca inventar títulos, cargos, publicaciones, certificaciones, fechas, métricas ni afiliaciones. Los datos de demostración deben conservar la etiqueta `demo: true` hasta ser sustituidos y verificados.

## Flujo obligatorio

1. Leer `content/profile.json` y `docs/CONTENT_INTAKE.md`.
2. Identificar datos faltantes o contradictorios. Preguntar solo lo que afecte la veracidad.
3. Actualizar primero la fuente de verdad; después la web y el PDF.
4. Generar el PDF con `python3 scripts/generate_cv.py`.
5. Verificar navegación, descarga, responsive, contraste, foco y texto alternativo.
6. Ejecutar las validaciones disponibles antes de solicitar revisión.

## Reparto entre agentes

- **Codex - Integración:** arquitectura, implementación, pruebas, accesibilidad y cierre del cambio.
- **Claude - Contenido:** claridad, narrativa profesional, consistencia del CV y revisión de afirmaciones.
- **Antigravity - Dirección visual:** sistema de marca, jerarquía, composición, imagen y control responsive.

Un agente no debe borrar o rehacer cambios válidos de otro sin explicar el conflicto. Los cambios amplios se dividen en una rama por objetivo y se integran mediante pull request.

## Límites de calidad

- Sin secretos, datos sensibles, números de identificación ni domicilio exacto.
- El correo, teléfono y enlaces solo se publican con aprobación del titular.
- Toda fotografía generada debe marcarse como demostración y reemplazarse por una foto real antes del uso profesional.
- No usar porcentajes de dominio de habilidades ni barras de progreso arbitrarias.
- El PDF debe ser seleccionable, imprimible y legible por sistemas de reclutamiento.
- Preservar `.openai/hosting.json`, los scripts del entorno y la compatibilidad del despliegue existente.

## Definición de terminado

El cambio está terminado cuando la página carga sin errores, todos los anclajes funcionan, el PDF se descarga, no existen datos inventados presentados como reales, la versión móvil es usable y la integración continua pasa.
