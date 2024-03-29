const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function acharRua(listaDeRuas, cep) {
  const rua = listaDeRuas.find((elemento) => elemento.cep === cep);

  return rua.rua;
}

console.log(acharRua(enderecos, 11222333));
