const idade = 50;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 16 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("ACESSO NEGADO");
} else {
  if (ehEstudante) {
    console.log("10 reais");
  } else {
    console.log("20 reais");
  }
}
