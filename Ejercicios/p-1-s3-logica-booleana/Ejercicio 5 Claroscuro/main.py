
def es_tono_claro(color):
    colores_claros = ["blanco", "amarillo", "beige", "celeste", "gris claro", "rosa"]
    return color.lower() in colores_claros
 
 
 
#PROBANDO LA FUNCIÓN   
color="rojo"
print(f"ROJO -> Es un color claro? {es_tono_claro(color)}")

color="blanco"
print(f"BLANCO -> Es un color claro? {es_tono_claro(color)}")
  