class Leon:
    def __init__(self, energia):
        self.energia = energia

    def comer(self, gramos):
        self.energia += gramos

    def esta_feliz(self):
        return self.energia > 3000

class Elefante:
    def __init__(self):
        self.comida_consumida = 0

    def comer(self, gramos):
        self.comida_consumida += gramos

    def esta_feliz(self):
        return self.comida_consumida > 2000

class Mono:
    def __init__(self):
        self.horas_descansadas = 0

    def descansar(self, horas):
        self.horas_descansadas += horas

    def esta_feliz(self):
        return self.horas_descansadas >= 5

class AsistenteDeZoologico:
    def alimentar(self, animal, gramos):
        animal.comer(gramos)

    def rehabilitar(self, animal):
        animal.recibir_rehabilitacion()

    # Agregar aquí el método puede_dar_el_alta()
