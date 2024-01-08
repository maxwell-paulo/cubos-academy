const texto = "Aprenda programar do zero na Cubos Academy";
let textoFormatado = texto.toLocaleLowerCase();

while (textoFormatado !== textoFormatado.replace(" ", "-")) {
  textoFormatado = textoFormatado.replace(" ", "-");
}

console.log(textoFormatado);
