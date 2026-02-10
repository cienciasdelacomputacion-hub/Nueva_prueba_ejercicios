// ==============================
// Script principal — "De boliche en boliche"
// - Carga Pyodide
// - Genera timeline
// - Carga misiones 1..11 (las mismas de tu versión anterior)
// - Ejecuta código en Pyodide y valida pruebas
// - Soporta stdin simulado (textarea) para misiones con input()
// ==============================

let pyodide = null;
let attempts = 0;
let currentExercise = '1';
let exerciseStates = {};
let globalTests = [];

const ALL_EXERCISES = {
  '1': {
    title: 'Misión 1: Variables dispersas',
    consigna: 'Una historiadora registró datos de monumentos uruguayos en variables separadas, lo cual es ineficiente. Observa cómo agrupar esa información en diccionarios. No necesitas escribir código, solo presiona Ejecutar.',
    ejemplos: `<p>La información del Faro de Punta Brava y el Palacio Salvo ya está agrupada. Revisa la consola para ver el resultado de los <code>print()</code>.</p>`,
    code: `nombre_faros = "Faro de Punta Brava"
locacion_faros = "Montevideo"
anio_faros = 1876

# Forma eficiente: usando diccionarios
faro_punta_brava = { "nombre": "Faro de Punta Brava", "locacion": "Montevideo", "anio": 1876 }
palacio_salvo = { "nombre": "Palacio Salvo", "locacion": "Montevideo", "anio": 1928 }

print("Faros del Puerto (variables separadas):", nombre_faros, anio_faros)
print("Palacio Salvo (diccionario):", palacio_salvo["nombre"], palacio_salvo["anio"])`,
    tests: [
      { query: `palacio_salvo["anio"]`, description: 'Acceso al año del Palacio Salvo', expected: 1928 },
      { query: `faro_punta_brava["nombre"]`, description: 'Acceso al nombre del Faro de Punta Brava', expected: 'Faro de Punta Brava' }
    ]
  },

  '2': {
    title: 'Misión 2: Catalogando Monumentos Únicos',
    consigna: 'Crea dos diccionarios, <code>bandera_de_rosario</code> y <code>monumento_las_piedras</code>, con "nombre", "locacion" y "anio_construccion".',
    ejemplos: `<ul><li><b>Bandera de Rosario:</b> Rosario, Argentina — año 1957</li><li><b>Monumento Las Piedras:</b> Las Piedras, Uruguay — año 1911</li></ul>`,
    code: `bandera_de_rosario = {
    "nombre": "Monumento Nacional a la Bandera",
    "locacion": "Rosario, Argentina",
    "anio_construccion": 1957
}

monumento_las_piedras = {
    "nombre": "Monumento a la Batalla de Las Piedras",
    "locacion": "Las Piedras, Uruguay",
    "anio_construccion": 1911
}`,
    tests: [
      { query: `isinstance(bandera_de_rosario, dict)`, description: 'bandera_de_rosario es un diccionario', expected: true },
      { query: `bandera_de_rosario.get("anio_construccion")`, description: 'Año de construcción de Rosario', expected: 1957 },
      { query: `isinstance(monumento_las_piedras.get("anio_construccion"), int)`, description: 'El año es tipo int', expected: true },
      { query: `monumento_las_piedras.get("nombre")`, description: 'Nombre del monumento uruguayo', expected: 'Monumento a la Batalla de Las Piedras' }
    ]
  },

  '3': {
    title: 'Misión 3: El Mercado del Puerto',
    consigna: 'Inicializa los platos típicos <code>chivito</code>, <code>asado</code> y <code>milanesa</code> como diccionarios con "nombre", "precio_uy" e "apto_vegetariano".',
    ejemplos: `<ul><li><b>Chivito:</b> $450, vegetariano: False</li><li><b>Asado:</b> $600, vegetariano: False</li><li><b>Milanesa:</b> $350, vegetariano: True</li></ul>`,
    code: `chivito = {
    "nombre": "Chivito al Plato",
    "precio_uy": 450,
    "apto_vegetariano": False
}

asado = {
    "nombre": "Asado con Guarnición",
    "precio_uy": 600,
    "apto_vegetariano": False
}

milanesa = {
    "nombre": "Milanesa Napolitana",
    "precio_uy": 350,
    "apto_vegetariano": True
}`,
    tests: [
      { query: `chivito.get("precio_uy")`, description: 'Precio del Chivito', expected: 450 },
      { query: `asado.get("apto_vegetariano")`, description: 'Asado es vegetariano (False)', expected: false },
      { query: `isinstance(milanesa.get("precio_uy"), int)`, description: 'Precio de Milanesa es int', expected: true }
    ]
  },

  '4': {
    title: 'Misión 4: Reporte de Platos',
    consigna: 'Define la función <code>reporte_de_plato(plato)</code> que reciba un diccionario y retorne un string con nombre y precio.',
    ejemplos: `<p><code>reporte_de_plato(chivito)</code> => <code>"El Chivito al Plato tiene un precio de 450 pesos"</code></p>`,
    code: `def reporte_de_plato(plato):
    nombre = plato["nombre"]
    precio = plato["precio_uy"]
    return "El " + nombre + " tiene un precio de " + str(precio) + " pesos"

# Diccionarios de prueba
chivito = {"nombre": "Chivito al Plato", "precio_uy": 450}
milanesa = {"nombre": "Milanesa Napolitana", "precio_uy": 350}`,
    tests: [
      { query: `reporte_de_plato(chivito)`, description: 'Prueba con Chivito', expected: 'El Chivito al Plato tiene un precio de 450 pesos' },
      { query: `reporte_de_plato(milanesa)`, description: 'Prueba con Milanesa', expected: 'El Milanesa Napolitana tiene un precio de 350 pesos' }
    ]
  },

  '5': {
    title: 'Misión 5: Modificando Precios',
    consigna: 'Define <code>actualizar_precio(plato, nuevo_precio)</code> que modifique la clave <code>"precio_uy"</code>.',
    code: `def actualizar_precio(plato, nuevo_precio):
    plato["precio_uy"] = nuevo_precio

chivito = { "nombre": "Chivito al Plato", "precio_uy": 450, "apto_vegetariano": False }`,
    tests: [
      { query: `actualizar_precio(chivito, 500); chivito["precio_uy"]`, description: 'Precio modificado a 500', expected: 500 },
      { query: `chivito["apto_vegetariano"]`, description: 'Campo vegetariano sin modificar', expected: false }
    ]
  },

  '6': {
    title: 'Misión 6: Productos de Época',
    consigna: 'Define <code>es_de_la_vieja_escuela(producto)</code>. Retorna True si el año en "fecha_lanzamiento" (DD/MM/AAAA) es anterior a 2005.',
    code: `def obtener_anio(fecha_str):
    return int(fecha_str.split('/')[-1])

def es_de_la_vieja_escuela(producto):
    anio_lanzamiento = obtener_anio(producto["fecha_lanzamiento"])
    return anio_lanzamiento < 2005

prod_viejo = { "fecha_lanzamiento": "14/09/2004" }
prod_nuevo = { "fecha_lanzamiento": "25/09/2017" }`,
    tests: [
      { query: `es_de_la_vieja_escuela(prod_viejo)`, description: 'Producto de 2004', expected: true },
      { query: `es_de_la_vieja_escuela(prod_nuevo)`, description: 'Producto de 2017', expected: false }
    ]
  },

  '7': {
    title: 'Misión 7: Postres Complejos (Lista en Diccionario)',
    consigna: 'Define <code>mas_dificil_de_cocinar(p1, p2)</code> que retorne el diccionario del postre con más ingredientes.',
    didactica: `<h3>Didáctica: Lista como campo de diccionario</h3>
               <p>Una lista puede ser el valor de una clave en un diccionario. Usa <code>len()</code> sobre la lista de ingredientes.</p>`,
    code: `def mas_dificil_de_cocinar(postre1, postre2):
    if len(postre1["ingredientes"]) >= len(postre2["ingredientes"]):
        return postre1
    else:
        return postre2

chaja = { "ingredientes": ["m", "d", "c", "b"], "tiempo_de_coccion": 40 }
pastafrola = { "ingredientes": ["harina", "membrillo"], "tiempo_de_coccion": 50 }`,
    tests: [
      { query: `mas_dificil_de_cocinar(chaja, pastafrola)["tiempo_de_coccion"]`, description: 'Retorna chajá', expected: 40 },
      { query: `mas_dificil_de_cocinar(pastafrola, chaja)["tiempo_de_coccion"]`, description: 'Retorna chajá (4>2)', expected: 40 }
    ]
  },

  '8': {
    title: 'Misión 8: Listas de Diccionarios',
    consigna: 'Observa la estructura de <code>postres_favoritos</code> y <code>lugares_historicos</code>. Presiona Ejecutar para inspeccionar.',
    code: `postres_favoritos = [
    {"nombre": "Chajá", "minutos": 45},
    {"nombre": "Ricardito", "minutos": 5}
]

lugares_historicos = [
    {"nombre": "Palacio Legislativo", "anio": 1925},
    {"nombre": "Fortaleza del Cerro", "anio": 1809}
]

print("Primer postre favorito:", postres_favoritos[0]["nombre"])
print("Año del segundo lugar:", lugares_historicos[1]["anio"])`,
    tests: [
      { query: `lugares_historicos[0]["anio"]`, description: 'Año del primer lugar histórico', expected: 1925 },
      { query: `postres_favoritos[1]["minutos"]`, description: 'Minutos del segundo postre', expected: 5 }
    ]
  },

  '9': {
    title: 'Misión 9: 60 Dulces Minutos',
    consigna: 'Define <code>agregar_a_postres_rapidos(lista_rapidos, postre)</code>. Agrega el postre solo si su "tiempo_de_coccion" <= 60.',
    code: `def agregar_a_postres_rapidos(lista_rapidos, postre):
    if postre["tiempo_de_coccion"] <= 60:
        lista_rapidos.append(postre)

postres_rapidos_test = []
chaja = { "nombre": "chajá", "tiempo_de_coccion": 40 }
tarta = { "nombre": "tarta de manzana", "tiempo_de_coccion": 80 }
agregar_a_postres_rapidos(postres_rapidos_test, chaja)
agregar_a_postres_rapidos(postres_rapidos_test, tarta)`,
    tests: [
      { query: `len(postres_rapidos_test)`, description: 'Solo se debe agregar el postre rápido', expected: 1 },
      { query: `postres_rapidos_test[0].get("nombre")`, description: 'El postre agregado debe ser el chajá', expected: 'chajá' }
    ]
  },

  '10': {
    title: 'Misión 10: Diccionario en Diccionario (¡Azúcar!)',
    consigna: 'Define <code>endulzar_menu(menu)</code> que agregue "azúcar" a la lista de ingredientes del postre dentro del menú.',
    didactica: `<h3>Didáctica: Diccionario anidado</h3><p>Accede secuencialmente: <code>menu["postre"]["ingredientes"]</code></p>`,
    code: `def endulzar_menu(menu):
    postre = menu["postre"]
    postre["ingredientes"].append("azúcar")

menu_del_dia = {
  "plato_principal": "milanesas",
  "postre": { "ingredientes": ["queso crema", "frambuesas"], "tiempo_de_coccion": 80 }
}

endulzar_menu(menu_del_dia)`,
    tests: [
      { query: `len(menu_del_dia["postre"]["ingredientes"])`, description: 'El postre debe tener 3 ingredientes', expected: 3 },
      { query: `"azúcar" in menu_del_dia["postre"]["ingredientes"]`, description: 'El ingrediente "azúcar" debe estar presente', expected: true },
      { query: `menu_del_dia["postre"]["ingredientes"][-1]`, description: 'Azúcar debe ser el último ingrediente', expected: 'azúcar' }
    ]
  },

  '11': {
    title: 'Misión 11: Registrando un Pedido (Estructura de Datos)',
    consigna: 'Define <code>realizar_pedido(cliente, boliche, platos)</code> que retorne un diccionario con "cliente", "boliche" y "platos_solicitados". Además, se agrega una parte interactiva: un flujo que pide datos por consola (simulado en la web) y se detiene cuando el cliente escribe "salir".',
    didactica: `<h3>Estructura del Pedido</h3><p>Encapsula un pedido completo como un diccionario. La parte interactiva usa <code>input()</code> y la web simula la entrada mediante un textarea (stdin).</p>`,
    code: `def realizar_pedido(cliente, boliche, platos):
    nuevo_pedido = {
        "cliente": cliente,
        "boliche": boliche,
        "platos_solicitados": platos
    }
    return nuevo_pedido

# Parte interactiva (usa input() para pedir datos — en la web se simula stdin con un textarea)
def registrar_pedidos_console():
    pedidos = []
    while True:
        nombre = input("Nombre del cliente (o 'salir' para finalizar): ")
        if nombre.lower() == "salir":
            break
        boliche = input("Nombre del boliche: ")
        platos_raw = input("Platos solicitados (separados por coma): ")
        platos = [p.strip() for p in platos_raw.split(",") if p.strip()]
        pedidos.append(realizar_pedido(nombre, boliche, platos))
    print("Pedidos registrados:", pedidos)
    return pedidos

# Para probar sin interacción, puedes llamar:
# realizar_pedido("Juan", "Roldós", ["Chivito", "Milanesa"])`,
    tests: [
      { query: `isinstance(realizar_pedido("Juan", "Roldós", ["Chivito"]), dict)`, description: 'El retorno es un diccionario', expected: true },
      { query: `realizar_pedido("Juan", "Roldós", ["Chivito"])["boliche"]`, description: 'Contiene el boliche correcto', expected: 'Roldós' },
      { query: `realizar_pedido("Juan", "Roldós", ["Chivito"])["platos_solicitados"][0]`, description: 'Contiene los platos correctamente', expected: 'Chivito' }
    ]
  }
}; // FIN ALL_EXERCISES

