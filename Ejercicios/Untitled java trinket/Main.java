public class Main {

    public static void main(String[] args) {

        // Arreglo de verduras disponibles
        Verdura[] listaVerduras = {
            new Verdura("Papa", 2.0, 12),
            new Verdura("Zanahoria", 4.0, 9),
            new Verdura("Tomate", 10.0, 7),
            new Verdura("Lechuga", 4.0, 7),
            new Verdura("Cebolla", 2.0, 8)
        };

        System.out.println("=== Lista inicial de verduras ===");
        Verdura.mostrarLista(listaVerduras);

        System.out.println("\n=== Cambio de precio ===");
        Verdura.cambiarPrecio(listaVerduras, "Tomate", 44);

        System.out.println("\n=== Lista actualizada ===");
        Verdura.mostrarLista(listaVerduras);
    }
}

// ============================
// Clase Verdura
// ============================
class Verdura {

    String verdura;
    double kilos;
    int price;

    // Constructor
    Verdura(String verdura, double kilos, int price) {
        this.verdura = verdura;
        this.kilos = kilos;
        this.price = price;
    }

    // Método para mostrar la lista completa
    static void mostrarLista(Verdura[] verduras) {
        for (Verdura v : verduras) {
            System.out.println("Verdura: " + v.verdura + " | Kilos: " + v.kilos + " | Precio: " + v.price);
        }
    }

    // Método para cambiar el precio de una verdura específica
    static void cambiarPrecio(Verdura[] lista, String search, int newPrice) {
        boolean encontrada = false;
        for (Verdura v : lista) {
            if (v.verdura.equalsIgnoreCase(search)) {
                v.price = newPrice;
                encontrada = true;
                System.out.println("✅ Precio actualizado de " + search + " → " + newPrice);
                break;
            }
        }
        if (!encontrada) {
            System.out.println("⚠️ No se encontró la verdura " + search + ".");
        }
    }
}
