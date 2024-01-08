const nome = "Guido Cerqueira";
let nomeFormatado = nome.toLowerCase();

for (let i = 0; i < nomeFormatado.length; i++) {
  if (nomeFormatado[i] === " ") {
    nomeFormatado = nomeFormatado.replace(nomeFormatado[i], "");
  }
}

let nickname = "@";

nickname = nickname.padEnd(13, nomeFormatado);

console.log(nickname);
