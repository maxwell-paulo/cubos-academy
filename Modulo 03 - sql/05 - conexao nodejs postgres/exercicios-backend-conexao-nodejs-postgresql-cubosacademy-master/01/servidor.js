import express from "express";
import rotas from "./rotas/rotas.js";

const app = express();

app.use(express.json());
app.use(rotas);

export default app;
