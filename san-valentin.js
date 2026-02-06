function mostrarEjemploSV() {
  const cobertura = document.getElementById("coberturaSV").value;
  const ejemplo = document.getElementById("ejemploSV");

  // Ocultar siempre primero
  ejemplo.classList.add("oculto");

  // Mostrar solo si es combinadas
  if (cobertura === "Combinadas") {
    ejemplo.classList.remove("oculto");
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

