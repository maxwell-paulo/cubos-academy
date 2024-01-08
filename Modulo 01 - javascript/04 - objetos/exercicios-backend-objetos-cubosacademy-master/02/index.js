const carros = {
  carro1: {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: false,
  },

  carro2: {
    marca: "Tesla",
    modelo: "X",
    ano: 2020,
    cor: "branco",
    quantidade_portas: 4,
    automatico: true,
  },

  carro3: {
    marca: "hotwheels",
    model: "de brinquedo",
    ano: 2000,
    cor: "azul",
    quantidade_portas: 0,
    automatico: false,
  },
};

console.log(carros);
console.log(carros.carro1);
console.log(carros.carro2.automatico, carros.carro3.automatico);
