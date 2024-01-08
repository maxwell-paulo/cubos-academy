import express from "express";
import { todosImoveis, imovelPorId } from "../controllers/controllers.js";

const rotasDeImoveis = express.Router();

rotasDeImoveis.get("/", todosImoveis);
rotasDeImoveis.get("/:id", imovelPorId);

export { rotasDeImoveis };
