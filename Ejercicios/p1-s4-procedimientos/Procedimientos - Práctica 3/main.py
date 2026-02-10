# ----------------- Variables globales -----------------



# ----------------- Procedimientos del estudiante -----------------
# Pegá tus procedimientos aquí











# ----------------- Validación opcional -----------------
# Descomenta para probar tus procedimientos

def test_ejercicio_1():
    global agua_del_termo
    agua_del_termo = 1000
    try:
        cebar_mate()
        if agua_del_termo != 970:
            print(f"❌ Ejercicio 1 falló: agua_del_termo esperado 970, obtuviste {agua_del_termo}")
        else:
            print("✅ Ejercicio 1 correcto")
    except Exception as e:
        print(f"❌ Ejercicio 1 falló: {e}")

def test_ejercicio_2():
    global agua_del_termo
    agua_del_termo = 1000
    try:
        vaciar_termo()
        if agua_del_termo != 0:
            print("❌ vaciar_termo no funcionó")
        else:
            print("✅ vaciar_termo correcto")
        llenar_termo()
        if agua_del_termo != 1000:
            print("❌ llenar_termo no funcionó")
        else:
            print("✅ llenar_termo correcto")
    except Exception as e:
        print(f"❌ Ejercicio 2 falló: {e}")

def test_ejercicio_3():
    global agua_del_termo
    agua_del_termo = 1000
    try:
        cargar_termo(50)
        if agua_del_termo != 1050:
            print("❌ cargar_termo no sumó correctamente")
        else:
            print("✅ cargar_termo correcto")
    except Exception as e:
        print(f"❌ Ejercicio 3 falló: {e}")

def test_ejercicio_4():
    global agua_del_termo, agua_del_mate
    agua_del_termo = 1000
    agua_del_mate = 0
    try:
        cebar_mate()
        if agua_del_mate != 30:
            print("❌ cebar_mate no aumentó agua_del_mate correctamente")
        else:
            print("✅ cebar_mate correcto")
        tomar_mate()
        if agua_del_mate != 0:
            print("❌ tomar_mate no vació agua_del_mate")
        else:
            print("✅ tomar_mate correcto")
    except Exception as e:
        print(f"❌ Ejercicio 4 falló: {e}")

def test_ejercicio_5():
    try:
        pasar()
        print("✅ pasar() ejecutado correctamente (no hace nada)")
    except Exception as e:
        print(f"❌ Ejercicio 5 falló: {e}")

# Para ejecutar la validación completa, descomenta:
# test_ejercicio_1()
# test_ejercicio_2()
# test_ejercicio_3()
# test_ejercicio_4()
# test_ejercicio_5()
