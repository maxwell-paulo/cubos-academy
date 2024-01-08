import express from "express";
import { rotasDeImoveis } from "./routes/routes.js";

const app = express();

app.use("/imoveis", rotasDeImoveis);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
