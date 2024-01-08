const palavras = ["livro", "sol", "carro"];

function contemPalavrasInvalidas(arrayDePalavras) {
  const palavrasInvalidas = arrayDePalavras.filter(
    (palavra) => palavra.length > 5
  );

  if (palavrasInvalidas.length > 0) {
    return "existe palavra inválida";
  } else {
    return "array validado";
  }
}

console.log(contemPalavrasInvalidas(palavras));
