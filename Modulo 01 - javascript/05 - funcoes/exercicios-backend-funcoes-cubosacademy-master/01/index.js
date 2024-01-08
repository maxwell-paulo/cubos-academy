function corrigirProva(prova) {
  let acertos = 0;
  for (questao of prova.questoes) {
    if (questao.resposta === questao.correta) {
      acertos += 1;
    }
  }

  nota = (prova.valor / prova.questoes.length) * acertos;

  return `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`;
}

const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

console.log(corrigirProva(prova));
