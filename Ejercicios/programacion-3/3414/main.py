class Zombi:
    def __init__(self, hambre):
        self.hambre = hambre

    def sabe_correr(self):
        return True

    def recibir_danio(self, cantidad):
        self.hambre -= cantidad * 2

    def descansar(self, minutos):
        self.hambre += minutos
