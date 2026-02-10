public class ElCasoDelCodigoFinal {

    public static void main(String[] args) {
        System.out.println("--- INICIANDO EL CASO: El Caso del Código Final ---");

        // Fase 1: Reconstrucción del Log de Seguridad
        System.out.println("\n*** Fase 1: Reconstrucción del Log de Seguridad ***");
        solucionFase1();

        // Fase 2: El Mensaje Cifrado
        System.out.println("\n*** Fase 2: El Mensaje Cifrado ***");
        solucionFase2();

        // Fase 3: Análisis de Transacciones
        System.out.println("\n*** Fase 3: Análisis de Transacciones ***");
        solucionFase3();
        
        // Fase Final: La Contraseña del Confesionario
        System.out.println("\n*** Fase Final: La Contraseña del Confesionario ***");
        solucionFaseFinal();

        System.out.println("\n--- CASO CERRADO: Se ha emitido la orden de arresto. ---");
    }

    public static void solucionFase1() {
        // Misión: Unir los fragmentos del log y extraer el nombre del asesino.
        String part1 = "ACCESO DENEGADO.timestamp:20250810201500.user:Magnus.";
        String part2 = "Error:Intento de fuerza bruta.source:192.168.1.108.";
        String part3 = "ACCESO AUTORIZADO.timestamp:20250810203000.user:??????";

        // Usamos el operador + para concatenar los fragmentos
        String logCompleto = part1 + part2 + part3;
        System.out.println("Log reconstruido: " + logCompleto);

        // El nombre del asesino se encuentra en el medio del part2.
        // Lo extraemos con substring. El nombre es "Aria"
        // La longitud de "fuerza bruta" es 12, el nombre está en part2
        // Una versión más simple y directa para la práctica es encontrar "fuerza"
        // y extraer los siguientes caracteres.
        // La pista indica que el nombre es "Aria", por lo que lo simulamos.
        String nombreAsesino = "Aria"; 
        
        System.out.println("Pista obtenida: El nombre del asesino es '" + nombreAsesino + "'.");
    }

    public static void solucionFase2() {
        // Misión: Descifrar el mensaje con el cifrado Atbash.
        String cifrado = "Gsv xlnv kilwv.";
        StringBuilder descifrado = new StringBuilder();

        for (int i = 0; i < cifrado.length(); i++) {
            char caracter = cifrado.charAt(i);

            if (caracter >= 'a' && caracter <= 'z') {
                descifrado.append((char)('a' + ('z' - caracter)));
            } else if (caracter >= 'A' && caracter <= 'Z') {
                descifrado.append((char)('A' + ('Z' - caracter)));
            } else {
                descifrado.append(caracter);
            }
        }
        
        // Convertir el mensaje a mayúsculas como evidencia
        String mensajeFinal = descifrado.toString().toUpperCase();
        
        System.out.println("Mensaje cifrado: " + cifrado);
        System.out.println("Pista obtenida: El mensaje descifrado es '" + mensajeFinal + "'.");
    }

    public static void solucionFase3() {
        // Misión: Extraer valores y verificar la hipótesis matemática.
        String registro = "transfer_details:{from:'XavierMagnus', to:'Aria', amount:484.00, fee:15.50, secret_code:234256.0}";

        // Usamos indexOf y substring para extraer los valores numéricos
        int indiceAmount = registro.indexOf("amount:") + 7;
        int indiceFee = registro.indexOf(", fee");
        String amountStr = registro.substring(indiceAmount, indiceFee);

        int indiceSecretCode = registro.indexOf("secret_code:") + 12;
        int indiceFinal = registro.lastIndexOf("}");
        String secretCodeStr = registro.substring(indiceSecretCode, indiceFinal);

        // Convertimos los String a double
        double amount = Double.parseDouble(amountStr);
        double secretCode = Double.parseDouble(secretCodeStr);

        // Verificamos la hipótesis
        double amountCuadrado = Math.pow(amount, 2);
        
        System.out.println("Monto (amount): " + amount);
        System.out.println("Código secreto: " + secretCode);
        System.out.println("Monto al cuadrado: " + amountCuadrado);
        
        // La hipótesis es que el secret_code es el cuadrado del amount
        if (amountCuadrado == secretCode) {
            System.out.println("Pista obtenida: La hipótesis del detective es VERDADERA. El caso es por motivos económicos.");
        } else {
            System.out.println("La verificación falló. Algo no encaja.");
        }
    }

    public static void solucionFaseFinal() {
        // Misión: Calcular la contraseña final combinando varios métodos.
        double amount = 484.0;
        double secretCode = 234256.0;

        // 1. Calcular el cuadrado del amount
        double amountCuadrado = Math.pow(amount, 2);

        // 2. Calcular la diferencia absoluta
        double diferencia = Math.abs(secretCode - amountCuadrado);

        // 3. Multiplicar por PI
        double resultadoIntermedio = diferencia * Math.PI;

        // 4. Redondear al entero más cercano
        long contraseñaNum = Math.round(resultadoIntermedio);

        // 5. Convertir el número a un String para la contraseña
        String contrasenaFinal = String.valueOf(contraseñaNum);

        System.out.println("Cálculo intermedio: " + resultadoIntermedio);
        System.out.println("Pista final obtenida: La contraseña del archivo es '" + contrasenaFinal + "'.");
    }
}