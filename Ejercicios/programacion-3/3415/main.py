class Zombi:
    def __init__(self, hambre):
        self.hambre = hambre

    def sabe_correr(self):
        return True

    def es_un_peligro(self):
        return self.hambre > 50

    def recibir_danio(self, cantidad):
        self.hambre -= cantidad * 2

    def descansar(self, minutos):
        self.hambre += minutos

class SuperZombi(Zombi):
    def es_un_peligro(self):
        return True  # Siempre es un peligro

    def recibir_danio(self, cantidad):
        self.hambre -= cantidad  # Se reduce solo la cantidad recibida

    def regenerarse(self):
        self.hambre = 100  # Regenera su hambre a 100
