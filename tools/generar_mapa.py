# tools/generar_mapa.py
# Uso: py tools/generar_mapa.py

import os, json
from datetime import datetime

ROOT = "ejercicios"
OUT = "mapa_del_proyecto.json"

ALLOW = {".html", ".htm", ".css", ".js", ".mjs", ".py", ".json", ".md", ".txt", ".csv"}
IGNORE_DIR = {".git", "node_modules"}
IGNORE_FILE = {".DS_Store", "thumbs.db"}

files = []
for base, dirs, filenames in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in IGNORE_DIR]
    for name in filenames:
        if name.lower() in IGNORE_FILE:
            continue
        ext = os.path.splitext(name)[1].lower()
        if ALLOW and ext not in ALLOW:
            continue
        p = os.path.join(base, name).replace("\\", "/")
        files.append(p)

data = {
    "root": ROOT,
    "generatedAt": datetime.utcnow().isoformat() + "Z",
    "files": [{"path": p} for p in sorted(files)]
}

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"OK: {OUT} con {len(files)} archivos.")
