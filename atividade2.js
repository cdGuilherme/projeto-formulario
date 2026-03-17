"use strict";

// Atividade 2
function areaTriangulo() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  let resultado = (base * altura) / 2;
  document.getElementById("areaTriangulo").value = resultado;
}
