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
    "https://wa.me/573202471967?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}


// ================= COBERTURA =================
function mostrarColorOtro() {
  const cobertura = document.getElementById("cobertura").value;
  const color = document.getElementById("colorOtro");
  const mensaje = document.getElementById("mensajeNormal");
  const ejemplo = document.getElementById("ejemploCombinada");

  // Ocultar todo
  color.classList.add("oculto");
  mensaje.classList.add("oculto");
  ejemplo.classList.add("oculto");

  if (cobertura !== "") {
    mensaje.classList.remove("oculto");
  }

  if (cobertura === "Otro color") {
    color.classList.remove("oculto");
    color.placeholder = "🎨 Escribe el color que deseas";
  }

  if (cobertura === "Combinada") {
    color.classList.remove("oculto");
    color.placeholder = "✨ Escribe los colores que deseas";
    ejemplo.classList.remove("oculto");
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
    "https://wa.me/573202471967?text=" + encodeURIComponent(mensaje),
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
    "https://wa.me/573202471967?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}


function mostrarColorRosas() {
  const rosas = document.getElementById("colorRosas").value;
  const otro = document.getElementById("otroColorRosas");
  const ejemplo = document.getElementById("ejemploCombo");
  const cobertura = document.getElementById("coberturaCombo").value;

  otro.classList.add("oculto");
  ejemplo.classList.add("oculto");

  if (rosas === "Otro") {
    otro.classList.remove("oculto");
    otro.placeholder = "🎨 Escribe el color de las rosas";
  }

  if (rosas === "Combinadas") {
    otro.classList.remove("oculto");
    otro.placeholder = "✨ Escribe los colores de las rosas";
  }

  // 🔥 Mostrar ejemplo si CUALQUIERA es combinada
  if (rosas === "Combinadas" || cobertura === "Combinada") {
    ejemplo.classList.remove("oculto");
  }
}






function mostrarColorCombo() {
  const cobertura = document.getElementById("coberturaCombo").value;
  const color = document.getElementById("colorCombo");
  const mensaje = document.getElementById("mensajeCombo");
  const ejemplo = document.getElementById("ejemploCombo");
  const rosas = document.getElementById("colorRosas").value;

  // Ocultar todo primero
  color.classList.add("oculto");
  mensaje.classList.add("oculto");
  ejemplo.classList.add("oculto");

  // Si eligió cualquier cobertura → mostrar mensaje
  if (cobertura !== "") {
    mensaje.classList.remove("oculto");
  }

  // Si es otro color
  if (cobertura === "Otro color") {
    color.classList.remove("oculto");
    color.placeholder = "🎨 Escribe el color de la cobertura";
  }

  // Si es combinada
  if (cobertura === "Combinada") {
    color.classList.remove("oculto");
    color.placeholder = "✨ Escribe los colores de la cobertura";
  }

  // Mostrar ejemplo si cualquiera es combinada
  if (cobertura === "Combinada" || rosas === "Combinadas") {
    ejemplo.classList.remove("oculto");
  }
}



// ===== MINI DONAS POR COMBO =====
function actualizarMiniDonas() {
  const cantidad = document.getElementById("cantidad1").value;

  const reglas = {
    4:  { salsas: 1, toppings: 1 },
    6:  { salsas: 2, toppings: 2 },
    8:  { salsas: 2, toppings: 3 },
    10: { salsas: 3, toppings: 3 },
    12: { salsas: 3, toppings: 4 },
    14: { salsas: 4, toppings: 4 }
  };

  const contSalsas = document.getElementById("contenedorSalsas");
  const contToppings = document.getElementById("contenedorToppings");

  contSalsas.innerHTML = "";
  contToppings.innerHTML = "";

  if (!reglas[cantidad]) return;

  generarSelects(
    contSalsas,
    reglas[cantidad].salsas,
    "🍯 Salsa",
    ["Chocolate", "Arequipe", "Caramelo", "Leche condensada"]
  );

  generarSelects(
    contToppings,
    reglas[cantidad].toppings,
    "🍭 Topping",
    ["Chispas de chocolate", "Oreo", "Gomitas", "Minichips", "M&M", "Gragea"]
  );
}

function generarSelects(contenedor, cantidad, texto, opciones) {
  for (let i = 1; i <= cantidad; i++) {
    const select = document.createElement("select");
    select.innerHTML = `<option value="">${texto} ${i}</option>`;

    opciones.forEach(op => {
      select.innerHTML += `<option value="${op}">${op}</option>`;
    });

    contenedor.appendChild(select);
  }
}

