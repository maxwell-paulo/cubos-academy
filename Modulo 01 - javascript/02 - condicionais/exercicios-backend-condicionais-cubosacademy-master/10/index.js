const caractere = "b";
const vogaisMaiusculas = "AEIOU";
const vogaisMinusculas = "aeiou";
const numeros = "0123456789";
const naoVogais = /^[^aeiouAEIOU]+$/;

if (vogaisMaiusculas.includes(caractere)) {
  console.log("Vogal maiúscula");
} else if (vogaisMinusculas.includes(caractere)) {
  console.log("Vogal minúscula");
} else if (numeros.includes(caractere) || typeof caractere === Number) {
  console.log("Número");
} else if (naoVogais.test(caractere)) {
  console.log("Não é vogal");
}
