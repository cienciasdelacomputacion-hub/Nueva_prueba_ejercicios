import os, json
from datetime import datetime

# 1. Ajustar rutas para que siempre apunten a la raíz del repo
# independientemente de dónde se ejecute el script.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT_FOLDER = "Ejercicios"
OUT_PATH = os.path.join(BASE_DIR, "mapa_del_proyecto.json")
EJERCICIOS_PATH = os.path.join(BASE_DIR, ROOT_FOLDER)

ALLOW = {".html", ".htm", ".css", ".js", ".mjs", ".py", ".json", ".md", ".txt", ".csv"}
IGNORE_DIR = {".git", "node_modules", ".github"}
IGNORE_FILE = {".DS_Store", "thumbs.db"}

files_list = []

# Verificamos que la carpeta Ejercicios existe
if not os.path.exists(EJERCICIOS_PATH):
    print(f"Error: No se encuentra la carpeta {ROOT_FOLDER} en {BASE_DIR}")
    # En GitHub Actions, esto ayudará a debuguear
    print("Contenido actual del directorio:", os.listdir(BASE_DIR))
else:
    for base, dirs, filenames in os.walk(EJERCICIOS_PATH):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIR]
        for name in filenames:
            if name.lower() in IGNORE_FILE:
                continue
            ext = os.path.splitext(name)[1].lower()
            if ALLOW and ext not in ALLOW:
                continue
            
            # Obtenemos la ruta relativa respecto a la raíz del proyecto
            # para que el IDE pueda hacer el fetch correctamente
            full_path = os.path.join(base, name)
            rel_path = os.path.relpath(full_path, BASE_DIR).replace("\\", "/")
            files_list.append(rel_path)

    data = {
        "root": ROOT_FOLDER,
        "generatedAt": datetime.utcnow().isoformat() + "Z",
        "files": sorted(files_list) # Tu JS espera un array de strings o objetos
    }

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"OK: {OUT_PATH} con {len(files_list)} archivos.")