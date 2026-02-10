a    <textarea id="input5" placeholder="Escribe aquí la distancia mayor (ejemplo: 12.5)"></textarea>

public class MisterioAsesinato {
    public static void main(String[] args) {
        Metodos metodos=new Metodos();
        // ==============================
        // FASE 5 - NÚMEROS SOSPECHOSOS
        // ==============================
        System.out.println("\nFASE 5: Encuentras un papel con varias distancias.");
        System.out.println("Necesitas saber cuál es la más grande para decidir a dónde ir.");

        // Teoría Math.max()
        System.out.println("\n[TEORÍA] Math.max(a, b): Devuelve el mayor de los dos números.");
        // Teoría Math.min()
        System.out.println("[TEORÍA] Math.min(a, b): Devuelve el menor de los dos números.");

        double distancia1 = metodos.pista5_a();
        double distancia2 =metodos.pista5_b();
        double distancia3 = metodos.pista5_c();
        
        

        
    }
    
    
    
}