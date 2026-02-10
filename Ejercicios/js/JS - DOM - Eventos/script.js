// --- 1. Selección de Elementos del DOM ---
// Buscamos la caja mágica en el HTML por su ID y la guardamos en una variable.
const cajaMagica = document.getElementById('cajaMagica');

// Guardamos el texto original para poder resetear la caja después.
const textoOriginal = '¡Interactúa conmigo!';

// --- 2. Asignación de Múltiples Eventos ---

// Evento 1: 'mouseover' (cuando el puntero del mouse entra en la caja)
cajaMagica.addEventListener('mouseover', function() {
    // Cambiamos el texto de la caja.
    cajaMagica.textContent = '¡Estás sobre mí!';
    // Cambiamos el color de fondo.
    cajaMagica.style.backgroundColor = '#ADD8E3'; // Un azul un poco más claro
});

// Evento 2: 'mouseout' (cuando el puntero del mouse sale de la caja)
cajaMagica.addEventListener('mouseout', function() {
    // Devolvemos el texto y el color al estado original.
    cajaMagica.textContent = textoOriginal;
    cajaMagica.style.backgroundColor = '#B0C4DE';
});

// Evento 3: 'click' (cuando se hace un solo clic en la caja)
cajaMagica.addEventListener('click', function() {
    // Mostramos un mensaje diferente sin cambiar el color.
    cajaMagica.textContent = '¡Auch! ¡Hiciste clic!';
});

// Evento 4: 'dblclick' (cuando se hace doble clic en la caja)
cajaMagica.addEventListener('dblclick', function() {
    // Aplicamos un estilo "especial" por el doble clic.
    cajaMagica.style.backgroundColor = '#FFD700'; // Color dorado
    cajaMagica.style.borderColor = '#B8860B';   // Borde dorado oscuro
    cajaMagica.textContent = '¡Poder Mágico Activado!';
});

// Evento 5: 'keydown' (cuando se presiona una tecla en CUALQUIER LUGAR de la página)
// Agregamos el listener a todo el 'documento'.
document.addEventListener('keydown', function(event) {
    // El objeto 'event' nos dice qué tecla se presionó.
    // Comprobamos si la tecla fue 'r' (mayúscula o minúscula).
    if (event.key.toLowerCase() === 'r') {
        // Si fue 'r', reseteamos todos los estilos y el texto al original.
        cajaMagica.style.backgroundColor = '#B0C4DE';
        cajaMagica.style.borderColor = '#4682B4';
        cajaMagica.textContent = textoOriginal;
        console.log("Caja reseteada con la tecla 'r'.");
    }
});