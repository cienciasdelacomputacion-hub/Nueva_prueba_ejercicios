# declaramos la variable global al inicio
dias_sin_incidentes_con_dinosaurios = 0

def pasar_un_dia_tranquilo():
    global dias_sin_incidentes_con_dinosaurios
    dias_sin_incidentes_con_dinosaurios = dias_sin_incidentes_con_dinosaurios + 1

#Probá lo siguiente en la consola mostrando su  resultado :

dias_sin_incidentes_con_dinosaurios
pasar_un_dia_tranquilo()
pasar_un_dia_tranquilo()
dias_sin_incidentes_con_dinosaurios
pasar_un_dia_tranquilo()
dias_sin_incidentes_con_dinosaurios


print("👉 Como ves, la variable fue cambiando su valorcada vez que ejecutamos la función. Y si no lo ves.... te faltó poner los prints en las lineas 10,13 y 14😜")



