class Vehiculo:
    def __init__(self, combustible, capacidad_tanque=20):
        self.combustible = combustible  # Nivel actual de combustible en litros
        self.capacidad_tanque = capacidad_tanque  # Capacidad máxima del tanque

    def necesita_combustible(self):
        return self.combustible < (self.capacidad_tanque * 0.2)  # Menos del 20% se considera bajo

    def llenar_tanque(self):
        self.combustible = self.capacidad_tanque  # Llena el tanque completamente

class Moto(Vehiculo):  # Moto hereda de Vehiculo
    pass  # No agregamos métodos nuevos, pero hereda los de Vehiculo

# Creamos la moto de Ana con 2 litros de combustible
moto_de_ana = Moto(combustible=2, capacidad_tanque=15)

