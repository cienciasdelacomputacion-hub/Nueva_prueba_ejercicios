class Notebook:
    def __init__(self, bateria):
        self.bateria = bateria

    def tiene_bateria(self):
        return self.bateria > 20

    def utilizar(self, minutos):
        self.bateria -= minutos  # Se reduce directamente

    def cargar_a_tope(self):
        self.bateria = 100

    def tiene_bateria_maxima(self):
        return self.bateria == 100

class Tablet:
    def __init__(self, bateria):
        self.bateria = bateria

    def tiene_bateria(self):
        return self.bateria > 20

    def utilizar(self, minutos):
        self.bateria -= minutos / 2

    def cargar_a_tope(self):
        self.bateria = 100

    def tiene_bateria_maxima(self):
        return self.bateria == 100
