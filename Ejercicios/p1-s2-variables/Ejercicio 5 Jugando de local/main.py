#Ejemplo de variable local, definida adentro de la función:

def el_mas_largo_sin_espacios(un_string, otro_string):
  un_string_sin_espacios = str.strip(un_string)
  otro_string_sin_espacios = str.strip(otro_string)

#Ejemplo de variable global:

peso_maximo_del_equipaje_en_gramos = 5000

def puede_llevar(peso_equipaje):
  return peso_equipaje <= peso_maximo_del_equipaje_en_gramos




