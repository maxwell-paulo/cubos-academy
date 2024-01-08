const numeros = [54, 22, 14, 87, 284];

let checagem = false;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    console.log(i);
    checagem = true;
    break;
  }
}

if (checagem === false) {
  console.log(-1);
}
