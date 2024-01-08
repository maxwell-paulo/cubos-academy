const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

function nomesPequenos(listaDeCidades) {
  const cidades = listaDeCidades.filter((cidade) => cidade.length <= 8);

  return cidades.join(", ");
}

console.log(nomesPequenos(cidades));
