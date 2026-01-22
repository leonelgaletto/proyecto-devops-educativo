#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker no está instalado o no está en PATH."
  exit 1
fi

cd "$project_dir"

if [[ ! -f Dockerfile ]]; then
  echo "Falta el entregable: Dockerfile"
  exit 1
fi

echo "Construyendo imagen devops-hello..."
docker build -t devops-hello "$project_dir" >/dev/null

echo "Corriendo contenedor y verificando respuesta..."
container_id=$(docker run -d -p 8080:8080 devops-hello)
cleanup() {
  docker rm -f "$container_id" >/dev/null 2>&1 || true
}
trap cleanup EXIT

# Espera corta
sleep 0.6

if command -v curl >/dev/null 2>&1; then
  body=$(curl -fsS http://127.0.0.1:8080/ || true)
else
  body=$(python - <<'PY'
import sys
import urllib.request
try:
    print(urllib.request.urlopen('http://127.0.0.1:8080/', timeout=2).read().decode('utf-8', 'ignore'))
except Exception:
    sys.exit(1)
PY
)
fi

if [[ "$body" != *"Hola, Docker"* ]]; then
  echo "No se pudo verificar el contenido esperado en http://localhost:8080"
  exit 1
fi

echo "OK: Dockerfile funciona y la app responde ✅"
