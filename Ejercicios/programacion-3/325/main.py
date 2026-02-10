#¿Cuál de los siguientes códigos es correcto?

# Opción A
class Pintura:
    def init(self, artista, tecnica, ancho, alto):
        self.artista = artista
        self.tecnica = tecnica
        self.ancho = ancho
        self.alto = alto 

#Opción B
class Pintura:
    def __init__(self, artista, tecnica, ancho, alto):
        self.artista = artista
        self.tecnica = tecnica
        self.ancho = ancho
        self.alto = alto 

#Opción C
class Pintura:
    def __init__(artista, tecnica, ancho, alto):
        artista = artista
        tecnica = tecnica
        ancho = ancho
        alto = alto 