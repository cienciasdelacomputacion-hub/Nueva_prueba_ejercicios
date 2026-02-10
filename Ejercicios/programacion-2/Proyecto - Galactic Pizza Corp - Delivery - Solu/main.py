import sys
import os

# --- ESTRUCTURAS DE DATOS FIJAS ---

planetas_disponibles = ["Mercurio", "Venus", "Marte", "Júpiter", "Saturno"]
menu_pizzas = {
    "Margherita": ["Albahaca", "Queso"],
    "Pepperoni": ["Pepperoni", "Queso"],
    "Hawaiana": ["Jamón", "Piña"],
    "Vegetariana": ["Pimiento", "Cebolla"]
}
# Lista que almacena los diccionarios de pedidos realizados
pedidos = [] 


# --- FUNCIONES DE UTILIDAD Y VALIDACIÓN ---

def limpiar_consola():
    """Limpia la consola."""
    os.system('cls' if os.name == 'nt' else 'clear')

def buscar_planeta(lista_planetas, planeta_buscado):
    """Verifica si un planeta existe en la lista (insensible a mayúsculas/minúsculas)."""
    planeta_lower = planeta_buscado.lower()
    return planeta_lower in [p.lower() for p in lista_planetas]

def mostrar_menu_y_rutas():
    """Muestra la información fija del sistema."""
    print("\n--- MENÚ Y RUTAS DISPONIBLES ---")
    print(f"PLANETAS: {', '.join(planetas_disponibles)}")
    print(f"PIZZAS: {', '.join(menu_pizzas.keys())}")
    print("--------------------------------")


# --- MÓDULO ROL CLIENTE (HACER PEDIDO) ---

def emitir_ticket(pedido):
    """Muestra el Ticket con el Resumen del Pedido."""
    print("\n" + "#" * 40)
    print(f"# 📜 TICKET DE PEDIDO GALÁCTICO DE GPC #")
    print("#" * 40)
    print(f"Cliente: {pedido['Nombre del cliente']}")
    print(f"Planeta de Entrega: {pedido['Planeta de entrega']}")
    print("\n--- PIZZAS SOLICITADAS ---")
    
    for pizza in pedido["Pizzas solicitadas"]:
        print(f"  - 🍕 {pizza}")
    print("-" * 40)
    
def tomar_pedido_galactico():
    """Controla el flujo de pedido del cliente."""
    print("\n" + "=" * 50)
    print("🚀 MODO CLIENTE: INICIO DE PEDIDO")
    print("=" * 50)

    mostrar_menu_y_rutas()

    # 1. Solicitar datos iniciales
    nombre_cliente = input("➡️ INGRESE su nombre de cliente: ").strip()
    
    while True:
        planeta_entrega = input("➡️ INGRESE el planeta de entrega: ").strip().capitalize()
        
        # 2. Validación Crítica
        if buscar_planeta(planetas_disponibles, planeta_entrega):
            break
        else:
            print(f"\n❌ El planeta ingresado '{planeta_entrega}' no está disponible.")
            print("❌ Deteniendo el proceso de pedido.")
            return # Detiene la función si la validación falla

    # 3. Preparación e inicio de bucle
    pizzas_solicitadas = []
    print(f"\n✅ Planeta {planeta_entrega} verificado. ¡A elegir pizzas!")

    # Bucle while para Múltiples Pizzas
    while True:
        sabor = input("🍕 INGRESE el sabor de pizza: ").strip().capitalize()
        
        if sabor in menu_pizzas:
            pizzas_solicitadas.append(sabor)
            print(f"✅ '{sabor}' agregada. Total: {len(pizzas_solicitadas)}")
            
            # Pregunta de control del Bucle While
            continuar = input("🛰️ ¿Deseas agregar otra pizza? (s/n): ").strip().lower()
            if continuar != 's':
                break
        else:
            print("⚠️ Sabor no reconocido. Intente de nuevo.")
            
    # 4. Finalización y Almacenamiento
    if pizzas_solicitadas:
        pedido_actual = {
            "Nombre del cliente": nombre_cliente,
            "Planeta de entrega": planeta_entrega,
            "Pizzas solicitadas": pizzas_solicitadas
        }
        
        pedidos.append(pedido_actual) # Agrega el diccionario a la lista
        emitir_ticket(pedido_actual)
    else:
        print("\n⚠️ Pedido cancelado.")


# --- MÓDULO ROL LOCAL (VISUALIZAR PEDIDOS) ---

def ver_historial_pedidos():
    """Permite al Local visualizar el historial de pedidos."""
    print("\n" + "=" * 50)
    print("📊 MODO LOCAL: REGISTRO DE HISTORIAL DE PEDIDOS ")
    print("=" * 50)
    
    if not pedidos:
        print("El Historial de Pedidos está vacío.")
    else:
        # Bucle for para recorrer la lista de diccionarios
        for idx, p in enumerate(pedidos):
            print("-" * 30)
            print(f"[PEDIDO #{idx + 1}]")
            print(f"  Cliente: {p['Nombre del cliente']}")
            print(f"  Planeta: {p['Planeta de entrega']}")
            print(f"  Pizzas: {', '.join(p['Pizzas solicitadas'])}")
    print("-" * 50)


# --- NAVEGACIÓN PRINCIPAL ---

def ejecutar_sg_dg():
    """Función principal que maneja la selección de roles."""
    limpiar_consola()
    print("=" * 58)
    print("# BIENVENIDO A [Galactic Pizza Corp.] Delivery Galáctico #".upper())
    print("=" * 58)
    
    while True:
        print("\n👤 SELECCIÓN DE ROL")
        print("1. Soy Cliente")
        print("2. Soy Personal del Local")
        print("3. Salir")
        
        rol = input("➡️ INGRESE OPCIÓN (1, 2 o 3): ")
        limpiar_consola()
        
        if rol == '1':
            tomar_pedido_galactico()
        elif rol == '2':
            ver_historial_pedidos()
        elif rol == '3':
            print("\n¡Gracias por usar el SG-DG! Saliendo.")
            sys.exit()
        else:
            print("❌ Opción no válida. Intente de nuevo.")

if __name__ == "__main__":
    ejecutar_sg_dg()