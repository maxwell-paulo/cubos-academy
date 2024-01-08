const palavras = ["arroz", "feijão", "carne", "macarrão"];

function bebidasProibidas(listaDeCompras) {
  const temBebidaAlcolica = listaDeCompras.some((produto) => {
    return produto === "cerveja" || produto === "vodka";
  });

  if (temBebidaAlcolica) {
    return "revise sua lista, joão. possui bebida com venda proibida!";
  } else {
    return "tudo certo, vamos as compras!";
  }
}

console.log(bebidasProibidas(palavras));
