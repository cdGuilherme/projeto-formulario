"use strict";

// Atividade 6
function calcSalario() {
  let valorPorHora = Number(document.getElementById("valorHora").value);
  let quantidadeRefeicoes = Number(
    document.getElementById("qtdRefeicoes").value,
  );
  let totalHorasTrabalhadas = 62;
  let precoRefeicao = 1.5;
  let limiteHorasNormais = 40;
  let multiplicadorHoraExtra = 3;

  let possuiHoraExtra;
  let salarioBrutoTotal;
  let descontoTotalRefeicoes;
  let salarioLiquidoTotal;

  let horasExtras = totalHorasTrabalhadas - limiteHorasNormais;
  let valorHoraExtra = valorPorHora * multiplicadorHoraExtra;

  if (horasExtras > 0) {
    possuiHoraExtra = true;
  } else {
    possuiHoraExtra = false;
  }

  if (possuiHoraExtra) {
    salarioBrutoTotal =
      valorPorHora * limiteHorasNormais + valorHoraExtra * horasExtras;
  } else {
    salarioBrutoTotal = valorPorHora * totalHorasTrabalhadas;
  }

  descontoTotalRefeicoes = quantidadeRefeicoes * precoRefeicao;
  salarioLiquidoTotal = salarioBrutoTotal - descontoTotalRefeicoes;

  alert(
    "A quantidade de horas trabalhadas é: " +
      totalHorasTrabalhadas +
      "\n" +
      "O valor da hora trabalhada é de: R$" +
      valorPorHora +
      "\n" +
      "O valor da hora extra (acima de 40 horas) é de: R$" +
      valorHoraExtra +
      "\n" +
      "O valor de cada refeição é de: R$" +
      precoRefeicao +
      "\n" +
      "Você teve " +
      quantidadeRefeicoes +
      " refeições. \n" +
      "O seu salário bruto é: R$" +
      salarioBrutoTotal +
      "\n" +
      "O desconto das refeições foi de: R$" +
      descontoTotalRefeicoes +
      "\n" +
      "O salário líquido após os descontos é: R$" +
      salarioLiquidoTotal,
  );
}
