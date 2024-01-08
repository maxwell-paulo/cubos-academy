const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function numerosPositivos(arrayDeNumeros) {
  return arrayDeNumeros.filter((numero) => numero > 0);
}

console.log(numerosPositivos(numeros));
