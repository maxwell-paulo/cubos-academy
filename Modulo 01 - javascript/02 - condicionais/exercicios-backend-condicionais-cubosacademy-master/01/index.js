const jogada1 = "pedra";
const jogada2 = "papel";

//seu código aqui
if (jogada1 === jogada2) {
  console.log("empate");
}

if (
  (jogada1 === "pedra" || jogada2 === "pedra") &&
  (jogada1 === "tesoura" || jogada2 === "tesoura")
) {
  console.log("pedra");
} else if (
  (jogada1 === "tesoura" || jogada2 === "tesoura") &&
  (jogada1 === "papel" || jogada2 === "papel")
) {
  console.log("tesoura");
} else if (
  (jogada1 === "papel" || jogada2 === "papel") &&
  (jogada1 === "pedra" || jogada2 === "pedra")
) {
  console.log("papel");
}
