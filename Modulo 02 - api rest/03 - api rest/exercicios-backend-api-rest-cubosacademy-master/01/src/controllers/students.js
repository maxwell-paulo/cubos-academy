import students from "../data/students.js";

let nextStundetId = 1;

const getStudents = (req, res) => {
  return res.json(students);
};

const getStudentById = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ message: "O id informado não é um número válido." });
  }

  const student = students.find((currentStudent) => currentStudent.id === id);

  if (!student) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  return res.json(student);
};

const createStudent = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome) {
    return res
      .status(400)
      .json({ message: "O nome do aluno deve ser informado." });
  }

  if (!sobrenome) {
    return res
      .status(400)
      .json({ message: "O sobronome do aluno deve ser informado." });
  }

  if (!idade) {
    return res
      .status(400)
      .json({ message: "A idade do aluno deve ser informado." });
  }

  if (!curso) {
    return res
      .status(400)
      .json({ message: "O curso do aluno deve ser informado." });
  }

  if (idade < 18) {
    return res
      .status(400)
      .json({ message: "O aluno deve ter pelo menos 18 anos" });
  }

  const createdStudent = {
    id: nextStundetId,
    nome,
    sobrenome,
    idade,
    curso,
  };

  students.push(createdStudent);

  nextStundetId++;

  return res.status(201).send();
};

const deleteStudent = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ message: "O id informado não é um número válido." });
  }

  const deletedStudent = students.find(
    (currentStudent) => currentStudent.id === id
  );

  const deletedStudentIndex = students.indexOf(deletedStudent);

  if (!deletedStudent) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  students.splice(deletedStudentIndex, 1);
  return res.json(deletedStudent);
};

export { getStudents, getStudentById, createStudent, deleteStudent };
