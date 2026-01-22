# PRODUCT.md · DevOps con proyectos reales

## Objetivo

Crear un producto educativo para gente que quiere aprender DevOps pero no tiene proyectos reales.
La prioridad es **práctica directa**: proyectos realistas + entregables + soluciones.

## Público

- Principiantes sin proyectos reales
- Gente que quiere “hacer” en vez de leer teoría

## Principios

- Cero humo: todo lo que se publica debe estar **probado**.
- Simplicidad: iterar sin abrumar.
- Consistencia: cada proyecto repite el mismo formato base.

## Qué incluye (MVP)

- Una web simple (landing + catálogo + detalle básico).
- Un conjunto de labs en carpeta `projects/`.
- Cada proyecto tiene:
  - `README.md` (brief + pasos)
  - `assets/` (material realista: logs/configs)
  - `solution.md` (solución + explicación)
  - `scripts/` (helpers como `verify.sh`)

## Qué NO incluye (por ahora)

- Ejecución “dentro” de la web (sandboxes, terminal embebida, backends).
- Infra de usuarios/login.

## Estructura del repo (workspace)

- `web/` → sitio React (Vite)
- `projects/` → labs
  - `projects/01-linux-logs/` (primero)

## Reglas de trabajo

- Evitar outputs gigantes para no gastar tokens (no `ls -R`).
- Cambios en pasos pequeños y visibles.
- Si la sesión crece mucho: abrir sesión nueva y usar este archivo como fuente de verdad.

## Guía de soluciones

- Las soluciones deben ser cortas, concretas y sin relleno.
- En la web, cada proyecto debería definir:
  - `practice` (qué vas a practicar)
  - `tools` (herramientas)
  - `nextSteps` (primeros pasos)
- Orden preferido en `solution.md`:
  - `Solución`
  - `Cómo lo encontrás`
  - `Ejemplo de report.md`
  - `Puntos clave` (pistas + errores comunes + enseñanza/por qué)
- Evitar paréntesis en títulos (no agregan valor).
- `Puntos clave` y `Errores comunes` en bullets, sin frases innecesarias.
