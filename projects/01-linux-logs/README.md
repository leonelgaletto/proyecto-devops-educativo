# Proyecto 01 · Operador de logs (Linux)

Este proyecto es **práctica directa**: vas a leer un log realista, encontrar el problema, y entregar un reporte corto como lo harías en un trabajo.

## Qué vas a practicar

- Leer logs con criterio (no “buscar palabras al azar”)
- Encontrar el error principal y su contexto
- Proponer mitigación inmediata + fix permanente
- Escribir un reporte claro

## Tiempo estimado

30–45 minutos.

## Requisitos

- Linux o macOS (o WSL)
- Tener `bash`
- Comandos básicos: `grep`, `tail`, `sed` (vienen en casi todos lados)

## El material

- Log: `assets/service.log`
- Tu entrega: `report.md` (lo vas a crear vos)

## Tu misión (Brief)

Estás on-call. Un servicio empezó a fallar. Tenés que:

1) Encontrar **el último error real** en el log.
2) Escribir la **causa probable** en 1 frase.
3) Proponer:
   - una **mitigación inmediata** (para apagar el incendio)
   - un **fix permanente** (para que no vuelva)

## Entregable (formato exacto)

Creá un archivo `report.md` en esta misma carpeta y copiá este formato tal cual.

> Regla importante: en `Error observado` pegá 1–2 líneas exactas del log (evidencia), no solo una opinión.

```md
# Reporte incidente · Checkout API

## Error observado
- (pegá acá 1–2 líneas exactas del log)

## Causa probable
- (1 frase)

## Mitigación inmediata
- (1 acción para apagar el incendio hoy)

## Fix permanente
- (1 acción para que no vuelva)
```

No tiene que ser largo. **4–8 líneas** está perfecto.

## Cómo arrancar (sin pensar demasiado)

Desde esta carpeta:

```bash
# Entrá al proyecto
cd /home/leonel/clawd/proyecto-devops-educativo/projects/01-linux-logs

# Mirá el final del log
tail -n 40 assets/service.log

# Buscá errores (pista)
grep -n "ERROR" -n assets/service.log | tail -n 5
```

Tip: el error importante suele tener líneas alrededor (contexto). Probá:

```bash
# Ejemplo: ver 3 líneas antes y después de una línea X
sed -n '120,135p' assets/service.log
```

## Verificación automática (opcional)

Cuando escribas `report.md`, podés validar que tenga el formato mínimo:

```bash
bash scripts/verify.sh
```

## Solución

Cuando estés listo, mirá `solution.md`.
