let edadJuan = 20;
let edadMaria = 18;
console.log(edadJuan == edadMaria);  // ¿Es igual? (false)
console.log(edadJuan != edadMaria);  // ¿Es diferente? (true)
console.log(edadJuan > edadMaria);   // ¿Es mayor que? (true)
console.log(edadJuan <= 20);         // ¿Es menor o igual que? (true)

// ¡¡MUY IMPORTANTE: == vs. === !!
console.log(5 == "5");   // true (JavaScript intenta convertir el "5" a número antes de comparar)
console.log(5 === "5");  // false (Compara valor Y tipo de dato. Un número no es igual a un texto)
// Siempre que puedas, usa === para comparaciones más seguras.

