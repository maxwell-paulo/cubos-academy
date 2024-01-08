const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      console.log("Este carro já está ligado.");
    } else {
      this.ligado = true;
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    }
  },
  desligar: function () {
    if (!this.ligado) {
      console.log("Este carro já está desligado.");
    } else {
      if (this.velocidade > 0) {
        console.log("Reduza a velocidade, o carro só pode desligar parado");
      } else {
        this.ligado = false;
        this.velocidade = 0;
        console.log("Carro desligado. Velocidade: 0.");
      }
    }
  },
  acelerar: function () {
    if (!this.ligado) {
      this.start();
    } else {
      this.velocidade += 10;
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    }
  },

  desacelerar: function () {
    if (!this.ligado) {
      console.log("Não é possível desacelerar um carro desligado.");
    } else {
      this.velocidade -= 10;
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    }

    if (this.velocidade === 0) {
      this.stop();
    }
  },

  start: function () {
    if (!this.ligado) {
      this.ligado = true;
      this.velocidade = 0;
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    }
  },

  stop: function () {
    if (this.ligado && this.velocidade === 0) {
      this.ligado = false;
      console.log("Carro desligado. Velocidade: 0.");
    }
  },
};

// carro.desligar();
// carro.ligar();
// carro.ligar();
// carro.acelerar();
// carro.acelerar();
// carro.desacelerar();
// carro.desligar();
// carro.desacelerar();
// carro.desligar();
// carro.acelerar();
// carro.desacelerar();

carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
