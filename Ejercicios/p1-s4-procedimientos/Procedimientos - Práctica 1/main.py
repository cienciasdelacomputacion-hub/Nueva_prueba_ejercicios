# ----------------- Variables globales -----------------
luz_encendida = False
alarma_activada = False
experiencia_total = 0

# ----------------- Procedimientos del estudiante -----------------
# Pegá tus procedimientos aquí
















# ----------------- Validación opcional -----------------
# Descomenta las últimas lineas para probar tus procedimientos
def validar_encender_luz():
    global luz_encendida
    luz_encendida = False
    try:
        encender_luz()
        if luz_encendida:
            print("✅ Encender luz pasó la prueba 💡")
        else:
            print("❌ Encender luz NO funcionó: luz_encendida sigue siendo False")
    except:
        print("❌ Encender luz produjo un error")

def validar_activar_alarma():
    global alarma_activada
    alarma_activada = False
    try:
        activar_alarma()
        if alarma_activada:
            print("✅ Activar alarma pasó la prueba 🚨")
        else:
            print("❌ Activar alarma NO funcionó: alarma_activada sigue siendo False")
    except:
        print("❌ Activar alarma produjo un error")

def validar_sumar_experiencia():
    global experiencia_total
    experiencia_total = 0
    try:
        sumar_experiencia(50)
        if experiencia_total == 50:
            print("✅ Sumar experiencia pasó la prueba 🏆")
        else:
            print(f"❌ Sumar experiencia NO funcionó: experiencia_total es {experiencia_total} (esperado 50)")
    except:
        print("❌ Sumar experiencia produjo un error")

# Ejecutar validaciones
#validar_encender_luz()
#validar_activar_alarma()
#validar_sumar_experiencia()
