<template class=" col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 mx-auto mb-5">
  <template v-if="!pokemon">
    <div class="text-center">
        <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  </template>

  <div v-else>
    <h1 class="text-center mb-3 text-white">¿Quién es este pokémon?</h1>

    <PokemonPicture  :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

    <template v-if="showAnswer">
      <h3 class="fade-in text-center mb-3 text-white">{{ message }}</h3>

      <button @click="newGame()" class="btn btn-info mb-3">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",

  components: {
    PokemonPicture,
    PokemonOptions,
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },

  methods: {
    //Obtener los nombres de los pokemos
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      //Obtener un pokemon de forma aleatoria
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },

    //Comprobar la respuesta correcta
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.message = `Felicitaciones atrapaste a un ${this.pokemon.name}`;
      } else {
        this.message = `Oh no se te ha escapado un ${this.pokemon.name}`;
      }
    },

    //Reiniciar el juego
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },

  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>