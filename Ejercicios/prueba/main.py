def agregar_tarea(tareas, tarea_nueva):
    if tareas == "":
        return tarea_nueva
    else:
        return tareas + ", " + tarea_nueva

def mostrar_tareas(tareas):
    if tareas == "":
        print("No hay tareas")
    else:
        lista = tareas.split(", ")
        for i in range(len(lista)):
            print(f"{i}: {lista[i]}")

def eliminar_tarea(tareas, indice):
    lista = tareas.split(", ")
    if indice < 0 or indice >= len(lista):  # Error en la validación del índice
        print("Índice inválido")
        return tareas
    else:
        lista.pop(indice)
        return ", ".join(lista)

# Ejemplo de uso
tareas = ""
tareas = agregar_tarea(tareas, "Estudiar Python")
tareas = agregar_tarea(tareas, "Hacer ejercicio")
mostrar_tareas(tareas)
print("________________")
tareas = eliminar_tarea(tareas, 2)
mostrar_tareas(tareas)


