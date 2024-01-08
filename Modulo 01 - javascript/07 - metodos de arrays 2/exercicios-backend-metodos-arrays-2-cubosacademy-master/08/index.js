const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

function organizarArray(lista) {
  return lista.map((elemento, index) => {
    elemento = elemento.toLowerCase();
    elemento = elemento.replace(elemento[0], elemento[0].toUpperCase());
    return `${index} - ${elemento}`;
  });
}

console.log(organizarArray(frutas));
