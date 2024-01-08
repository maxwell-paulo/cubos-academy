import jogadores from "../database.js";
let jogadorAtual = -1;

export const jogadorDaVez = (req, res) => {
  if (jogadorAtual >= jogadores.length - 1) {
    jogadorAtual = -1;
  }
  jogadorAtual += 1;

  res.send(`É a vez de ${jogadores[jogadorAtual]} jogar!`);
};

export const removerJogador = (req, res) => {
  const { indice } = req.query;

  if (!indice) {
    res.send("Indice do itém a ser excluido não informado");
  } else if (Number(indice) >= jogadores.length) {
    res.send(
      `Não existe jogador no índice informado (${indice}) para ser removido`
    );
  } else {
    jogadores.splice(Number(indice), 1);

    res.send(jogadores);
  }
};

export const adicionarJogador = (req, res) => {
  const { nome, indice } = req.query;

  let nomeTratado = nome.split("");
  nomeTratado = nomeTratado.map((letra, index) => {
    if (index === 0) {
      return letra.toUpperCase();
    } else {
      return letra.toLowerCase();
    }
  });
  nomeTratado = nomeTratado.join("");

  if (!nome) {
    res.send("Nome da pessoa não informado");
  } else if (Number(indice) >= jogadores.length) {
    res.send(
      `O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`
    );
  } else {
    if (!indice) {
      jogadores.push(nomeTratado);
    } else if (indice) {
      jogadores.splice(indice, 0, nomeTratado);
    }
    res.send(jogadores);
  }
};
