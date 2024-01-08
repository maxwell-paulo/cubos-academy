//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 10000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 40;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

if (
  rendaMensalEmCentavos >= 200000 &&
  mesesDecorridos <= 60 &&
  totalJaPagoPeloAluno < 1800000
) {
  let mensalidade = (rendaMensalEmCentavos * 0.18) / 100;
  console.log(
    `O valor da parcela desse mês é R$ ${mensalidade.toFixed(2)} reais`
  );
}

if (totalJaPagoPeloAluno >= 1800000) {
  console.log(
    "O aluno já quitou o valor total do contrato que foi de R$ 18.000,00"
  );
} else if (mesesDecorridos > 60) {
  console.log(
    "Como o contrato já tem uma duração maior do que 60 meses o aluno não deve mais nada para a instituição"
  );
} else if (rendaMensalEmCentavos < 200000) {
  console.log(
    "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais."
  );
}
