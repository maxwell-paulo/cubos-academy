import express from "express"
import { cadastrarUsuario, login } from "../controladores/usuarios.js"
import { criarPokemon, mudarApelido, lerPokemons, lerPokemon, deletarPokemon } from "../controladores/pokemons.js"
import verificarUsuarioLogado from "../intermediarios/autenticacao.js"

const rotas = express()

// Criar novo usuario
rotas.post("/usuario", cadastrarUsuario)

// logar usuario
rotas.post("/login", login)

rotas.use(verificarUsuarioLogado)

// Criar pokemon
rotas.post("/pokemon", criarPokemon)

// Mudar apelido do pokemon
rotas.put("/pokemon/:id", mudarApelido)

//ler todos pokemons
rotas.get("/pokemons", lerPokemons)

//ler um pokemon
rotas.get("/pokemons/:id", lerPokemon)

//deletar pokemon
rotas.delete("/pokemons/:id", deletarPokemon)

export default rotas