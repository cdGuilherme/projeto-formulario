"use strict";

// Calculadora soma
function somar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 + numero2;
  alert("A soma de " + numero1 + " + " + numero2 + " = " + resultado);
}

// Calculadora subtração
function subtrair() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 - numero2;
  alert("A subtração de " + numero1 + " - " + numero2 + " = " + resultado);
}

// Calculadora multiplicação
function multiplicar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 * numero2;
  alert("A multiplicação de " + numero1 + " * " + numero2 + " = " + resultado);
}

// Calculadora divisão
function dividir() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 / numero2;
  alert("A divisão de " + numero1 + " / " + numero2 + " = " + resultado);
}

// Calculadora potência
function exponenciacao() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = Math.pow(numero1, numero2);
  alert(numero1 + "^" + numero2 + " = " + resultado);
}

// Calculadora raiz quadrada
function raiz() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado1 = Math.sqrt(numero1);
  let resultado2 = Math.sqrt(numero2);
  alert(
    "A raiz quadrada de " +
      numero1 +
      " = " +
      resultado1 +
      "\n" +
      "A raiz quadrada de " +
      numero2 +
      " = " +
      resultado2,
  );
}
