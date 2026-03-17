"use strict";

// Atividade 7
function numeroAleatorio() {
  // Gere um número aleatório de 0 a 100
  let numero = Math.round(Math.random() * 100);

  // Define se é um número par ou impar
  let tipoNumero;
  if (numero % 2 === 0) {
    tipoNumero = "par";
  } else {
    tipoNumero = "impar";
  }

  alert(
    "O número aleatório gerado é " +
      numero +
      " e ele é um número " +
      tipoNumero,
  );
}
