# Gobierno y ciclo de trabajo

## Decisiones

Las decisiones se registran en el pull request: problema, alternativa elegida, impacto en contenido, accesibilidad y despliegue. La persona propietaria del portafolio aprueba cualquier dato personal que vaya a hacerse público.

## Ramas y revisiones

- `main`: versión publicable.
- `feature/*`: cambios funcionales o de contenido.
- `fix/*`: correcciones acotadas.
- Ningún agente fusiona su propio cambio sin una revisión de contenido o técnica.

## Matriz RACI

| Actividad | Codex | Claude | Antigravity | Titular |
|---|---|---|---|---|
| Arquitectura y pruebas | R | C | C | A |
| Redacción y veracidad | C | R | C | A |
| Marca y responsive | C | C | R | A |
| Datos personales | I | I | I | R/A |
| Publicación | R | C | C | A |

R: responsable; A: aprueba; C: consultado; I: informado.

## Versionado del contenido

Cada actualización de experiencia, curso o proyecto debe modificar `updatedAt` en `content/profile.json`, regenerar el PDF y registrar qué afirmaciones fueron verificadas.
