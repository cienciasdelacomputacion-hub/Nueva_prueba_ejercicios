/* new_activity.js (Versión: Contar Condicionalmente - Estilo Natural con PDF y Anti-IA) */
const pyodideReadyPromise = loadPyodide();
let pyodideGlobal;

// Definición de las pruebas para la función `contar_microsismos`
const TEST_CASES = [
    { input: [1.0, 3.0, 4.5, 2.0], expected: 2, description: "Dos microsismos (1.0 y 2.0)" },
    { input: [3.5, 4.0, 5.1, 2.5], expected: 0, description: "Ningún microsismo (2.5 no cuenta)" },
    { input: [1.5, 0.5, 2.4, 1.8], expected: 4, description: "Todos los eventos son microsismos" },
    { input: [], expected: 0, description: "Lista vacía (cero eventos)" },
    { input: [0.1], expected: 1, description: "Un solo evento microsismo" },
];

// Función auxiliar para capturar la salida de `print()`
function captureStdout(pyodide) {
    let stdout = "";
    pyodide.globals.set("js_print", (msg) => {
        stdout += String(msg) + "\n";
    });
    pyodide.runPython(`
import builtins
import io, sys
_original_print = builtins.print
def _custom_print(*args, **kwargs):
    s = io.StringIO()
    _original_print(*args, file=s, **kwargs)
    js_print(s.getvalue().rstrip('\\n'))
    
builtins.print = _custom_print
    `);
    return () => {
        pyodide.runPython(`builtins.print = _original_print`);
        return stdout;
    };
}

