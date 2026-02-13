#Definimos la siguiente clase:
class Celular:
    def __init__(self, bateria, saldo):
        self.bateria = bateria
        self.saldo = saldo

    def tiene_bateria_maxima(self):
        return self.bateria == 100

    def cargar_a_tope(self):
        self.bateria = 100

    def necesita_saldo(self):
        return self.saldo == 0