import express from "express";

const app = express();
let segundos = 0;
let minutos = 0;
let cronometro;

//a mostrar cronometro
app.get("/", (req, res) => {
  function numerosFormatados(numero) {
    return numero.toString().padStart(2, "0");
  }
  res.json(
    `Tempo atual do cronômetro: ${numerosFormatados(
      minutos
    )} minutos e ${numerosFormatados(segundos)} segundos`
  );
});

// b iniciar cronometro
function atualizarCronometro() {
  segundos += 1;
  if (segundos === 60) {
    minutos += 1;
    segundos = 0;
  }
}

app.get("/iniciar", (req, res) => {
  clearInterval(cronometro);
  cronometro = setInterval(atualizarCronometro, 1000);
  res.send("Cronômetro iniciado!");
});

//c pausar cronometro
app.get("/pausar", (req, res) => {
  clearInterval(cronometro);
  res.send("Cronômetro pausado!");
});

//d continuar cronometro
app.get("/continuar", (req, res) => {
  cronometro = setInterval(atualizarCronometro, 1000);
  res.send("Cronômetro continuando!");
});

//e zerar cronometro
app.get("/zerar", (req, res) => {
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  res.send("Cronômetro zerado!");
});

app.listen(8000);
