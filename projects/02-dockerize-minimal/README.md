# Proyecto 02 · Dockerizá una app mínima

Este proyecto es práctica directa: vas a crear una imagen Docker para una app mínima, correrla, y verificar que responde.

## Qué vas a practicar

- Crear un `Dockerfile` simple y entendible
- Build y run de contenedores
- Exponer puertos y entender el “adentro vs afuera”

## Tiempo estimado

30–45 minutos.

## Requisitos

- Docker instalado (`docker --version`)
- Terminal

## El material

- App mínima: `app/` (una web estática)
- Tu entrega: `Dockerfile`

## Tu misión (Brief)

Queremos correr una app mínima como contenedor.

1) Construí una imagen llamada `devops-hello`.
2) Corré un contenedor que exponga la app en `http://localhost:8080`.
3) Comprobá que devuelve contenido.

## Entregable

- Un `Dockerfile` en esta carpeta.
- Comandos usados (opcional) en `report.md`.

## Cómo arrancar (pasos mínimos)

```bash
cd /home/leonel/clawd/proyecto-devops-educativo/projects/02-dockerize-minimal

# Ver qué hay
ls

# Tu objetivo es escribir el Dockerfile.
# Cuando lo tengas, lo probás así:

docker build -t devops-hello .

docker run --rm -p 8080:8080 devops-hello
```

Abrí `http://localhost:8080`.

## Verificación automática (opcional)

```bash
bash scripts/verify.sh
```

## Solución

Cuando estés listo, mirá `solution.md`.
