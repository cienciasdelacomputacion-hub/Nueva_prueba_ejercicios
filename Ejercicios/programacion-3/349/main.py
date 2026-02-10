class MedioDeTransporte:
    def __init__(self, combustible):
        self.combustible = combustible

    def cargar_combustible(self, cantidad):
        self.combustible += cantidad

    def entran_personas(self, cantidad):
        return cantidad <= self.maximo_personas()

class Auto(MedioDeTransporte):
    def maximo_personas(self):
        return 5

    def recorrer(self, km):
        self.combustible -= km * 0.5

class Moto(MedioDeTransporte):
    def maximo_personas(self):
        return 2

    def recorrer(self, km):
        self.combustible -= km * 1
