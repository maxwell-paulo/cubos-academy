const numeros = [4, 6, 0, 8, 44];

function numerosPares(lista) {
  const todosSaopares = lista.every((numero) => numero % 2 === 0);
  console.log(todosSaopares);

  if (todosSaopares) {
    return "array válido";
  } else {
    return "array inválido";
  }
}

console.log(numerosPares(numeros));
