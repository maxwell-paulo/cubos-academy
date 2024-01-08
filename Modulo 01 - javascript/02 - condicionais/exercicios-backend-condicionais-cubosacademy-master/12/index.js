const diaDaSemana = 8;
const semana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

console.log(semana[diaDaSemana - 1]);

if (diaDaSemana < 0 || diaDaSemana > semana.length) {
  console.log("O dia da semana informado não é válido.");
}
