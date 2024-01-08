const numeros = [1, 98, 1276, 0, 12, 19, 5, 60, 44];

function maiorNumero(listaDeNumeros) {
  return listaDeNumeros.reduce((maiorNumero, numeroAtual, index) => {
    if (index === 0) {
      maiorNumero = numeroAtual;
    } else if (numeroAtual > maiorNumero) {
      maiorNumero = numeroAtual;
    }
    return maiorNumero;
  }, 0);
}

console.log(maiorNumero(numeros));
