<template>
  <div class="col-6 text-center">
    <div
      class="row justify-content-center h-75"
      v-if="state.activePokemon.types"
    >
      <div class="col-10 mt-4">
        <div class="card p-2">
          <div class="card-header">
            <p class="mb-0 mt-2 ml-3 text-left">
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </p>
            <p class="mt-0 mb-1"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
          </div>
          <div class="col-12 text-center card-body" v-if="state.activePokemon.sprites">
            <!-- <img :src="state.activePokemon.sprites.front_default" alt="" /> -->
              <img class="poke-main m-4" :src="state.activePokemon.sprites.other.dream_world.front_default">
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
.card-body{
  border: 6px solid gold;
  background-color: rgb(109, 109, 199, 0.6);
}
.card-header{

}
</style>
