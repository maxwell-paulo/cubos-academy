const letras = ["A", "a", "B", "C", "E", "e"];
let contagem = 0;

for (letra of letras) {
  if (letra === "e" || letra === "E") {
    contagem += 1;
  }
}

if (contagem === 0) {
  console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else {
  console.log(`Foram encontradas ${contagem} letras "E" ou "e".`);
}
