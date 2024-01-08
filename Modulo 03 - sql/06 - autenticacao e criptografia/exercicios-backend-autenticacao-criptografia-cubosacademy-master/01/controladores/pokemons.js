import pool from "../conexaoDB.js"

//cadastrar pokemon
const criarPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem } = req.body
    

    try{   
        if (!nome || !habilidades) {
            return res.status(400).json({
              mensagem: "Os campos nome e habilitades são obrigatórios.",
            });
          }

        await pool.query(`INSERT INTO pokemons
          (nome, habilidades, imagem, apelido)
          VALUES
          ($1, $2, $3, $4)`, [nome, habilidades, imagem, apelido])


        return res.status(201).json('Pokemon criado')
    } catch(error) {
        
        return res.status(500).json({mensagem: "Erro interno do servidor"})
    }
}


//atualizar apelido
const mudarApelido = async (req, res) => {
    const { apelido } = req.body
    const { id } = req.params
    
    try {
        const novoApelido = pool.query(`UPDATE pokemons
        SET apelido = $1
        WHERE id = $2`, [apelido, id])

        return res.json("Pokemon atualizado")

    } catch {
        return res.status(500).json({mensagem: "Erro interno do servidor"})
    }
}

//ler todos pokemons
const lerPokemons = async (req, res) => {
    const pokemons = await pool.query(`SELECT * FROM pokemons`)

    const PokemonsEditados = pokemons.rows.map((pokemon) => {
        pokemon.habilidades = pokemon.habilidades.split(",")
       return pokemon
    })
    return res.json(PokemonsEditados)
}

//ler um pokemon
const lerPokemon = async (req, res) => {
    const { id } = req.params
    try {
    const pokemon = await pool.query(`SELECT * FROM pokemons WHERE id= $1`, [id])

    const pokemonEditado = pokemon.rows.map((pokemon) => {
        pokemon.habilidades = pokemon.habilidades.split(",")
       return pokemon
    })
    return res.json(pokemonEditado)
} catch {
    return res.status(500).json({mensagem: "Erro interno do servidor"})
}
}

//deletar um pokemon
const deletarPokemon = async (req, res) => {
    const { id } = req.params

    try {
        await pool.query(`DELETE FROM pokemons WHERE id = $1`, [id])

        return res.json("Pokemon deletado")
    } catch {
        return res.status(500).json({mensagem: "Erro interno do servidor"})
    }
}

export { criarPokemon, mudarApelido, lerPokemons, lerPokemon, deletarPokemon }