//Logica para obtener los nombres de los pokemons

import pokemonAPI from "@/api/pokemonApi"

//Funcion para obtener los pokemons
const getPokemons = () => {
    //Crear un arreglo vacio
    const pokemonsArr = Array.from(Array(650))

    //Retornar y barrer cada posicion
    return pokemonsArr.map(( _ , index) => index + 1)
}


//Funcion para saber los nombres de los pokemons
const getPokemonsNames = async ([pokemon1, pokemon2, pokemon3, pokemon4] = []) =>{
    //Disparar un arreglo de promesas
    const promiseArr = [
        pokemonAPI.get(`/${ pokemon1 }`),
        pokemonAPI.get(`/${ pokemon2 }`),
        pokemonAPI.get(`/${ pokemon3 }`),
        pokemonAPI.get(`/${ pokemon4 }`)
    ]

    //Obtener las respuestas de las peticiones
    const [op1, op2, op3, op4] = await Promise.all( promiseArr )


    //Retornar los valores
    return[
        {name: op1.data.name, id: op1.data.id},
        {name: op2.data.name, id: op2.data.id},
        {name: op3.data.name, id: op3.data.id},
        {name: op4.data.name, id: op4.data.id}
    ]
} 


const getPokemonOptions = async () => {
    //Mezclar los pokemons del arreglo 
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    //Obtener solo los primeros 4 pokemons y saber que nombre contiene cada uno
    const pokemons = await getPokemonsNames( mixPokemons.splice(0, 4) )

    return pokemons
}


export default getPokemonOptions