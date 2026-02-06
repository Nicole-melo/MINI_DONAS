function pedirWhatsAppSanValentin() {
  const cantidad = document.getElementById("cantidadSV").value;
  const cobertura = document.getElementById("coberturaSV").value;
  const nota = document.getElementById("notaSV").value;

  if (!cantidad || !cobertura) {
    alert("Completa todos los campos");
    return;
  }

  let mensaje = `Hola 😊 quiero pedir:
💘 Mini Donas San Valentín
🍩 Cantidad: ${cantidad}
🍫 Cobertura: ${cobertura}
`;

  if (nota) {
    mensaje += `📝 Detalles: ${nota}`;
  }

  window.open(
    "https://wa.me/573202471967?text=" + encodeURIComponent(mensaje),
    "_blank"
  );
}
