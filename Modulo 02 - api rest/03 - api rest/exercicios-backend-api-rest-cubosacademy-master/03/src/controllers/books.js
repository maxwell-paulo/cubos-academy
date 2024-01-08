import booksList from "../data/booksList.js";

let nextBookId = 3;

// read all books
const getBooks = (req, res) => {
  return res.json(booksList);
};

// read book by id
const getBookById = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }

  const book = booksList.find((currentBook) => currentBook.id === id);

  if (!book) {
    return res.json({
      mensagem: "Não existe livro para o ID informado.",
    });
  }

  return res.json(book);
};

// create book
const createBook = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  const createdBook = {
    id: nextBookId,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  booksList.push(createdBook);

  nextBookId++;

  return res.status(201).json(createdBook);
};

// change book
const changeBook = (req, res) => {
  const id = Number(req.params.id);
  const { titulo, autor, ano, numPaginas } = req.body;

  const book = booksList.find((currentBook) => currentBook.id === id);
  const indexOfBook = booksList.indexOf(book);

  if (!book) {
    return res.json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  }

  const updatedBook = {
    id,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  booksList.splice(indexOfBook, 1, updatedBook);

  return res.json({
    mensagem: "Livro substituído.",
  });
};

// change book information

const changeBookInfo = (req, res) => {
  const id = Number(req.params.id);

  const changedInfo = req.body;

  return res.json({ changedInfo });
};

// delete book

const deletedBook = (req, res) => {
  const id = Number(req.params.id);

  const bookToDelete = booksList.find((currentBook) => currentBook.id === id);

  if (!bookToDelete) {
    return res.json({
      mensagem: "Não existe livro a ser removido para o ID informado.",
    });
  }
  const indexOfBook = booksList.indexOf(bookToDelete);

  booksList.splice(indexOfBook, 1);

  return res.json({
    mensagem: "Livro removido.",
  });
};
export {
  getBooks,
  getBookById,
  createBook,
  changeBook,
  changeBookInfo,
  deletedBook,
};
