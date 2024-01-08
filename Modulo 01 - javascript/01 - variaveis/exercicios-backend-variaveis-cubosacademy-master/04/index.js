let capital = 1000;
let taxa = 0.125;
let tempo = 5;

let montante = capital * (1 + taxa) ** tempo;

console.log(montante.toFixed(2));
