def es_par(numero):
  return numero % 2 == 0


def es_impar(numero):
  return not es_par(numero)
  
  
print(f"El numero 7 es impar ? {es_impar(7)} ")