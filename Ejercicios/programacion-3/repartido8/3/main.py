class MedioDeTransporte:
    def __init__(self, combustible):
        self.combustible = combustible

    def cargar_combustible(self, cantidad):
        self.combustible += cantidad

    def entran_personas(self, cantidad):
        return cantidad <= self.maximo_personas()

class Colectivo(MedioDeTransporte):
    def maximo_personas(self):
        return 20

    def recorrer(self, km):
        self.combustible -= km * 2
