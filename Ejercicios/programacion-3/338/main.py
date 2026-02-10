class Leon:
    def __init__(self, energia):
        self.energia = energia

    def comer(self, gramos):
        self.energia += gramos

    # Agregar aquí el método esta_feliz()

class Elefante:
    def __init__(self):
        self.comida_consumida = 0

    def comer(self, gramos):
        self.comida_consumida += gramos

    # Agregar aquí el método esta_feliz()

class Mono:
    def __init__(self):
        self.horas_descansadas = 0

    def descansar(self, horas):
        self.horas_descansadas += horas

    # Agregar aquí el método esta_feliz()
