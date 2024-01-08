const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({ tipo: "Depósito", valor });
    return `Deposito de R$${(valor / 100).toFixed(
      2
    )} realizado para o cliente: ${this.nome}`;
  },

  sacar: function (valor) {
    if (valor > this.saldo) {
      return `Saldo insuficiente para o saque de: ${this.nome}`;
    } else {
      this.saldo -= valor;
      this.historicos.push({ tipo: "Saque", valor });
      return `Saque de R$${(valor / 100).toFixed(
        2
      )} realizado para o cliente: ${this.nome}`;
    }
  },

  extrato: function () {
    let extratoString = `Extrato de ${this.nome} - Saldo: R$${(
      this.saldo / 100
    ).toFixed(2)}\nHistórico:\n`;
    let historicosArray = [];

    for (item of this.historicos) {
      historicosArray.push(
        `${item.tipo} de R$${(item.valor / 100).toFixed(2)}`
      );
    }

    return extratoString + historicosArray.join("\n");
  },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
