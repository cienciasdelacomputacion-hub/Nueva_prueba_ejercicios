class Auto:
    def __init__(self, combustible, capacidad_tanque=50):
        self.combustible = combustible  # Nivel actual de combustible en litros
        self.capacidad_tanque = capacidad_tanque  # Capacidad máxima del tanque en litros

    def tiene_tanque_lleno(self):
        return self.combustible == self.capacidad_tanque  # Devuelve True si el tanque está lleno

    def llenar_tanque(self):
        self.combustible = self.capacidad_tanque  # Llena el tanque completamente

# Creamos el auto de Luis con 10 litros de combustible
auto_de_luis = Auto(combustible=10)

# Verificamos si el tanque está lleno antes de llenarlo
print(auto_de_luis.tiene_tanque_lleno())

# Llenamos el tanque
auto_de_luis.llenar_tanque()

# Verificamos nuevamente si el tanque está lleno
print(auto_de_luis.tiene_tanque_lleno())
