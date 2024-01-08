import imoveis from "../database.js";

export const todosImoveis = (req, res) => {
  res.send(imoveis);
};

export const imovelPorId = (req, res) => {
  const id = req.params.id;
  const imovel = imoveis.find(
    (imovelAtual) => Number(imovelAtual.id) === Number(id)
  );
  if (!imovel) {
    res.send("Imovel não encontrado");
  } else {
    res.send(imovel);
  }
};
