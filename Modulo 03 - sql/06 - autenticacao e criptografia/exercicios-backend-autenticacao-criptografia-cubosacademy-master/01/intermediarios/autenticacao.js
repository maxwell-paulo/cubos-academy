import jwt from 'jsonwebtoken';
import senhaJwt from "../senhaJwt.js";
import pool from '../conexaoDB.js';

const verificarUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers
    
    if (!authorization) {
        return res.status(401).json({mensagem: "Não autorizado"})
    }

    const token = authorization.split(" ")[1]

    try {
        const { id } = jwt.verify(token, senhaJwt)
        
        const usuario = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [id])

        if (!usuario.rows[0]) {
            return  res.status(503).send('Usuário não encontrado')
        }

        next()
    } catch {
        return res.status(401).json({mensagem: "Não autorizado"})
    }

}

export default verificarUsuarioLogado