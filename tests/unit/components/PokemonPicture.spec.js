import PokemonPicture from "@/components/PokemonPicture"
import { shallowMount } from "@vue/test-utils"


describe('Pokemon Picture component', ()=>{

    test('Hacer match con Snapshot', ()=>{
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })


    test('Debe mostrar la imagen oculta y el pokemon 100', ()=>{
        
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('hidden-pokemon')).toBe(true)

    })


    test('Debe mostrar la imagen del pokemon si showPokemon: true', ()=>{
        const wrapper = shallowMount(PokemonPicture, {
            props:{
                pokemonId: 100,
                showPokemon: true
            }
        })


        const img1 = wrapper.find('img')

        expect(img1.exists()).toBeTruthy()

        expect(img1.classes('hidden-pokemon')).toBe(false)
        expect(img1.classes('fade-in')).toBe(true)

        expect( img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

})