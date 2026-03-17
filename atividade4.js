"use strict";

const date = new Date();

// Atividade 4
function calcularIdade() {
  let anoNascimento = Number(document.getElementById("anoNascimento").value);
  let anoAtual = date.getFullYear();
  let idade = anoAtual - anoNascimento;
  let meses = idade * 12;
  let dias = meses * 30;
  let horas = dias * 24;
  let minutos = horas * 60;
  let semanas = idade * 52;
  let idadeEm2050 = 2050 - anoNascimento;
  alert(
    "O ano que você nasceu é " +
      anoNascimento +
      "\n" +
      "Você está vivo à " +
      idade +
      " anos, " +
      meses +
      " meses, " +
      dias +
      " dias, " +
      horas +
      " horas," +
      minutos +
      " minutos e " +
      semanas +
      " semanas\n" +
      "Em 2050 você terá " +
      idadeEm2050 +
      " anos",
  );
}
