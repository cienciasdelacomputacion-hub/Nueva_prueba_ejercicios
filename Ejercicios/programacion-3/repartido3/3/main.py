#La clase Celular está definida como sigue:
class Celular:
    def __init__(self, bateria, saldo):
        self.bateria = bateria
        self.saldo = saldo

#Si ya tenemos estos celulares:
celular_de_pedro = Celular(50, 120)  
celular_de_ana = Celular(30, 200)
