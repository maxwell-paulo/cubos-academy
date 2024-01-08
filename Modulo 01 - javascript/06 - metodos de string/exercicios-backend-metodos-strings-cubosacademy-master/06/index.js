const celular = 991880000088;
let celularFormatado = String(celular);

if (celularFormatado.length === 11) {
  let ddd = celularFormatado.slice(0, 2);
  let nove = celularFormatado.slice(2, 3);
  let parteUm = celularFormatado.slice(3, 7);
  let parteDois = celularFormatado.slice(7);

  console.log(`(${ddd}) ${nove} ${parteUm}-${parteDois}`);
} else if (celularFormatado.length === 9) {
  let nove = celularFormatado.slice(0, 1);
  let parteUm = celularFormatado.slice(1, 5);
  let parteDois = celularFormatado.slice(5);

  console.log(`${nove} ${parteUm}-${parteDois}`);
} else if (celularFormatado.length === 10) {
  let ddd = celularFormatado.slice(0, 2);
  let parteUm = celularFormatado.slice(2, 6);
  let parteDois = celularFormatado.slice(6);

  console.log(`(${ddd}) 9 ${parteUm}-${parteDois}`);
} else if (celularFormatado.length === 8) {
  let parteUm = celularFormatado.slice(1, 4);
  let parteDois = celularFormatado.slice(4);

  console.log(`9 ${parteUm}-${parteDois}`);
} else {
  console.log("Número de celular inválido");
}
