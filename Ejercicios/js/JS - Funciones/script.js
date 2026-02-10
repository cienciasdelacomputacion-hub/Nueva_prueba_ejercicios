// Una función simple que no recibe parámetros ni devuelve nada
function saludar() {
  console.log("¡Hola, mundo!");
}

saludar(); // Llamamos a la función: ¡Hola, mundo!
saludar(); // La llamamos de nuevo: ¡Hola, mundo!

// Una función que recibe un 'nombre' como parámetro
function saludarPersonalizado(nombre) {
  console.log("¡Hola, " + nombre + "! Bienvenido/a.");
}

saludarPersonalizado("Martín"); // Llamamos con "Martín": ¡Hola, Martín! Bienvenido/a.
saludarPersonalizado("Sofía");  // Llamamos con "Sofía": ¡Hola, Sofía! Bienvenido/a.

// Una función que recibe parámetros y devuelve un resultado
function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado; // 'return' es para que la función nos dé un valor que podemos usar
}

let sumaDeNumeros = sumar(5, 7); // La llamamos y guardamos su resultado en una variable
console.log("La suma es: " + sumaDeNumeros); // Output: La suma es: 12

console.log("Otra suma: " + sumar(100, 200)); // También podemos usarla directamente en un console.log
