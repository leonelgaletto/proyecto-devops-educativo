# Solución · Proyecto 02 · Dockerizá una app mínima

## Solución

Un Dockerfile simple puede:

- copiar `app/` dentro de la imagen
- servir esos archivos con un servidor HTTP básico
- exponer el puerto 8080

Ejemplo de `Dockerfile`:

```Dockerfile
FROM python:3.12-alpine

WORKDIR /srv
COPY app/ ./

EXPOSE 8080
CMD ["python", "-m", "http.server", "8080"]
```

## Cómo lo encontrás

- Necesitás un proceso que sirva archivos (un servidor HTTP).
- `python -m http.server` ya viene en la imagen de Python, no requiere dependencias.

## Ejemplo de entrega

```bash
cd proyecto-devops-educativo/projects/02-dockerize-minimal

docker build -t devops-hello .

docker run --rm -p 8080:8080 devops-hello
```

## Puntos clave

- El contenedor tiene su propio “adentro”: el `COPY` mete archivos dentro de la imagen.
- `-p 8080:8080` conecta “afuera:adentro” (tu máquina → contenedor).
- Si cambia el puerto adentro (CMD), tiene que coincidir con el `-p`.

Errores comunes:

- Olvidar copiar `app/`.
- Exponer un puerto, pero el server corre en otro.
- Confundir `EXPOSE` (documentación) con `-p` (publicar puerto real).
