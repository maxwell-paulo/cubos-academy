//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
  valorComDesconto = (valorDoProduto * 0.95) / 100;
  console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
  valorComDesconto = (valorDoProduto * 0.9) / 100;
  console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
  valorComDesconto = (valorDoProduto * 0.95) / 100;
  console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
}
