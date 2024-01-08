const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

function programadoresComVinte(arrayDePessoas) {
  return arrayDePessoas.filter(
    (pessoa) => pessoa.profissao === "Programador" && pessoa.idade > 20
  );
}

// console.log(programadoresComVinte(pessoas));

function jornalistasComTrinta(arrayDePessoas) {
  return arrayDePessoas.filter(
    (pessoa) => pessoa.profissao === "Jornalista" && pessoa.idade > 30
  );
}

// console.log(jornalistasComTrinta(pessoas));

function jovens(arrayDePessoas) {
  return arrayDePessoas.filter(
    (pessoa) =>
      (pessoa.profissao === "Jornalista" ||
        pessoa.profissao === "Programador") &&
      pessoa.idade <= 29
  );
}

console.log(jovens(pessoas));
