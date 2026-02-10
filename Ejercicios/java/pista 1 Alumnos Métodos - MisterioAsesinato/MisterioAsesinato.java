public class MisterioAsesinato {
    public static void main(String[] args) {
        Metodos metodos=new Metodos();

        // ==============================
        // FASE 1 - LIMPIANDO LA PRIMERA PISTA
        // ==============================
        System.out.println("FASE 1: Encuentras una nota arrugada con espacios extra y todo en minúsculas.");
        System.out.println("Debes limpiarla y ponerla en mayúsculas para leerla claramente.");

        // Teoría String.trim()
        System.out.println("\n[TEORÍA] Método trim(): Elimina los espacios en blanco al inicio y al final de una cadena.");
        // Teoría String.toUpperCase()
        System.out.println("[TEORÍA] Método toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas.");

        String nota1 = metodos.pista1();
        
        String resultado=nota1.trim().toUpperCase();
        
       System.out.println(resultado);

        
    }
    
    
    
}
