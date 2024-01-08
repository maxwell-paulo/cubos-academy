function documentosSemPonto(documento) {
  for (let i = 0; i < documento.length; i++) {
    if (documento[i] === "-" || documento[i] === ".") {
      documento = documento.replace(documento[i], "");
    }
  }

  return documento;
}

const cpf = "011.022.033-44";
console.log(documentosSemPonto(cpf));
