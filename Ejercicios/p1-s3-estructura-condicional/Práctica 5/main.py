
#Saludar2

def saludar_a(quien, horario):
    if horario &lt; 12:
        return "Buenos días " + quien
    elif horario &lt; 19:
        return "Buenas tardes " + quien
    else: 
        return "Buenas noches " + quien

