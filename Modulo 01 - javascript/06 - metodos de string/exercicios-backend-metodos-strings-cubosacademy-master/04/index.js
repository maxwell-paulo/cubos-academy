let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// trantando identificador
identificador = identificador.padStart(6, "0");

//tratando nome
nomeArray = nome.split("");

for (let i = 0; i < nomeArray.length; i++) {
  if (i === 0) {
    nomeArray.splice(i, 1, nomeArray[i].toUpperCase());
  } else if (nomeArray[i - 1] === " ") {
    nomeArray.splice(i, 1, nomeArray[i].toUpperCase());
  }
}

nome = nomeArray.join("");

// tratando email
email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);
