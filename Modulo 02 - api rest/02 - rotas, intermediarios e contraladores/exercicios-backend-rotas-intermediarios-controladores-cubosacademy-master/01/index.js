import express from "express";
import {
  somarNumeros,
  subtrairNumeros,
  multiplicarNumeros,
  dividirNumeros,
} from "./controllers/controllers.js";

const app = express();

app.get("/somar", somarNumeros);
app.get("/subtrair", subtrairNumeros);
app.get("/multiplicar", multiplicarNumeros);
app.get("/dividir", dividirNumeros);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
