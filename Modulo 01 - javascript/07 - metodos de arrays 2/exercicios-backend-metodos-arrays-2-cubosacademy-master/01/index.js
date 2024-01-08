function posicaoDoLivro(estante, livro) {
  const posicao = estante.indexOf(livro) + 1;

  return `O livro está na posição ${posicao}`;
}

const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

console.log(posicaoDoLivro(livros, nomeDoLivro));
