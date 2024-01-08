import pool from "../conexãoDB.js";

// criar novo autor
const criarAutor = async (req, res) => {
  try {
    const { nome, idade } = req.body;

    if (!nome) {
      return res.status(400).json({
        mensagem: "o campo nome é obrigatório.",
      });
    }

    const query = `INSERT INTO autores
    (nome, idade)
    VALUES
    ($1, $2)
    RETURNING id, nome, idade`;
    const params = [nome, idade];

    const autorCriado = await pool.query(query, params);

    return res.status(201).json(autorCriado.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

// ler um autor
const lerAutor = async (req, res) => {
  try {
    const { id } = req.params;

    const query = `SELECT autores.id AS id_autor, autores.nome AS nome_autor, autores.idade, livros.id AS id_livro, livros.nome AS nome_livro, livros.genero, livros.editora, livros.data_publicacao 
    FROM autores
    FULL JOIN livros
    ON autores.id = livros.autor_id
     WHERE autores.id = $1`

    const params = [id];

    const resultado = await pool.query(query, params);

    if (resultado.rowCount === 0) {
      return res.status(400).json({
        mensagem: "Autor não encontrado.",
      });
    }

    const autor = {
      id: resultado.rows[0].id_autor,
      nome: resultado.rows[0].nome_autor,
      idade: resultado.rows[0].idade,
      livros: []
    }

    resultado.rows.forEach((row) => {
      if (row.nome_livro) {
        autor.livros.push({
          id: row.id_livro,
          nome: row.nome_livro,
          genero: row.genero,
          editora: row.editora,
          data_publicacao: row.data_publicacao
        })
      }
    })

    return res.json(autor);
  } catch (error) {
    console.log(error);
  }
};

const criarLivro = async (req, res) => {
  try {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    if (!nome) {
      return res.status(400).json({
        mensagem: "o campo nome é obrigatório.",
      });
    }

    const query = `INSERT INTO livros
    (nome, genero,  editora, data_publicacao, autor_id)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING id, nome, genero, editora`;
    const params = [nome, genero, editora, data_publicacao, id];

    const livroCriado = await pool.query(query, params);

    return res.status(201).json(livroCriado.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const lerLivros = async (req, res) => {
try {

  const query = `SELECT livros.id AS id_livro, livros.nome AS nome_livro, livros.genero, livros.editora, livros.data_publicacao, autores.id AS id_autor, autores.nome AS nome_autor, autores.idade
  FROM livros
  JOIN autores
  ON livros.autor_id = autores.id`

  const resultado = await pool.query(query);

  const livros = []

  resultado.rows.forEach((row) => {
    livros.push({
      id: row.id_livro,
      nome: row.nome_livro,
      genero: row.genero,
      editora: row.editora,
      data_publicacao: row.data_publicacao,
      autor: {
        id: row. id_autor,
        nome: row.nome_autor,
        idade: row.idade
      }
    })
  })

  return res.json(livros);

} catch (error) {
  console.log(error)
}
}

export { criarAutor, lerAutor, criarLivro, lerLivros };
