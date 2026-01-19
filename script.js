// ================= MINI DONAS =================
function pedirWhatsAppMiniDonas() {
  const cantidad = document.getElementById("cantidad1").value;
  const salsas = document.querySelectorAll("#contenedorSalsas select");
  const toppings = document.querySelectorAll("#contenedorToppings select");
  const nota = document.getElementById("nota1").value;

  if (!cantidad) {
    alert("Completa todos los campos");
    return;
  }

  let mensaje = `Hola 😊 quiero pedir:
🍩 Mini donas con topping
📦 Cantidad: ${cantidad}
`;

  // ===== SALSAS =====
  if (salsas.length > 0) {
    mensaje += `🍯 Salsas:\n`;
    salsas.forEach((select, index) => {
      if (!select.value) {
        alert(`Selecciona la salsa ${index + 1}`);
        return;
      }
      mensaje += `  - ${select.value}\n`;
    });
  }

  // ===== TOPPINGS =====
  if (toppings.length > 0) {
    mensaje += `🍭 Toppings:\n`;
    toppings.forEach((select, index) => {
      if (!select.value) {
        alert(`Selecciona el topping ${index + 1}`);
        return;
      }
      mensaje += `  - ${select.value}\n`;
    });
  }

  // ===== NOTA =====
  if (nota) {
    mensaje += `📝 Detalles: ${nota}`;
  }

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

  // Ocultar todo primero
  color.style.display = "none";
  ejemplo.style.display = "none";

  // ✅ EL MENSAJE SIEMPRE SE MUESTRA SI HAY COBERTURA
  if (cobertura) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }

  if (cobertura === "Otro color") {
    color.style.display = "block";
    color.placeholder = "🎨 Escribe el color que deseas";
  }

  if (cobertura === "Combinada") {
    color.style.display = "block";
    ejemplo.style.display = "block";
    color.placeholder = "✨ Escribe los colores que deseas";
  }
}




function pedirWhatsAppMiniDonasCobertura() {
  const cantidad = document.getElementById("cantidadCobertura").value;
  const cobertura = document.getElementById("cobertura").value;
  const color = document.getElementById("colorOtro").value;
  const nota = document.getElementById("mensajeNormal").value;

  if (!cantidad || !cobertura) {
    alert("Completa todos los campos");
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
  const otroColorRosas = document.getElementById("otroColorRosas").value;

  const cobertura = document.getElementById("coberturaCombo").value;
  const colorCobertura = document.getElementById("colorCombo").value;

  const mensajeExtra = document.getElementById("mensajeCombo").value;

  if (!donas || !rosas || !colorRosas || !cobertura) {
    alert("Completa todos los campos");
    return;
  }

  // 🔹 Color final de rosas
  let rosasFinal = colorRosas;
  if ((colorRosas === "Otro" || colorRosas === "Combinadas") && otroColorRosas) {
    rosasFinal = otroColorRosas;
  }

  // 🔹 Cobertura final
  let coberturaFinal = cobertura;
  if ((cobertura === "Otro color" || cobertura === "Combinada") && colorCobertura) {
    coberturaFinal = colorCobertura;
  }

  let mensaje = `Hola 😊 quiero pedir:
🌹🍩 Combo eterno
🍩 Mini donas: ${donas}
🌹 Rosas: ${rosas}
🎨 Color de rosas: ${rosasFinal}
🍫 Cobertura: ${coberturaFinal}
`;

  if (mensajeExtra) {
    mensaje += `📝 Detalles: ${mensajeExtra}`;
  }

  window.open(
    "https://wa.me/573112620998?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}


function mostrarColorRosas() {
  const color = document.getElementById("colorRosas").value;
  const otro = document.getElementById("otroColorRosas");
  const ejemplo = document.getElementById("ejemploCombo");

  // Ocultar todo primero
  otro.style.display = "none";
  ejemplo.style.display = "none";

  if (color === "Otro") {
    otro.style.display = "block";
    otro.placeholder = "🎨 Escribe el color que desees";
  }

  if (color === "Combinadas") {
    otro.style.display = "block";
    otro.placeholder = "✨ Escribe los colores que desees";
    ejemplo.style.display = "block"; // 👈 mostrar ejemplo combinado
  }
}


function mostrarColorCombo() {
  const cobertura = document.getElementById("coberturaCombo").value;
  const color = document.getElementById("colorCombo");
  const mensaje = document.getElementById("mensajeCombo");
  const ejemplo = document.getElementById("ejemploCombo");

  // Ocultar todo
  color.style.display = "none";
  ejemplo.style.display = "none";
  mensaje.style.display = "none";

  // Si hay cobertura, mostrar mensaje
  if (cobertura) {
    mensaje.style.display = "block";
  }

  if (cobertura === "Otro color") {
    color.style.display = "block";
    color.placeholder = "🎨 Escribe el color que deseas";
  }

  if (cobertura === "Combinada") {
    color.style.display = "block";
    ejemplo.style.display = "block";
    color.placeholder = "✨ Escribe los colores que deseas";
  }
}



function generarSalsas() {
  const cantidad = document.getElementById("numSalsas").value;
  const contenedor = document.getElementById("contenedorSalsas");

  contenedor.innerHTML = "";

  const opcionesSalsas = [
    "Chocolate",
    "Arequipe",
    "Fresa",
    "Caramelo",
    "Leche condensada"
  ];

  for (let i = 1; i <= cantidad; i++) {
    const select = document.createElement("select");

    const opcionDefault = document.createElement("option");
    opcionDefault.textContent = `🍯 Salsa ${i}`;
    opcionDefault.value = "";
    select.appendChild(opcionDefault);

    opcionesSalsas.forEach(salsa => {
      const option = document.createElement("option");
      option.value = salsa;
      option.textContent = salsa;
      select.appendChild(option);
    });

    contenedor.appendChild(select);
  }
}

function generarToppings() {
  const cantidad = document.getElementById("numToppings").value;
  const contenedor = document.getElementById("contenedorToppings");

  contenedor.innerHTML = "";

  const opcionesToppings = [
    "Chispas de chocolate",
    "Chocolatina",
    "Oreo",
    "Maní",
    "Coco",
    "Gomitas"
  ];

  for (let i = 1; i <= cantidad; i++) {
    const select = document.createElement("select");

    const opcionDefault = document.createElement("option");
    opcionDefault.textContent = `🍭 Topping ${i}`;
    opcionDefault.value = "";
    select.appendChild(opcionDefault);

    opcionesToppings.forEach(topping => {
      const option = document.createElement("option");
      option.value = topping;
      option.textContent = topping;
      select.appendChild(option);
    });

    contenedor.appendChild(select);
  }
}

















