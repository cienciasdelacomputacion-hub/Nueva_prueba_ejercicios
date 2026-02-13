class Elefante:
    def __init__(self, energia):
        self.energia = energia

    def comer(self, gramos):
        self.energia += gramos

    def recibir_rehabilitacion(self):
        self.comer(1000)  # Modificar este método

class Mono:
    def __init__(self, energia):
        self.energia = energia

    def descansar(self, horas):
        self.energia += horas * 100

    def recibir_rehabilitacion(self):
        self.descansar(2)  # Modificar este método
