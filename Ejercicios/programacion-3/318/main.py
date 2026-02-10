class Auto:
    def __init__(self, combustible, capacidad_tanque=50):
        self.combustible = combustible  # Nivel actual de combustible en litros
        self.capacidad_tanque = capacidad_tanque  # Capacidad máxima del tanque en litros

    def tiene_tanque_lleno(self):
        return self.combustible == self.capacidad_tanque  # Devuelve True si el tanque está lleno

    def llenar_tanque(self):
        self.combustible = self.capacidad_tanque  # Llena el tanque completamente

# Creamos el auto de Luis
auto_de_luis = Auto(combustible=10)
