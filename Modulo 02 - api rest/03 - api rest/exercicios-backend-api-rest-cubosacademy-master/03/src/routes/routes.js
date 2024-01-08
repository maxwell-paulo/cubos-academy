import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  changeBook,
  changeBookInfo,
  deletedBook,
} from "../controllers/books.js";

const routes = express();

// read all books
routes.get("/livros", getBooks);

// read book by id
routes.get("/livros/:id", getBookById);

// create book
routes.post("/livros", createBook);

// change book
routes.put("/livros/:id", changeBook);

// change book information
routes.patch("/livros/:id", changeBookInfo);

// delete book
routes.delete("/livros/:id", deletedBook);

export default routes;
