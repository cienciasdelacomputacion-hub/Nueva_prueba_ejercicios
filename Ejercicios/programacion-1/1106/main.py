def agregar_tarea(tareas, tarea_nueva):
    if tareas == "":
        return tarea_nueva
    else:
        return tareas + ", " + tarea_nueva

def mostrar_tareas(tareas):
    if tareas == "":
        print("No hay tareas")
    else:
        print(tareas)

def eliminar_tarea(tareas, tarea_a_borrar):
    # Caso 1: Es la única tarea exacta
    if tareas == tarea_a_borrar:
        return ""
    
    # Caso 2: Está al principio (borramos la tarea y la coma siguiente)
    # Usamos replace solo una vez para evitar borrar duplicados si no queremos
    if tareas.startswith(tarea_a_borrar + ", "):
        return tareas.replace(tarea_a_borrar + ", ", "", 1)
        
    # Caso 3: Está al final o en medio (borramos la coma anterior y la tarea)
    return tareas.replace(", " + tarea_a_borrar, "", 1)

# --- Código de prueba ---

print("--- Gestión de Tareas ---")

# 1. Creamos una cadena de tareas vacía
mis_tareas = ""
print(f"Lista inicial: '{mis_tareas}'")

# 2. Agregamos algunas tareas
print("\n>>> Agregando tareas...")
mis_tareas = agregar_tarea(mis_tareas, "Estudiar Python")
#Por teclado
mis_tareas = agregar_tarea(mis_tareas, input("Ingrese una tarea"))

# 3. Mostramos la lista de tareas
print(">>> Mostrando tareas:")
mostrar_tareas(mis_tareas) # Debería imprimir: Estudiar Python, Hacer ejercicio, Comprar pan

# 4. Intentamos eliminar una tarea
mis_tareas = eliminar_tarea(mis_tareas, input("\n>>> Escribe para eliminard 'Estudiar Python'..."))

# 5. Mostramos la lista de nuevo
print(">>> Mostrando tareas después de eliminar:")
mostrar_tareas(mis_tareas) # Debería imprimir: Estudiar Python, Comprar pan

#Si necesitas mas pruebas copia y pega los pasos del 2 al 5 