// ---------------------------
// UI: crear timeline
// ---------------------------
function generateTimeline(){
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  Object.keys(ALL_EXERCISES).forEach(key => {
    const btn = document.createElement('button');
    btn.innerText = `Misión ${key}`;
    btn.dataset.mission = key;
    btn.onclick = () => loadExercise(key);
    if (key === currentExercise) btn.classList.add('active');
    timeline.appendChild(btn);
  });
}

// ---------------------------
// Cargar ejercicio en pantalla
// ---------------------------
function loadExercise(key){
  currentExercise = key;
  attempts = 0;
  document.getElementById('attempts-counter').innerText = attempts;
  globalTests = ALL_EXERCISES[key].tests || [];
  // actualizar active en timeline
  document.querySelectorAll('#timeline button').forEach(b => b.classList.toggle('active', b.dataset.mission===key));

  const data = ALL_EXERCISES[key];
  const wrapper = document.getElementById('exercise-wrapper');

  let html = `
    <article class="mission-card">
      <h2>💡 Misión ${key}: ${data.title}</h2>
      <p><strong>Consigna:</strong> ${data.consigna}</p>
      <div class="didactica">
        ${data.didactica || `<p><strong>Ejemplos y estructuras:</strong></p>${data.ejemplos || ''}`}
      </div>
      <h3>🧠 Código sugerido</h3>
      <pre><code id="code-sample">${data.code}</code></pre>
    </article>
  `;
  wrapper.innerHTML = html;

  // Cargar código en editor
  document.getElementById('code-editor').value = data.code.trim();

  // mostrar/ocultar stdin panel (si el código contiene input)
  const showsStdin = data.code.includes('input(');
  document.getElementById('stdin-panel').style.display = showsStdin ? 'block' : 'none';

  // limpiar consola y validación
  document.getElementById('output').innerText = 'Ejercicio cargado. Ajusta el código y presiona Ejecutar.';
  document.getElementById('validation-body').innerHTML = '';
}

