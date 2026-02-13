class Zombi:
    def __init__(self, hambre):
        self.hambre = hambre

    def sabe_correr(self):
        return True

    def es_un_peligro(self):
        return self.hambre > 50

    def recibir_danio(self, cantidad):
        self.hambre -= cantidad * 2
