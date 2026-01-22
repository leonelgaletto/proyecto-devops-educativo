# Proyecto DevOps Educativo

Este repo contiene dos partes:

- `web/` → la página (React + Vite)
- `projects/` → los labs/prácticas reales (cada uno con brief + assets + solución)

## 1) Levantar la web (localhost)

```bash
cd /home/leonel/clawd/proyecto-devops-educativo/web
npm install
npm run dev
```

Vas a ver una URL tipo `http://127.0.0.1:5173/`.

> Tip: si ya corriste `npm install` antes, no hace falta repetirlo.

## 2) Probar un proyecto (lab)

Ejemplo: Proyecto 01 (Linux logs)

```bash
cd /home/leonel/clawd/proyecto-devops-educativo/projects/01-linux-logs

# Mirar el log
tail -n 40 assets/service.log

# Escribir tu entrega
# (creá report.md con 4 secciones)

# Verificar formato mínimo
bash scripts/verify.sh

# Ver la solución
# (cuando termines)
less solution.md
```

## Estructura de un proyecto

Cada carpeta dentro de `projects/` debería tener, como mínimo:

- `README.md` (brief + pasos)
- `assets/` (material del lab)
- `solution.md`
- `scripts/` (helpers, por ejemplo `verify.sh`)
