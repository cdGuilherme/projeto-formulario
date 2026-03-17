"use strict";

// Atividade 1
function calcularSalario() {
  let salario = Number(document.getElementById("salario").value);
  let aumento = Number(document.getElementById("aumento").value);
  let novoSalario = salario * ((aumento + 100) / 100);
  document.getElementById("novoSalario").innerText = "O novo salário é: " + novoSalario;
}
