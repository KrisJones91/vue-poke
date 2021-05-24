<template>
  <div class="pokemon-component col-3 text-center">
    <ul class="card mt-4 justify-content-center mt-4">
      <li
        class="card mt-1 align-items-center"
        v-for="pokemon in state.pokemon"
        :key="pokemon.name"
      >
        <h6 class="m-2" @click="setActivePokemon(pokemon.url)">
          {{ pokemon.name.slice(0,1).toUpperCase() }}{{ pokemon.name.slice(1) }}
        </h6>
      </li>
    </ul>
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <!-- NOTE figure out how to disable button when no prev or next -->
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
import { logger } from '../utils/Logger'
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
      setActivePokemon(pokemon) {
        pokemonService.getActivePokemon(pokemon)
      },
      prev() {
        // pokemonService.prev()
        logger.log('This function does not work yet, sorry!')
      },
      next() {
        pokemonService.next()
      }
    }
  }
}
</script>

<style scoped>
h6:hover {
  cursor: pointer;
}
</style>
