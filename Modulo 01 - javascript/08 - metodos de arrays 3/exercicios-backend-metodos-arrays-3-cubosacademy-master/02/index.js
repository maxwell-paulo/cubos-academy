const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recifeeeeeeeeeeeeeeeeee",
  "Rio de Janeiro",
];

const maiorNomedeCidade = cidades.reduce((maiorNome, cidadeAtual, index) => {
  if (index === 0) {
    maiorNome = cidadeAtual;
  } else if (cidadeAtual.length > maiorNome.length) {
    maiorNome = cidadeAtual;
  }
  return maiorNome;
}, 0);

console.log(maiorNomedeCidade);
