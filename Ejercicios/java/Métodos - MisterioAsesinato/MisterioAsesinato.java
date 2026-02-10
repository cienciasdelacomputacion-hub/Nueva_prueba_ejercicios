public class MisterioAsesinato {
    public static void main(String[] args) {

        // ==============================
        // FASE 1 - LIMPIANDO LA PRIMERA PISTA
        // ==============================
        System.out.println("FASE 1: Encuentras una nota arrugada con espacios extra y todo en minúsculas.");
        System.out.println("Debes limpiarla y ponerla en mayúsculas para leerla claramente.");

        // Teoría String.trim()
        System.out.println("\n[TEORÍA] Método trim(): Elimina los espacios en blanco al inicio y al final de una cadena.");
        // Teoría String.toUpperCase()
        System.out.println("[TEORÍA] Método toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas.");

        String nota1 = "   cuchillo  ";
        String notaLimpia = nota1.trim(); // Elimina espacios
        String notaMayus = notaLimpia.toUpperCase(); // Convierte a mayúsculas
        System.out.println("Pista descifrada: " + notaMayus);

        // ==============================
        // FASE 2 - REVISANDO LA CARTERA
        // ==============================
        System.out.println("\nFASE 2: Revisas la cartera de la víctima y encuentras un papel con un mensaje sospechoso.");
        System.out.println("Necesitas saber la longitud del mensaje para entender si hay un código oculto.");

        // Teoría String.length()
        System.out.println("\n[TEORÍA] Método length(): Devuelve la cantidad de caracteres que tiene la cadena.");

        String mensaje = "El asesino dejó huellas";
        int longitud = mensaje.length();
        System.out.println("Cantidad de caracteres en el mensaje: " + longitud);

        // ==============================
        // FASE 3 - PALABRAS CLAVE
        // ==============================
        System.out.println("\nFASE 3: Entre varios papeles, encuentras una dirección.");
        System.out.println("Necesitas verificar si en ella aparece cierta palabra clave.");

        // Teoría String.contains()
        System.out.println("\n[TEORÍA] Método contains(): Verifica si una cadena contiene otra subcadena. Retorna true o false.");

        String direccion = "Calle Luna, 13";
        boolean contiene = direccion.contains("Luna");
        System.out.println("¿Contiene la palabra clave?: " + contiene);

        // ==============================
        // FASE 4 - CIFRADO PARCIAL
        // ==============================
        System.out.println("\nFASE 4: Una nota parece estar cifrada, pero sospechas que la parte útil es solo una sección.");
        System.out.println("Necesitas extraerla.");

        // Teoría String.substring()
        System.out.println("\n[TEORÍA] Método substring(inicio, fin): Devuelve una nueva cadena desde la posición 'inicio' hasta 'fin' (sin incluir 'fin').");

        String codigo = "XXXASESINOXXX";
        String clave = codigo.substring(3, 10);
        System.out.println("Parte extraída: " + clave);

        // ==============================
        // FASE 5 - NÚMEROS SOSPECHOSOS
        // ==============================
        System.out.println("\nFASE 5: Encuentras un papel con varias distancias.");
        System.out.println("Necesitas saber cuál es la más grande para decidir a dónde ir.");

        // Teoría Math.max()
        System.out.println("\n[TEORÍA] Math.max(a, b): Devuelve el mayor de los dos números.");
        // Teoría Math.min()
        System.out.println("[TEORÍA] Math.min(a, b): Devuelve el menor de los dos números.");

        double distancia1 = 12.5;
        double distancia2 = 8.3;
        double distanciaMayor = Math.max(distancia1, distancia2);
        System.out.println("La mayor distancia es: " + distanciaMayor);

        // ==============================
        // FASE 6 - NÚMERO ALEATORIO
        // ==============================
        System.out.println("\nFASE 6: Un testigo dice que el asesino vive en un número al azar de la calle.");
        System.out.println("Necesitas generar un número aleatorio para investigar.");

        // Teoría Math.random()
        System.out.println("\n[TEORÍA] Math.random(): Genera un número aleatorio entre 0.0 y 1.0.");

        int numeroCasa = (int) (Math.random() * 100) + 1;
        System.out.println("Posible número de casa: " + numeroCasa);

        // ==============================
        // FASE 7 - REDONDEO DE TIEMPO
        // ==============================
        System.out.println("\nFASE 7: El forense te dice el tiempo estimado de muerte en horas.");
        System.out.println("Necesitas redondearlo para simplificar el informe.");

        // Teoría Math.round()
        System.out.println("\n[TEORÍA] Math.round(valor): Redondea un número decimal al entero más cercano.");

        double tiempoMuerte = 7.6;
        long tiempoRedondeado = Math.round(tiempoMuerte);
        System.out.println("Tiempo redondeado: " + tiempoRedondeado + " horas");

        // ==============================
        // CONCLUSIÓN
        // ==============================
        System.out.println("\n¡Has reunido todas las pistas! Con la información obtenida, puedes identificar al culpable.");
    }
}
