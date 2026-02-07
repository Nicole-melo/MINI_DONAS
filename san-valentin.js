function mostrarEjemploSV() {
  const cobertura = document.getElementById("coberturaSV").value;
  const ejemplo = document.getElementById("ejemploSV");
  const color = document.getElementById("colorSV");

  // Ocultar todo primero
  ejemplo.classList.add("oculto");
  color.classList.add("oculto");

  // Si es combinada
  if (cobertura === "Combinadas") {
    ejemplo.classList.remove("oculto");
    color.classList.remove("oculto");
    color.placeholder = "🎨 Ej: 3 rosadas y 3 blancas";
  }

  // Si es otro color
  if (cobertura === "Otro color") {
    color.classList.remove("oculto");
    color.placeholder = "🎨 Escribe el color que deseas";
  }
}


function pedirWhatsAppSanValentin() {
  const cantidad = document.getElementById("cantidadSV").value;
  const cobertura = document.getElementById("coberturaSV").value;
  const mensaje = document.getElementById("mensajeSV").value;

  if (!cantidad || !cobertura) {
    alert("Completa la cantidad y la cobertura 💕");
    return;
  }

  let texto = `Hola 😊 quiero pedir:
💘 Mini donas San Valentín
🍩 Cantidad: ${cantidad}
🍫 Cobertura: ${cobertura}
`;

  if (mensaje) {
    texto += `💌 Mensaje personalizado: ${mensaje}`;
  }

  window.open(
    "https://wa.me/573202471967?text=" + encodeURIComponent(texto),
    "_blank"
  );
}

