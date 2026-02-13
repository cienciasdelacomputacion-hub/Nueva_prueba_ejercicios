#Si tenemos las siguientes instancias:
nano = Caballo(500, "Cuarto De Milla")
pepita = Golondrina(200, "General Las Heras")
theo = Gato(50, 7)
kali = Gato(30, 13)

class Caballo:
    def __init__(self, energia, raza):
        self.energia = energia
        self.raza = raza

    def comer(self, gramos):
        self.energia += gramos * 2

    def galopar(self, kms):
        self.energia -= kms

class Golondrina:
    def __init__(self, energia, ciudad):
        self.energia = energia
        self.ciudad = ciudad

    def comer(self, gramos):
        self.energia += gramos / 2

    def volar_hacia(self, destino):
        self.ciudad = destino
        self.energia /= 2

class Gato:
    def __init__(self, energia, edad):
        self.energia = energia
        self.edad = edad

    def comer(self, gramos):
        self.energia += gramos

    def cumplir_anios(self):
        self.edad += 1
