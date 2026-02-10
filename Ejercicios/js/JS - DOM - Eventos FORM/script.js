// --- 1. Selección de Elementos del DOM ---
// Buscamos la caja mágica en el HTML por su ID y la guardamos en una variable.
const tuTexto = document.getElementById('tuTexto');
const espejo = document.getElementById('espejo');

tuTexto.addEventListener('input', function() {
  // El valor actual del input se asigna al textContent del span
  espejo.textContent = tuTexto.value;
  espejo.style.color='red';
});

