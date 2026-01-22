# Reporte incidente · Checkout API

## Error observado
36:2026-01-21T20:16:03.644Z ERROR api[db] connection failed: password authentication failed for user "app" host=db.prod.internal

37:2026-01-21T20:16:03.651Z ERROR api[checkout] checkout failed: db unavailable cause="auth failed"

## Causa probable
- Es probable que el user "app" haya ingresado mal la password para el host=db.prod.internal

## Mitigación inmediata
- Reintentar con la password modificada, usando la correcta

## Fix permanente
- Guardar la password en variable secreta para evitar que se repita