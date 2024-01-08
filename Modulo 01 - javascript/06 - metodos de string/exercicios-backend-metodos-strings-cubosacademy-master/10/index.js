const nomeArquivo = "Foto da Familia.png";

tipoDeArquivo = nomeArquivo.slice(-4);

if (
  tipoDeArquivo === ".jpg" ||
  tipoDeArquivo === "jpeg" ||
  tipoDeArquivo === ".gif" ||
  tipoDeArquivo === ".png"
) {
  console.log("Arquivo válido");
} else {
  console.log("Arquivo inválido");
}
