<template>
  <div class="col-6 text-center">
    <div
      class="row justify-content-center h-75"
      v-if="state.activePokemon.types"
    >
      <div class="col-10 mt-4">
        <div class="card">
          <div class="card-header">
            <h1>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </h1>
          </div>
          <h5 class="text-capitalize mt-4">Type: {{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</h5>
          <div class="col-12 text-center" v-if="state.activePokemon.sprites">
            <!-- <img :src="state.activePokemon.sprites.front_default" alt="" /> -->
            <img class="poke-main" :src="state.activePokemon.sprites.other.dream_world.front_default">
          </div>
        </div>
      </div>
      <!-- <div class="col-12 d-flex justify-content-center">
        <h5 class="align-self-end mr-2">Catch It!</h5>
      </div> -->
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

.poke-main{
  height: 30vh;
}

</style>
