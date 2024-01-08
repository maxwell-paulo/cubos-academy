const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};
curso.aulas.push({ id: 1, nome_da_aula: "Introdução a programação" });
curso.aulas.push({ id: 2, nome_da_aula: "Variáveis" });
curso.aulas.push({ id: 3, nome_da_aula: "Condicionais" });
curso.aulas.push({ id: 4, nome_da_aula: "Arrays" });

console.log(curso);
console.log(curso.aulas);
console.log(curso.aulas[0]);
