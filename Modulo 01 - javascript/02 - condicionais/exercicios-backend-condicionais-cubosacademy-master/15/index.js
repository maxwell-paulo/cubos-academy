const primeiroNome = "Mario";
const sobrenome = "Jorge";
const apelido = "Zagallo";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  console.log(primeiroNome + " " + sobrenome);
} else {
  console.log(primeiroNome);
}
