<template>
  <div class="col-6 text-center">
    <h2 class="mt-3">Active Pokemon</h2>
    <div
      class="row d-flex justify-content-center h-75"
      v-if="state.activePokemon.types"
    >
      <div class="col-12">
        <h1 class="">
          {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
        </h1>
        <h5 class="text-capitalize mt-4">Type: {{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</h5>
      </div>
      <div class="col-3" v-if="state.activePokemon.sprites">
        <!-- <img :src="state.activePokemon.sprites.front_default" alt="" /> -->
        <img
          class="sprite mt-0"
          :src="state.activePokemon.sprites.front_shiny"
          alt=""
        />
      </div>
      <div class="col-12 d-flex justify-content-center">
        <h5 class="align-self-end mr-2">Catch It!</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ActivePoke',
  setup() {
    const state = reactive({
      activePokemon: computed(() => AppState.activePoke)
    })
    return {
      state,
      type() {
        if (state.activePokemon.types.length > 1) {
          return state.activePokemon.types[0].type.name + ' / ' + state.activePokemon.types[1].type.name
        }
        return state.activePokemon.types[0].type.name
      }
    }
  }
}
</script>

<style scoped>
.sprite {
  height: 30vh;
}
</style>
