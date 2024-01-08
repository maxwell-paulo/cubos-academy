import express from "express";
import {
  criarAutor,
  lerAutor,
  criarLivro,
  lerLivros
} from "../controladores/controladores.js";

const rotas = express();

// criar autor
rotas.post("/autor", criarAutor);

// ler autor
rotas.get("/autor/:id", lerAutor);

// criar livro
rotas.post("/autor/:id/livro", criarLivro);

// ler livro
rotas.get("/livro", lerLivros)

export default rotas;
