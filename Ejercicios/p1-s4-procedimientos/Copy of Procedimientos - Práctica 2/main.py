# ----------------- Variables globales -----------------
mochila_abierta = True

# ----------------- Procedimientos del estudiante -----------------
# Pegá tus procedimientos aquí











# ----------------- Validación opcional -----------------
# Descomenta para probar tus procedimientos

def test_procedimientos():
    global mochila_abierta, alternancia_saludo
    
    print("🚨 Probando usar_cierre()...")
    estado_inicial = mochila_abierta
    usar_cierre()
    if mochila_abierta == (not estado_inicial):
        print("✅ usar_cierre funciona correctamente.")
    else:
        print("❌ usar_cierre NO funcionó. Verifica el uso de 'not' y la variable global.")

    usar_cierre()  # prueba invocación repetida
    if mochila_abierta == estado_inicial:
        print("✅ Alternancia correcta tras segunda invocación.")
    else:
        print("❌ Alternancia incorrecta. Cada invocación debería cambiar el estado.")


# Descomentar para validar
# test_procedimientos()
