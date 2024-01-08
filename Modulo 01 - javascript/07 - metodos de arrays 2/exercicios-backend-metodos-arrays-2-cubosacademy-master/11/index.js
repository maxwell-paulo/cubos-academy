const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

function nomesComA(arrayDeNomes) {
  return arrayDeNomes.filter((nome) => nome[0] === "a" || nome[0] === "A");
}

console.log(nomesComA(nomes));
