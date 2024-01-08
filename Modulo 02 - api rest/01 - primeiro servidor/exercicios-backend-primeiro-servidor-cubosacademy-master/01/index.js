import express from "express";

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contagem = -1;

app.get("/", (req, res) => {
  if (contagem >= jogadores.length - 1) {
    contagem = -1;
  }
  contagem += 1;
  res.send(`É a vez de ${jogadores[contagem]} jogar!`);
});

app.listen(3000);