// ---------------------------------------------------
// NUEVA FUNCIÓN: Generar PDF de la Solución
// ---------------------------------------------------
function generatePDF() {
    // Necesitas una librería como jsPDF o usar funciones nativas para generar el archivo.
    // Usaremos un método simple con Blob para demostrar la funcionalidad de descarga.
    const userCode = document.getElementById('code-area').value;
    const activityName = "Actividad: Análisis de Datos Sísmicos (FOR/IF)";
    const instructions = `
INSTRUCCIONES:
Tu objetivo es crear la función 'contar_microsismos' que reciba la lista de intensidades y retorne la CANTIDAD de eventos que fueron microsismos (intensidad < 2.5).

----------------------------------------------
SOLUCIÓN DEL ESTUDIANTE:
----------------------------------------------
${userCode}
    `;

    const blob = new Blob([activityName + "\n\n" + instructions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Solucion_Microsismos_Ceibal.txt'; // Cambiado a .txt para simplicidad sin jsPDF
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    alert("Archivo de solución (.txt) generado con éxito. Recuerda usar un nombre de variable creativo.");
}

// ---------------------------------------------------
// FUNCIÓN PRINCIPAL: Ejecución y Pruebas
// ---------------------------------------------------
async function runCode() {
    const pyodide = pyodideGlobal;
    const userCode = document.getElementById('code-area').value;
    const resultsTableBody = document.getElementById('results-body');
    const finalMessageDiv = document.getElementById('final-message');
    let allPassed = true;
    
    resultsTableBody.innerHTML = '';
    
    // ---------------------------------------------------
    // PASO 1: VERIFICACIÓN ANTI-IA/COPIA
    // Expresión regular para encontrar 'for variable in lista:'
    const regex = /for\s+(\w+)\s+in\s+intensidades_sismicas:/; 
    const match = userCode.match(/for\s+(\w+)\s+in\s+/); // Busca la variable después de 'for ' y antes de ' in '
    
    if (match && match[1] === 'intensiadad') {
        const antiIACode = '¡Detectado exceso de IA/copia! Por favor. Debes volver a intentarlo. 🛑';
        
        document.getElementById('console-output').innerText = "❌ ERROR: " + antiIACode;
        finalMessageDiv.className = 'final-message message-fail';
        finalMessageDiv.innerHTML = antiIACode;
        
        // Llenar la tabla con fallos (Error de IA)
        for (let i = 0; i < TEST_CASES.length; i++) {
            const row = resultsTableBody.insertRow();
            row.className = 'status-fail';
            row.insertCell(0).innerText = `Prueba ${i + 1}`;
            row.insertCell(1).innerText = TEST_CASES[i].description;
            row.insertCell(2).innerText = 'N/A';
            row.insertCell(3).innerText = 'N/A';
            row.insertCell(4).innerText = 'ERROR DE IA';
            row.insertCell(5).innerText = '❌ FALLÓ';
        }
        return; // Detiene la ejecución y no da la palabra clave.
    }
    // ---------------------------------------------------

    finalMessageDiv.className = 'final-message';
    finalMessageDiv.innerText = 'Ejecutando pruebas...';
    
    // ... (El resto de la lógica de Pyodide y las pruebas permanece igual) ...
    const testCode = `
import builtins
${userCode}

try:
    def test_function(input_data):
        return contar_microsismos(input_data)
except NameError:
    def test_function(input_data):
        raise NameError("La función 'contar_microsismos' no está definida correctamente.")
`;
    
    let restoreStdout;
    try {
        restoreStdout = captureStdout(pyodide);
        
        await pyodide.runPythonAsync(testCode);

        for (const [index, testCase] of TEST_CASES.entries()) {
            const inputData = pyodide.toPy(testCase.input);
            pyodide.globals.set('input_data', inputData);
            
            const result = pyodide.runPython('test_function(input_data)');
            
            const resultJS = result.toJs ? result.toJs() : result;
            
            const passed = (resultJS === testCase.expected);
            
            if (!passed) {
                allPassed = false;
            }

            const row = resultsTableBody.insertRow();
            row.className = passed ? 'status-pass' : 'status-fail';
            
            row.insertCell(0).innerText = `Prueba ${index + 1}`;
            row.insertCell(1).innerText = testCase.description;
            row.insertCell(2).innerText = JSON.stringify(testCase.input).replace(/true/g, 'True').replace(/false/g, 'False'); 
            row.insertCell(3).innerText = String(testCase.expected);
            row.insertCell(4).innerText = String(resultJS);
            row.insertCell(5).innerText = passed ? '✅ PASÓ' : '❌ FALLÓ';
        }

        document.getElementById('console-output').innerText = restoreStdout();
        
    } catch (error) {
        document.getElementById('console-output').innerText = "❌ ERROR EN LA EJECUCIÓN O SINTAXIS:\n" + error.toString();
        allPassed = false;
        
        for (let i = 0; i < TEST_CASES.length; i++) {
            const row = resultsTableBody.insertRow();
            row.className = 'status-fail';
            row.insertCell(0).innerText = `Prueba ${i + 1}`;
            row.insertCell(1).innerText = TEST_CASES[i].description;
            row.insertCell(2).innerText = JSON.stringify(TEST_CASES[i].input).replace(/true/g, 'True').replace(/false/g, 'False');
            row.insertCell(3).innerText = String(TEST_CASES[i].expected);
            row.insertCell(4).innerText = 'ERROR';
            row.insertCell(5).innerText = '❌ FALLÓ';
        }
    } finally {
         if (restoreStdout) {
            restoreStdout(); 
        }
    }

    // 5. Mostrar mensaje final
    if (allPassed) {
        finalMessageDiv.className = 'final-message message-pass';
        finalMessageDiv.innerHTML = '¡TODAS LAS PRUEBAS SUPERADAS! ✅<br>La palabra clave es: **FLUJO-NATURAL**';
    } else {
        finalMessageDiv.className = 'final-message message-fail';
        finalMessageDiv.innerHTML = '⚠️ Algunas pruebas fallaron. Revisa tu lógica de conteo condicional (<code>if</code> dentro del <code>for</code>). ❌';
    }
}

// Inicialización
window.onload = async () => {
    pyodideGlobal = await pyodideReadyPromise;
    document.getElementById('code-area').addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const tab = "    "; 
            this.value = this.value.substring(0, start) + tab + this.value.substring(end);
            this.selectionStart = this.selectionEnd = start + tab.length;
        }
    });
};

window.runCode = runCode;
window.generatePDF = generatePDF; // Exportar la nueva función