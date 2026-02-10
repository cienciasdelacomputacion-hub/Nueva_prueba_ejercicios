"public class MisterioAsesinato {
    public static void main(String[] args) {
        Metodos metodos=new Metodos();
// ==============================
        // FASE 4 - CIFRADO PARCIAL
        // ==============================
        System.out.println("\nFASE 4: Una nota parece estar cifrada, pero sospechas que la parte útil es solo una sección.");
        System.out.println("Necesitas extraerla.");

        // Teoría String.substring()
        System.out.println("\n[TEORÍA] Método substring(inicio, fin): Devuelve una nueva cadena desde la posición 'inicio' hasta 'fin' (sin incluir 'fin').");
        
       String mensaje= metodos.pista3();
       String codigo = metodos.pista4();
       System.out.println(mensaje.length());
        
    }
    
    
    
}