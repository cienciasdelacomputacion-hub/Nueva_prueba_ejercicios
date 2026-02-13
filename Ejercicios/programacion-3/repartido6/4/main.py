class Zombi:
    def __init__(self, hambre):
        self.hambre = hambre

    def es_un_peligro(self):
        return self.hambre > 50

class Vampiro:
    def __init__(self, sed_de_sangre):
        self.sed_de_sangre = sed_de_sangre

    def es_un_peligro(self):
        return self.sed_de_sangre > 30
