let infectados = 1000;
let transmissão = 4;
let tempo = 7;

const totalInfectadas = infectados * Math.pow(transmissão, tempo / 7);

console.log(totalInfectadas);
