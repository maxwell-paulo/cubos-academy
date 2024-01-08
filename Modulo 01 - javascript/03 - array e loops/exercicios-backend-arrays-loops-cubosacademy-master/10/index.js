const numeros = [80, 30, 10, 11];

let maiorNumero = 0;
let menorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
  if (i === 0) {
    menorNumero = numeros[i];
    maiorNumero = numeros[i];
  }
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  } else if (numeros[i] < menorNumero) {
    menorNumero = numeros[i];
  }
}

console.log(maiorNumero - menorNumero);
