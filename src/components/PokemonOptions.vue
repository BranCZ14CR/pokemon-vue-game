<template>
  <div class="">
    <ul class="col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 mx-auto mb-5 mt-5">
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
        class="btn btn-warning"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  //Propiedades del componente
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}

li {
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 5px 5px 5px;
  width: 250px;
  color: white;
  text-transform: capitalize;
}
</style>