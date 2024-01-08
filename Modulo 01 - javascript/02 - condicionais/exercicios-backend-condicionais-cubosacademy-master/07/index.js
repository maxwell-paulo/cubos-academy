const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 1; //emCentavos

//seu código aqui

if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
} else if (totalDeRendimentos < 2855970) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else if (totalDeRendimentos > 2855970 && !aposentada && !portadoraDeDoenca) {
  console.log("PEGA LEAO");
}
