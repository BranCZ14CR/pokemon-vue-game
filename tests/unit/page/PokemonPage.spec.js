import PokemonOptions from "@/components/PokemonOptions"
import PokemonPicture from "@/components/PokemonPicture"
import PokemonPage from "@/pages/PokemonPage"
import { shallowMount, mount } from "@vue/test-utils"
import {pokemons} from '../mocks/pokemons.mock'

describe('Pokemon Page component', ()=>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })

    test('Hacer match con Snapshot', ()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })


    test('Debe llamar el mixPokemonArray al mounted', ()=>{
        const mixPokemonArray = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemonArray).toHaveBeenCalled()
    })


    test('Hacer match con el snapshot cuando se cargan los pokemons', ()=>{
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: "",
                };
            },
        })

        expect(wrapper.html()).toMatchSnapshot()
    })


    test('Mostrar los componentes de Pokemon Picture y Options', ()=>{

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: "",
                };
            },
        })

        const pokemonP = wrapper.find('pokemon-picture-stub')
        const pokemonO = wrapper.find('pokemon-options-stub')

        expect(pokemonP).toBeTruthy()
        expect(pokemonO).toBeTruthy()
        
        expect(pokemonP.attributes('pokemonid')).toBe('1')
        expect(pokemonO.attributes('pokemons')).toBeTruthy()
    })

    test('Pruebas con checkAnswer', async ()=>{

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemonArr: pokemons,
                  pokemon: pokemons[0],
                  showPokemon: false,
                  showAnswer: false,
                  message: "",
                };
            },
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h3').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h3').text()).toBe(`Felicitaciones atrapaste a un ${ pokemons[0].name }`)

        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Oh no se te ha escapado un ${ pokemons[0].name }`)
    })

})