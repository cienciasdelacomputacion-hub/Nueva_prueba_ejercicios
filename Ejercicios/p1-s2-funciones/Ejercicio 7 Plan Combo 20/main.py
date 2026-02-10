#Podemos combinar funciones dentro de otras definiciones. Por ejemplo:

def doble(numero):
    return 2 * numero

def siguiente(numero):
    return numero + 1


def siguiente_del_doble(numero):
    return siguiente(doble(numero))
    
    
print(siguiente_del_doble(2))


  
  
  