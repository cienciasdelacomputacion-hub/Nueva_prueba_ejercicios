class Leon:
    def __init__(self, energia):
        self.energia = energia

    def comer(self, gramos):
        self.energia += gramos

    def recibir_rehabilitacion(self):
        self.comer(500)

class AsistenteDeZoologico:
    def alimentar(self, animal, gramos):
        animal.comer(gramos)

    def rehabilitar(self, animal):
        animal.recibir_rehabilitacion()
