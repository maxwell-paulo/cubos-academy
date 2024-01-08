const cpf = "12352678900";
const cnpj = "12345678000199";

if (/^\d+$/.test(cpf) === false || cpf.length != 11) {
  console.log("CPF Inválido");
} else {
  const parte1 = cpf.slice(0, 3);
  const parte2 = cpf.slice(3, 6);
  const parte3 = cpf.slice(6, 9);
  const parte4 = cpf.slice(9);

  console.log(`${parte1}.${parte2}.${parte3}-${parte4}`);
}

if (/^\d+$/.test(cnpj) === false || cnpj.length != 14) {
  console.log("CNPJ Inválido");
} else {
  const parte1 = cnpj.slice(0, 2);
  const parte2 = cnpj.slice(2, 5);
  const parte3 = cnpj.slice(5, 8);
  const parte4 = cnpj.slice(8, 12);
  const parte5 = cnpj.slice(12);

  console.log(`${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`);
}
