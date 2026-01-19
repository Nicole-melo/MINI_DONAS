// ================= MINI DONAS =================
function pedirWhatsAppMiniDonas() {
  const cantidad = document.getElementById("cantidad1").value;
  const nota = document.getElementById("nota1").value;

  if (!cantidad) {
    alert("Ingresa la cantidad");
    return;
  }

  let mensaje = `Hola 😊 quiero pedir:
🍩 Mini donas
📦 Cantidad: ${cantidad}
`;

  if (nota) mensaje += `📝 Detalles: ${nota}`;

  window.open(
    "https://wa.me/573112620998?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}

// ================= COBERTURA =================
function mostrarColorOtro() {
  const cobertura = document.getElementById("cobertura").value;
  const color = document.getElementById("colorOtro");
  const mensaje = document.getElementById("mensajeNormal");
  const ejemplo = document.getElementById("ejemploCombinada");

  color.style.display = "none";
  mensaje.style.display = "none";
  ejemplo.style.display = "none";

  if (cobertura === "Otro color") {
    color.style.display = "block";
    mensaje.style.display = "block";
    color.placeholder = "🎨Escribe el color que desees";
  }

  if (cobertura === "Combinada") {
    color.style.display = "block";
    ejemplo.style.display = "block";
    color.placeholder = "✨ Escribe los colores que desees";
  }
}


function pedirWhatsAppMiniDonasCobertura() {
  const cantidad = document.getElementById("cantidadCobertura").value;
  const cobertura = document.getElementById("cobertura").value;
  const color = document.getElementById("colorOtro").value;
  const nota = document.getElementById("mensajeNormal").value;

  if (!cantidad || !cobertura) {
    alert("Completa los datos");
    return;
  }

  let coberturaFinal = cobertura;
  if ((cobertura === "Otro color" || cobertura === "Combinada") && !color) {
    alert("Escribe el color");
    return;
  }
  if (color) coberturaFinal = color;

  let mensaje = `Hola 😊 quiero pedir:
🍩 Mini donas con cobertura
📦 Cantidad: ${cantidad}
🍫 Cobertura: ${coberturaFinal}
`;

  if (nota) mensaje += `📝 Detalles: ${nota}`;

  window.open(
    "https://wa.me/573112620998?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}

// ================= COMBO ETERNO =================
function pedirWhatsAppCombo() {
  const donas = document.getElementById("cantidadDonasCombo").value;
  const rosas = document.getElementById("cantidadRosasCombo").value;
  const colorRosas = document.getElementById("colorRosas").value;

  if (!donas || !rosas || !colorRosas) {
    alert("Completa todos los campos");
    return;
  }

  let mensaje = `Hola 😊 quiero pedir:
🌹🍩 Combo eterno
🍩 Donas: ${donas}
🌹 Rosas: ${rosas}
🎨 Color de rosas: ${colorRosas}
`;

  window.open(
    "https://wa.me/573112620998?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}

function mostrarColorRosas() {
  const color = document.getElementById("colorRosas").value;
  const otro = document.getElementById("otroColorRosas");
  const ejemplo = document.getElementById("ejemploRosas");

  otro.style.display = "none";
  ejemplo.style.display = "none";

  if (color === "Otro") {
    otro.style.display = "block";
    otro.placeholder = "🎨Escribe el color que desees";
  }

  if (color === "Combinadas") {
    otro.style.display = "block";
    otro.placeholder = "✨ Escribe los colores que desees";
  }
}


function mostrarColorCombo() {
  const cobertura = document.getElementById("coberturaCombo").value;
  const color = document.getElementById("colorCombo");
  const mensaje = document.getElementById("mensajeCombo");
  const ejemplo = document.getElementById("ejemploCombo");

  color.style.display = "none";
  mensaje.style.display = "none";
  ejemplo.style.display = "none";

  if (cobertura === "Otro color") {
    color.style.display = "block";
    mensaje.style.display = "block";
    color.placeholder = "🎨Escribe el color que desees";
  }

  if (cobertura === "Combinada") {
    color.style.display = "block";
    ejemplo.style.display = "block";
    color.placeholder = "✨ Escribe los colores que desees";
  }
}




