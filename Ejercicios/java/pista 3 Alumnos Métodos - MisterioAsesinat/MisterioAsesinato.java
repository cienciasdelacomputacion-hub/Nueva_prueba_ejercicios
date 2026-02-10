
public class MisterioAsesinato {
    public static void main(String[] args) {
        Metodos metodos=new Metodos();
// ==============================
        // FASE 3 - PALABRAS CLAVE
        // ==============================
        System.out.println("\nFASE 3: Entre varios papeles, encuentras una dirección.");
        System.out.println("Necesitas verificar si en ella aparece cierta palabra clave.");

        // Teoría String.contains()
        System.out.println("\n[TEORÍA] Método contains(): Verifica si una cadena contiene otra subcadena. Retorna true o false.");

        String direccion = metodos.pista3();
        System.out.println(direccion.length());
        
    }
    
    
    
}
