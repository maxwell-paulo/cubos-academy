const ladoA = 7;
const ladoB = 6;
const buchas = ["branco", "ás", "duque", "terno", "quadra", "quina", "sena"];
//seu código aqui

if (ladoA || ladoB > 6) {
  console.log("só são aceitos números até o número 6");
}

if (ladoA === ladoB) {
  console.log(`Bucha de ${buchas[ladoA]}`);
} else {
  console.log("Não é bucha");
}
