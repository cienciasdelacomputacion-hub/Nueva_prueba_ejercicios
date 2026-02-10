class Auto:
    def __init__(self, combustible):
        self.combustible = combustible  # Nivel de combustible en litros

    def necesita_combustible(self):
        # Supongamos que menos de 10 litros es considerado bajo
        return self.combustible < 10

# Creamos el auto de Luis con un nivel de combustible específico
auto_de_luis = Auto(combustible=5)  # Ejemplo: tiene 5 litros de combustible

# Ahora se envía el mensaje al objeto
print(auto_de_luis.necesita_combustible())
