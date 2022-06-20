import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('GetPokemonOptions', ()=>{

    test('Regresar un arreglo de números', ()=>{
        //Obtener el arreglo de números
        const pokemons = getPokemons()

        //Comprobaciones esperadas
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })


    test('Regresa un arreglo de 4 elementos con nombres de pokemons', async ()=>{
        const pokemons = await getPokemonsNames( [1,2,3,4] )

        expect( pokemons ).toStrictEqual(
            [
                { name: 'bulbasaur', id: 1 },
                { name: 'ivysaur', id: 2 },
                { name: 'venusaur', id: 3 },
                { name: 'charmander', id: 4 }
            ]
        )
    })


    test('GetPokemonOptions debe retornar un arreglo mezclado', async ()=>{
        
        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual( [
            { name: expect.any(String) , 
               id: expect.any(Number) 
            }
            ,
            
            { name: expect.any(String) , 
               id: expect.any(Number) 
            }
            ,
            
            { name: expect.any(String) , 
               id: expect.any(Number) 
            }
            ,
            
            { name: expect.any(String) , 
               id: expect.any(Number) 
            }
        ])
    })
})