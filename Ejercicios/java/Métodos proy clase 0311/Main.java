/*
===========================================================
  🧩 EJERCICIO: "El Almacén Desmemoriado"
===========================================================
Objetivo:
  Practicar el paso de arrays como parámetros, el retorno de arrays 
  y la manipulación dentro de métodos para que los cambios se reflejen 
  en el main.
===========================================================

🔹 En el main:
    Declara un array de tipo String con capacidad para 5 elementos.
    Ejemplo:
        String[] productos = new String[5];

🔹 Implementa los siguientes métodos:

a) cargarProductos(String[] lista)
   - Recibe un array vacío.
   - Pide por teclado el nombre de los productos y los guarda en cada posición.
   - Retorna el array cargado.
   💡 Atención: el retorno es necesario para que el main actualice su variable productos.
     Ejemplo: productos = cargarProductos(productos);

b) buscarProducto(String[] lista, String nombre)
   - Recorre el array buscando un producto con el nombre indicado.
   - Si lo encuentra, retorna el índice.
   - Si no lo encuentra, retorna -1.

c) borrarProducto(String[] lista, String nombre)
   - Busca el producto y, si existe, reemplázalo por null o "".
   - Muestra un mensaje confirmando la eliminación.

d) agregarEnVacio(String[] lista, String nuevo)
   - Busca la primera posición vacía (null o "") y guarda allí el nuevo producto.
   - Si no hay lugar, muestra un mensaje de error.


===========================================================
*/

import java.util.Scanner;

public class Main {
  
  public void limpiarPantalla(){
    for(int i= 0;i<30;i++){
      System.out.println();
    }
  }

    public static void main(String[] args) {
        Main metodos=new Main();
        Scanner sc = new Scanner(System.in);
        String[] productos = new String[5]; // Array principal de 5 elementos
        int opcion;

        do {
            System.out.println("\n=== MENÚ PRINCIPAL ===");
            System.out.println("1. Cargar productos");
            System.out.println("2. Buscar producto");
            System.out.println("3. Borrar producto");
            System.out.println("4. Agregar nuevo en posición vacía");
            System.out.println("5. Listar todos");
            System.out.println("0. Salir");
            System.out.print("Opción: ");
            opcion = sc.nextInt();
            sc.nextLine(); // limpiar buffer
            metodos.limpiarPantalla();

            switch (opcion) {
                case 1:
                    // a) Llamar al método que carga los productos y retorna el array cargado
                   
                    break;
                case 2:
                    // b) Buscar un producto por nombre
                    
                    break;
                case 3:
                    // c) Borrar un producto del array
                    
                    break;
                case 4:
                    // d) Agregar un nuevo producto en la primera posición vacía
                    
                    break;
                case 5:
                    // Listar todos los productos actuales
                   
                    break;
                case 0:
                    System.out.println("Saliendo del sistema...");
                    break;
                default:
                    System.out.println("Opción inválida.");
            }

        } while (opcion != 0);
    }


}
