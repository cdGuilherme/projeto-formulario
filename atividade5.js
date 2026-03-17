"use strict";

// Atividade 5
function calcConsumoMedio() {
  let distancia = Number(document.getElementById("distancia").value);
  let volume = Number(document.getElementById("volume").value);
  let consumoMedio = distancia / volume;
  document.getElementById("resultadoConsumoMedio").innerText = "O consumo médio de gasolina é de " + consumoMedio + " litros por km.";
}
