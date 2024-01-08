import guestsList from "../data/guestsList.js";

// read all guests
const getGuests = (req, res) => {
  const name = req.query.nome;

  if (!name) {
    return res.json(guestsList);
  }

  const searchedName = guestsList.find((guest) => guest === name);

  if (!searchedName) {
    return res.json({
      mensagem: "O convidado buscado não está presente na lista.",
    });
  }

  return res.json({
    mensagem: "Convidado presente.",
  });
};

// create guest
const createGuest = (req, res) => {
  const name = req.body.nome;

  const searchedName = guestsList.find((guest) => guest === name);

  if (searchedName) {
    return res.json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }

  guestsList.push(name);

  return res.json({
    mensagem: "Convidado adicionado.",
  });
};

// delete guest
const deleteGuest = (req, res) => {
  const name = req.params.nome;

  if (!guestsList.includes(name)) {
    return res.json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }

  guestsList.splice(name, 1);

  return res.json({
    mensagem: "Convidado removido.",
  });
};

export { getGuests, createGuest, deleteGuest };
