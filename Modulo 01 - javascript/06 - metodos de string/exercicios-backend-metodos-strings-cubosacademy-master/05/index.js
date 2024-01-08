const numeroCartao = "1111222233334444";
let cartaFormatado = numeroCartao;

for (let i = 0; i < cartaFormatado.length; i++) {
  if (i > 3 && i < 12) {
    cartaFormatado = cartaFormatado.replace(cartaFormatado[i], "*");
  }
}

console.log(cartaFormatado);
