// Permitir tabulaciones en textareas
document.querySelectorAll("textarea").forEach(area => {
  area.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 4;
    }
  });
});

function runCode(num) {
  const code = document.getElementById("code" + num).value;
  const consoleBox = document.getElementById("console" + num);
  consoleBox.innerHTML = "";

  let passed = 0;
  let total = 0;
  let results = "";

  const testCases = getTests(num);

  testCases.forEach(test => {
    total++;
    let output = "";

    const fakeConsole = {
      log: (msg) => output += msg + "\n"
    };

    // Traductor Java → JS robusto
let jsCode = code
  .replace(/import .*;/g, "")
  .replace(/class\s+\w+\s*{?/g, "")
  .replace(/public static void main.*{?/g, "")
  .replace(/System\.out\.println/g, "fakeConsole.log")
  // --- Manejo de int y arreglos ---
  .replace(/int\[\]\s+(\w+)\s*=\s*new int\[(.+?)\];/g, "let $1 = new Array($2);") // arreglo inicializado
  .replace(/int\[\]\s+(\w+);/g, "let $1 = [];")                                   // arreglo sin inicializar
  .replace(/for\s*\(\s*int\s+/g, "for (let ")                                     // bucles
  .replace(/\bint\s+([a-zA-Z_]\w*(\s*=\s*[^,;]+)?(\s*,\s*[a-zA-Z_]\w*(\s*=\s*[^,;]+)?)*)(?=[;])/g, "let $1") // variables
  // --- Scanner ---
  .replace(/Scanner.*;/g, "// Scanner eliminado")
  .replace(/sc\.nextInt\(\)/g, "parseInt(prompt())")
  .replace(/nextInt\(\)/g, "parseInt(prompt())");


    let prompts = [...test.input];
    function fakePrompt() {
      return prompts.shift();
    }

    try {
      new Function("fakeConsole", "prompt", jsCode)(fakeConsole, fakePrompt);
      output = output.trim();

      // Filtrar salidas: ignorar mensajes de entrada
      let lines = output.split("\n").filter(l => l.trim() !== "");
      lines = lines.filter(l => {
        return /^-?\d+$/.test(l.trim()) || ["Ascendente", "Descendente", "Sin orden"].includes(l.trim());
      });

      if (lines.length === 1 && lines[0] === String(test.expected)) {
        passed++;
        results += `<div class="result-pass">✔ Entrada ${JSON.stringify(test.input)} → salida: ${lines[0]} (correcto)</div>`;
      } else if (lines.length > 1 && lines[lines.length - 1] === String(test.expected)) {
        results += `<div class="result-fail">❌ Entrada ${JSON.stringify(test.input)} → múltiples salidas relevantes: [${lines.join(", ")}] (esperado solo ${test.expected})</div>`;
      } else {
        results += `<div class="result-fail">❌ Entrada ${JSON.stringify(test.input)} → salida filtrada: [${lines.join(", ") || "(ninguna)"}] (esperado: ${test.expected})</div>`;
      }
    } catch (err) {
      results += `<div class="result-error">💥 Error en entrada ${JSON.stringify(test.input)}: ${err.message}</div>`;
    }
  });

  results += `<br><strong>Resultado: ${passed}/${total} pruebas superadas.</strong>`;
  consoleBox.innerHTML = results;
}

// Casos de prueba
function getTests(num) {
  if (num === 1) {
    return [
      { input: [1,2,3], expected: "Ascendente" },
      { input: [3,2,1], expected: "Descendente" },
      { input: [2,1,3], expected: "Sin orden" }
    ];
  } else if (num === 2) {
    return [
      { input: [5], expected: "15" },
      { input: [3], expected: "6" },
      { input: [1], expected: "1" }
    ];
  } else if (num === 3) {
    return [
      { input: [5, -3, 9, -1, -7, 0], expected: "3" },
      { input: [1, 2, 3, 0], expected: "0" },
      { input: [-5, -10, 0], expected: "2" }
    ];
  }
  return [];
}

// Exportar PDF por ejercicio
function exportPDF(num) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nombre = prompt("Ingrese Nombre y Apellido:");
  const ci = prompt("Ingrese CI:");

  const consignas = [
`1) (___ ptos) Crea un programa en Java que solicite tres números y luego imprima "Ascendente", "Descendente" o "Sin orden".
Ejemplos: (1,2,3) → Ascendente ; (3,2,1) → Descendente ; (2,1,3) → Sin orden.`,

`2) (___ ptos) Crear un programa que solicite un número entero y calcule la suma desde 1 hasta dicho número.
Ejemplo: Entrada 5 → salida 15.`,

`3) (___ ptos) Realizar un programa que solicite números hasta ingresar 0. Luego mostrar cuántos fueron negativos.
Ejemplo: Entrada (5, -3, 9, -1, -7, 0) → salida 3.`
  ];

  const code = document.getElementById("code" + num).value;
  const results = document.getElementById("console" + num).innerText;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text("Acreditación Septiembre 2025 – Programación 1", 10, 15);

  doc.setFontSize(12);
  doc.text(`Estudiante: ${nombre || "N/A"}`, 10, 25);
  doc.text(`CI: ${ci || "N/A"}`, 10, 32);

  doc.setFontSize(11);
  doc.text(consignas[num-1], 10, 45, {maxWidth: 180});

  doc.setFont("courier", "normal");
  doc.text("Código:", 10, 70);
  doc.setFontSize(9);
  doc.text(code || "(vacío)", 10, 78, {maxWidth: 180});

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Resultados de las pruebas:", 10, 120);
  doc.setFont("courier", "normal");
  doc.setFontSize(9);
  doc.text(results || "(sin ejecutar)", 10, 128, {maxWidth: 180});

  doc.save(`ejercicio${num}_acreditacion.pdf`);
}
