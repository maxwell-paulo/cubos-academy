import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import pool from "../conexaoDB.js";
import senhaJwt from "../senhaJwt.js";

// Criar novo usuário
const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query(
            `INSERT INTO usuarios (nome, email, senha)
            VALUES ($1, $2, $3)
            RETURNING *`, 
            [nome, email, senhaCriptografada]
        )

        return res.status(201).json(novoUsuario.rows[0])

    } catch (error) {
        if (!email || !senha || !nome) {
            return res.status(400).json({mensagem: "Todos os campos devem ser informados"})
        }

        if (error.constraint === 'usuarios_email_key') {
            return res.status(400).json({mensagem: "E-mail já cadastrado"})
        }
        return res.status(500).json({mensagem: "Erro interno do servidor"})
    }
}

//logar usuario
const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const usuario = await pool.query(`SELECT * FROM usuarios
        WHERE email = $1`, [email])

        if (usuario.rowCount < 1) {
            return res.status(404).json({mensagem: "Email ou senha inválido"})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if (!senhaValida) {
            return res.status(400).json({mensagem: "Email ou senha inválido"})
        }

        const token = jwt.sign({id: usuario.rows[0].id}, senhaJwt, {expiresIn: "8h"})
        

        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.json({usuario: usuarioLogado, token})
    } catch {
        return res.status(500).json({mensagem: "Erro interno do servidor"})
    }

}






export {cadastrarUsuario, login}