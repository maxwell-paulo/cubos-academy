const numeros = [3, 24, 1, 8, 33, 7, 15];

let maiorNumero = 0;

for (numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);
