const comentario = "Esse  é muito perigoso!";

if (
  comentario.includes("COVID") ||
  comentario.includes("covid") ||
  comentario.includes("Covid") ||
  comentario.includes("PANDEMIA") ||
  comentario.includes("pandemia") ||
  comentario.includes("Pandemia")
) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado");
}
