puntaje = int(input("Ingrese el puntaje del estudiante: "))

if puntaje > 90:
    calificacion = "A"
else:
    if puntaje >= 80:
        calificacion = "B"
    else:
        if puntaje >= 65:
            calificacion = "C"
        else:
            if puntaje >= 50:
                calificacion = "D"
            else:
                if puntaje >= 25:
                    calificacion = "E"
                else:
                    calificacion = "F"

print("La calificación del estudiante es: ", calificacion )