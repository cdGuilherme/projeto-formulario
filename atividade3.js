"use strict";

// Atividade 3
function calcNota() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);

  let resultadoNota = Math.round(nota1 * 0.3 + nota2 * 0.7);

  document.getElementById("resultadoNota").innerText =
    "A média ponderada é: " + resultadoNota;
}
