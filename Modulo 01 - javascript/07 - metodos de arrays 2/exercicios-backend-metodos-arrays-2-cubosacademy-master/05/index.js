const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: true,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

function maioresDeIdade(lista) {
  return lista.filter((pessoa) => pessoa.idade >= 18 && pessoa.idade <= 65);
}
function motoristas(lista) {
  const todosHabilitados = maioresDeIdade(lista).every(
    (pessoa) => pessoa.habilitado === true
  );

  if (todosHabilitados) {
    return "todos passaram no teste";
  } else {
    return "todos precisam estar habilitados";
  }
}

console.log(motoristas(usuarios));
