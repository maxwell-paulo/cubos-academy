const emails = [
  `jose@cubos.academy`,
  `jose@cubos.academy.br`,
  `jose.messias@cubos.academy`,
  `jose.messias@cubos.io`,
  `jose@cubos`,
  `jose.messias@cubos`,
  `jose.messias@.`,
  `jose.@cubos`,
  `.@`,
  `@.`,
  `jose.messias@cubos.`,
  `.messias@cubos.`,
  `.messias@cubos`,
];

for (let i = 0; i < emails.length; i++) {
  const indexArroba = emails[i].indexOf("@");
  const indexPonto = emails[i].indexOf(".");

  if (indexPonto > 0 && indexArroba > -1 && emails[i].slice(-1) != ".") {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}