// ---------------------------
// Inicializar Pyodide
// ---------------------------
async function initializePyodide(){
  document.getElementById('output').innerText = '⏳ Cargando Pyodide...';
  pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/" });
  document.getElementById('output').innerText = '✅ Pyodide cargado. ¡Listo!';
  document.getElementById('run-button').disabled = false;
  generateTimeline();
  loadExercise(currentExercise);
}

// ---------------------------
// Ejecutar código y validar
// ---------------------------

async function runCode(){
  if (!pyodide) return;
  const code = document.getElementById('code-editor').value;
  const outputEl = document.getElementById('output');
  const validationBody = document.getElementById('validation-body');

  attempts++;
  document.getElementById('attempts-counter').innerText = attempts;
  outputEl.innerText = '⏳ Ejecutando código...';

  // limpiar estado pyodide
  pyodide.globals.clear();

  // preparar stdin si existe
  let stdinText = '';
  const stdinPanel = document.getElementById('stdin-panel');
  if (stdinPanel && stdinPanel.style.display !== 'none') {
    stdinText = document.getElementById('stdin-input').value || '';
  }

  const setupCode = `
import io, sys
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`;
  // si hay stdinText, inyectarlo como sys.stdin
  const stdinInjection = stdinText ? `sys.stdin = io.StringIO(r'''${stdinText}''')\n` : '';

  let passedAll = true;
  let printOutput = '';
  let errorOutput = '';

  try {
    // Ejecutar: setup + posible stdin + código del usuario
    pyodide.runPython(setupCode + stdinInjection + code);

    // capturar salidas
    printOutput = pyodide.runPython("sys.stdout.getvalue()");
    errorOutput = pyodide.runPython("sys.stderr.getvalue()");

    // Ejecutar pruebas
    let resultsHTML = '';
    for (const test of globalTests) {
      let result, resultText, passed;
      try {
        // Reemplazo especial si consulta incluye printOutput (no usado aquí, pero útil)
        if (test.query && test.query.includes('printOutput')) {
          const queryWith = test.query.replace('printOutput', `'''${printOutput}'''`);
          result = pyodide.runPython(queryWith);
          if (result?.toJs) result = result.toJs();
        } else {
          result = pyodide.runPython(test.query);
          if (result?.toJs) result = result.toJs();
        }
        resultText = String(result);
        passed = (result === test.expected);
      } catch (e) {
        resultText = `ERROR: ${String(e)}`;
        passed = false;
      }

      resultsHTML += `<tr>
          <td><code>${test.query}</code></td>
          <td>${test.description}</td>
          <td>${test.expected}</td>
          <td>${resultText}</td>
          <td>${passed ? '<span style="color:var(--success)">✅ PASÓ</span>' : '<span style="color:var(--error)">❌ FALLÓ</span>'}</td>
        </tr>`;
      if (!passed) passedAll = false;
    }
    validationBody.innerHTML = resultsHTML;

  } catch (err) {
    // error fatal de ejecución/sintaxis
    try { errorOutput = pyodide.runPython("sys.stderr.getvalue()") } catch(e) {}
    errorOutput = errorOutput || String(err);
    validationBody.innerHTML = `<tr><td colspan="5" style="color:var(--error)">❌ ERROR: Revisa el código. ${errorOutput}</td></tr>`;
    passedAll = false;
  }

  // preparar salida visible
  let consoleText = printOutput ? printOutput.trim() : '';
  if (errorOutput && errorOutput.trim()) {
    consoleText += (consoleText ? '\n\n' : '') + '--- ERROR DE PYTHON ---\n' + errorOutput.trim();
  }
  outputEl.innerText = (consoleText ? consoleText + '\n\n---\n' : '') + (passedAll ? '🎉 ¡Excelente! Todas las pruebas pasaron.' : '⚠️ Revisa la validación y vuelve a intentar.');

  // actualizar estado
  exerciseStates[currentExercise] = passedAll ? 'pass' : 'fail';
  // actualizar timeline visual marcando los que pasaron
  document.querySelectorAll('#timeline button').forEach(b => {
    if (exerciseStates[b.dataset.mission] === 'pass') b.classList.add('completed');
    else b.classList.remove('completed');
  });
}

// ---------------------------
// Restaurar plantilla (poner el código sugerido otra vez)
// ---------------------------
function resetTemplate(){
  const data = ALL_EXERCISES[currentExercise];
  if (!data) return;
  document.getElementById('code-editor').value = data.code.trim();
  document.getElementById('validation-body').innerHTML = '';
  document.getElementById('output').innerText = 'Plantilla restaurada. Ajusta el código si querés y presiona Ejecutar.';
}

// ---------------------------
// Eventos UI
// ---------------------------
document.getElementById('run-button').addEventListener('click', runCode);
document.getElementById('reset-button').addEventListener('click', resetTemplate);

// permitir tabulación en el editor
document.getElementById('code-editor').addEventListener('keydown', function(e){
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = this.selectionStart;
    this.value = this.value.substring(0, start) + "    " + this.value.substring(this.selectionEnd);
    this.selectionStart = this.selectionEnd = start + 4;
  }
});

// arrancar
initializePyodide();
generateTimeline();
