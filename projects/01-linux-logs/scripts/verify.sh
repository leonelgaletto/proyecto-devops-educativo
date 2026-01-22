#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
report_path="$project_dir/report.md"

if [[ ! -f "$report_path" ]]; then
  echo "Falta tu entrega: $report_path"
  echo "Crealo con las secciones: Error observado, Causa probable, Mitigación inmediata, Fix permanente"
  exit 1
fi

required=(
  "Error observado"
  "Causa probable"
  "Mitigación inmediata"
  "Fix permanente"
)

missing=0
for header in "${required[@]}"; do
  if ! grep -qi "$header" "$report_path"; then
    echo "Falta la sección: $header"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  echo ""
  echo "Tip: usá títulos tipo '## Error observado' en report.md"
  exit 1
fi

lines=$(wc -l < "$report_path" | tr -d ' ')
if [[ "$lines" -lt 4 ]]; then
  echo "Tu reporte parece demasiado corto ($lines líneas)."
  echo "No pasa nada, pero intentá poner 1–2 líneas por sección."
  exit 1
fi

echo "OK: report.md tiene las secciones mínimas ✅"
