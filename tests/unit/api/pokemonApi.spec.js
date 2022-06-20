//Pruebas de api pokemon

import axios from '@/api/pokemonApi'

describe('pokemonAPI', () => {

    test('Axios debe estar configurado a la url de Pokemon Api', ()=>{
        expect(axios.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})