import express from "express";
import {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
} from "../controllers/students.js";

const routes = express();

// read all students
routes.get("/alunos", getStudents);

// read on student
routes.get("/alunos/:id", getStudentById);

// create student
routes.post("/alunos", createStudent);

// delete student
routes.delete("/alunos/:id", deleteStudent);

export default routes;
