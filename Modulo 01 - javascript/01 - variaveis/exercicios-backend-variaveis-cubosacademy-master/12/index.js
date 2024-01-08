let montante = 90000;
let capitalInicial = 60000;
let meses = 24;

const taxa = Math.pow(montante / capitalInicial, 1 / meses) - 1;
let percentual = taxa * 100;

console.log(
  `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${percentual.toFixed(
    3
  )}%, pois após ${meses} meses você teve que pagar ${montante} reais.`
);
