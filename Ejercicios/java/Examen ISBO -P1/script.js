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
  consoleBox.textContent = "";

  try {
    let passed = 0;
    let total = 0;
    let results = "";

    const testCases = getTests(num);

    testCases.forEach(test => {
      total++;
      let output = "";
      let executionError = null;

      const fakeConsole = {
        log: (msg) => output += msg + "\n"
      };

      // Traductor Java → JS
      let jsCode = code
        .replace(/import .*;/g, "")
        .replace(/class\s+\w+\s*{?/g, "")
        .replace(/public static void main.*{?/g, "")
        .replace(/System\.out\.println/g, "fakeConsole.log")
        .replace(/\bint\s+/g, "let ")
        .replace(/Scanner.*;/g, "// Scanner eliminado")
        .replace(/sc\.nextInt\(\)/g, "parseInt(prompt())")
        .replace(/nextInt\(\)/g, "parseInt(prompt())");

      // Simulación de entradas
      let prompts = [...test.input];
      function fakePrompt() {
        return prompts.shift();
      }

      try {
        // ⚡ Ejecutar con timeout para evitar bucles infinitos
        const exec = new Promise((resolve, reject) => {
          try {
            new Function("fakeConsole", "prompt", jsCode)(fakeConsole, fakePrompt);
            resolve();
          } catch (e) {
            reject(e);
          }
        });

        // Si no termina en 500ms → forzamos error
        const result = Promise.race([
          exec,
          new Promise((_, reject) => setTimeout(() => reject(new Error("Ejecución demasiado larga (posible bucle infinito)")), 500))
        ]);

        // Esperar ejecución
        return result.then(() => {
          checkOutput(test, output, () => { passed++; }, (msg) => results += msg);
          if (total === testCases.length) {
            results += `\nResultado: ${passed}/${total} pruebas superadas.`;
            consoleBox.textContent = results;
          }
        }).catch(err => {
          results += `💥 Error en entrada ${JSON.stringify(test.input)}: ${err.message}\n`;
          if (total === testCases.length) {
            results += `\nResultado: ${passed}/${total} pruebas superadas.`;
            consoleBox.textContent = results;
          }
        });

      } catch (err) {
        executionError = err;
        results += `💥 Error en entrada ${JSON.stringify(test.input)}: ${err.message}\n`;
      }
    });
  } catch (err) {
    consoleBox.textContent = "❌ Error general: " + err.message;
  }
}

// Validar salida final (una sola línea y valor correcto)
function checkOutput(test, output, onPass, onFail) {
  output = output.trim();
  const lines = output.split("\n").filter(l => l.trim() !== "");

  if (lines.length === 1 && lines[0] === String(test.expected)) {
    onPass();
    onFail(`✔️ Entrada ${JSON.stringify(test.input)} → ${lines[0]}\n`);
  } else if (lines.length > 1 && lines[lines.length - 1] === String(test.expected)) {
    onFail(`❌ Entrada ${JSON.stringify(test.input)} → múltiples salidas (${output}) (esperado: ${test.expected} en una sola línea)\n`);
  } else {
    onFail(`❌ Entrada ${JSON.stringify(test.input)} → ${output} (esperado: ${test.expected})\n`);
  }
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
