import express from "express";
import {
  jogadorDaVez,
  removerJogador,
  adicionarJogador,
} from "./controllers/controllers.js";

const app = express();

// a retornar o jogador da vez
app.get("/", jogadorDaVez);

// b remover jogador
app.get("/remover", removerJogador);

// c adicionar jogador
app.get("/adicionar", adicionarJogador);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
