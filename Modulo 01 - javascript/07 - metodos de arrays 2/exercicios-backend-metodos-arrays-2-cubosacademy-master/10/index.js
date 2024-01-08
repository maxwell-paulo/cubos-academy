const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function numerosPares(arrayDeNumeros) {
  return arrayDeNumeros.filter((numero) => numero % 2 === 0);
}

console.log(numerosPares(numeros));
