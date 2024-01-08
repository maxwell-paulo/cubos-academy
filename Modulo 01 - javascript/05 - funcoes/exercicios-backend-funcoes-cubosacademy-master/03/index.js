const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
    console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
  },

  addProduto: function (produto) {
    todosIds = [];

    for (item of this.produtos) {
      todosIds.push(item.id);
    }

    if (todosIds.includes(produto.id)) {
      for (item of this.produtos) {
        if (item.id === produto.id) {
          item.qtd = produto.qtd;
        }
      }
    } else {
      this.produtos.push({ ...produto });
    }
  },

  imprimirDetalhes: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);

    for (item of this.produtos) {
      console.log(
        `Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(
          item.precoUnit / 100
        ).toFixed(2)}`
      );
    }

    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
    console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
  },

  calcularTotalDeItens: function () {
    totalDeItens = 0;
    for (item of this.produtos) {
      totalDeItens += item.qtd;
    }
    return totalDeItens;
  },

  calcularTotalAPagar: function () {
    totalAPagar = 0;
    for (item of this.produtos) {
      totalAPagar += item.qtd * item.precoUnit;
    }

    return (totalAPagar / 100).toFixed(2);
  },

  calcularDesconto: function () {
    totalDeItens = this.calcularTotalDeItens();
    totalAPagar = this.calcularTotalAPagar();
    descontoA = 0;
    descontoB = 0;

    if (totalDeItens < 4 && totalAPagar <= 100) {
      console.log("Nenhum desconto aplicado");
    } else if (totalDeItens >= 4) {
      for (item of this.produtos) {
        if (item.precoUnit < descontoA || descontoA === 0) {
          descontoA = item.precoUnit;
        }
      }
    } else if (totalAPagar > 100) {
      descontoB = totalAPagar * 100 * 0.1;
    }

    if (descontoA > descontoB) {
      console.log(`desconto de R$${(descontoA / 100).toFixed(2)}`);
    } else if (descontoB > descontoA) {
      console.log(`desconto de R$${(descontoB / 100).toFixed(2)}`);
    }
  },
};

// function imprimirResumoDoCarrinho(carrinho) {
//   totalDeItens = 0;
//   totalAPagar = 0;
//   for (item of carrinho.produtos) {
//     totalDeItens += item.qtd;
//     totalAPagar += item.qtd * item.precoUnit;
//   }

//   console.log(`Cliente: ${carrinho.nomeDoCliente}`);
//   console.log(`Total de itens: ${totalDeItens} itens`);
//   console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`);
// }

// function addProdutoAoCarrinho(carrinho, produto) {
//   todosIds = [];

//   for (item of carrinho.produtos) {
//     todosIds.push(item.id);
//   }

//   if (todosIds.includes(produto.id)) {
//     for (item of carrinho.produtos) {
//       if (item.id === produto.id) {
//         item.qtd = produto.qtd;
//       }
//     }
//   } else {
//     carrinho.produtos.push({ ...produto });
//   }
// }

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
carrinho.calcularDesconto();
