# Solución · Proyecto 01 · Operador de logs (Linux)

## Solución

Problema real: el servicio falla al conectar a la DB por **error de autenticación**.

Evidencia típica en el log:

- `ERROR api[db] connection failed: password authentication failed for user "app" ...`
- y luego el impacto: `checkout failed ...` + request con `status=500`

Causa probable (realista): se rotó/actualizó `DB_PASSWORD` y la app quedó con una credencial vieja (o se desplegó config incorrecta).

## Cómo lo encontrás (una forma posible)

```bash
cd /home/leonel/clawd/proyecto-devops-educativo/projects/01-linux-logs

tail -n 80 assets/service.log

grep -n "ERROR" assets/service.log | tail -n 10
```

## Ejemplo de `report.md`

```md
# Reporte incidente · Checkout API

## Error observado
- 2026-01-21T20:16:03.644Z ERROR api[db] connection failed: password authentication failed for user "app" host=db.prod.internal

## Causa probable
- Se rotó el secreto de DB (`DB_PASSWORD`) y la app quedó desactualizada (o levantó config vieja).

## Mitigación inmediata
- Reinyectar el secret correcto y reiniciar el servicio, o rollback al último deploy estable.

## Fix permanente
- Rotación de secrets coordinada + alertas por fallos de auth + runbook.
```

## Puntos clave

- Señal vs ruido: aunque haya warnings/retries, el `password authentication failed` es la señal.
- Pista de operación: `secret rotation detected secret=DB_PASSWORD` cambia la interpretación.
- Mitigación ≠ fix: reiniciar/rollback recupera; el fix es proceso/config/alertas.

Errores comunes:

- Decir “red/DB caída” sin citar el error exacto.
- Proponer “reiniciar y listo” como solución permanente.
- No pegar evidencia del log en `Error observado`.
