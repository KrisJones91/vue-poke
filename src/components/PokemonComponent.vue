<template>
  <div class="pokemon-component text-center">
    <ul class="card main-card mt-3 justify-content-center">
      <span class="mt-3"></span>
      <li
        class="card sec-card mt-1 mr-5 mb-2"
        v-for="poke in state.pokemon"
        :key="poke.name"
      >
        <h6 class="m-1" @click="getActivePokemon(poke.url)">
          {{ poke.name.slice(0,1).toUpperCase() }}{{ poke.name.slice(1) }}
        </h6>
      </li>
      <span class="mt-3"></span>
    </ul>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <!-- <button class="mr-4" @click="prev">PREV</button>
        <button @click="next">NEXT</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
// import { logger } from '../utils/Logger'
export default {
  name: 'Pokemon',
  props: [],
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.Pokemon),
      next: computed(() => AppState.next),
      prev: computed(() => AppState.prev)
    })
    return {
      state,
      getActivePokemon(poke) {
        pokemonService.getActivePokemon(poke)
      },
      prev() {
        // pokemonService.prev()
        pokemonService.prev()
      },
      next() {
        pokemonService.next()
      }
    }
  }
}
</script>

<style scoped>
.main-card{
  border: 2px solid black;
  background-color: rgba(223, 165, 5, 0.747);
  box-shadow: 1px 3px 10px gainsboro;
}
.sec-card{
  border: 3px outset white;
  box-shadow: 1px 3px 5px gray;
}
.sec-card:hover{
  transform: scale(.95);
  cursor: pointer;
}

</style>
