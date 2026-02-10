let imagenAdjunta = null;

// Vista previa de imagen
document.getElementById("diagrama").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const previewDiv = document.getElementById("preview");
  previewDiv.innerHTML = ""; // limpiar preview
  imagenAdjunta = null;

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagenAdjunta = e.target.result;
      const img = document.createElement("img");
      img.src = imagenAdjunta;
      previewDiv.appendChild(img);
    };
    reader.readAsDataURL(file);
  } else {
    previewDiv.innerHTML = "<p style='color:#aaa'>Archivo adjuntado (no es imagen)</p>";
  }
});

async function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

  // Fondo
  doc.setFillColor(34, 34, 34);
  doc.rect(0, 0, 210, 297, "F");

  // Encabezado
  doc.setFont("courier", "normal");
  doc.setTextColor(0, 255, 136);
  doc.setFontSize(14);
  doc.text("🧩 Exploración: Algoritmos con Diagramas y Pseudocódigo", 15, 20);

  let y = 35;

  function escribirSeccion(titulo, contenido) {
    doc.setTextColor(0, 255, 136);
    doc.setFontSize(12);
    doc.text(titulo, 15, y);
    y += 8;

    doc.setFillColor(255, 255, 255);
    doc.rect(15, y, 180, 30, "F");

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    let texto = doc.splitTextToSize(contenido || "Sin respuesta", 175);
    doc.text(texto, 20, y + 8);

    y += 40;
  }

  // Respuestas
  escribirSeccion("📥 Entradas, Proceso y Salidas:", document.getElementById("eps").value);
  escribirSeccion("💻 Pseudocódigo:", document.getElementById("pseudocodigo").value);
  escribirSeccion("💡 Reflexiones:", document.getElementById("reflexion").value);

  // Si hay imagen, agregarla
  if (imagenAdjunta) {
    doc.setTextColor(0, 255, 136);
    doc.setFontSize(12);
    doc.text("🖼️ Diagrama de Flujo:", 15, y);
    y += 10;
    doc.addImage(imagenAdjunta, "PNG", 15, y, 100, 0); // ancho fijo, alto proporcional
  } else {
    doc.setTextColor(255, 255, 255);
    doc.text("No se adjuntó diagrama de flujo o no es imagen.", 15, y);
  }

  doc.save("exploracion_algoritmos.pdf");
}
