<template>
  <div class="col-6 text-center">
    <div
      class="row justify-content-center h-75"
      v-if="state.activePokemon.types"
    >
    <!-- Fire -->
      <div class="col-10 mt-4">
        <div class="card-top topper p-2 bg-danger" v-if="state.activePokemon.types[0].type.name === 'fire'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Grass -->
        <div class="card-top topper p-2 bg-success" v-if="state.activePokemon.types[0].type.name === 'grass'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Water -->
        <div class="card-top topper p-2 bg-primary" v-if="state.activePokemon.types[0].type.name === 'water'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Bug -->
        <div class="card-top topper p-2 bg-success" v-if="state.activePokemon.types[0].type.name === 'bug'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Normal -->
        <div class="card-top topper p-2 bg-light" v-if="state.activePokemon.types[0].type.name === 'normal'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Psychic & Poison -->
        <div class="card-top topper p-2 bg-purp" v-if="state.activePokemon.types[0].type.name === 'poison'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <!-- Electric -->
        <div class="card-top topper p-2 bg-warning" v-if="state.activePokemon.types[0].type.name === 'poison'">
          <div class="row justify-content-center">
            <p class="col-4 text-center mb-0 p-0"><small>{{ type().slice(0,1).toUpperCase() }}{{ type().slice(1) }}</small></p>
            <h5 class="col-4 text-center mr-5 mb-0 p-0"><b>
              {{ state.activePokemon.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.name.slice(1) }}
            </b></h5>
            <p class="col-2 text-left mb-0 p-0"><small><b>{{ state.activePokemon.stats[0].base_stat }}</b>hp</small></p>
          </div>
        </div>
        <div class="col-12 text-center topper" v-if="state.activePokemon.sprites">
          <img class="poke-main " :src="state.activePokemon.sprites.front_default" alt="" />
          <!-- <img class="poke-main m-4" :src="state.activePokemon.sprites.other.dream_world.front_default"> -->
        </div>
        <div class="card-body text-left" v-if="state.activePokemon.abilities">
          <div class="row">
            <div class="col text-center text-white">
              <h4>{{ state.activePokemon.abilities[0].ability.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.abilities[0].ability.name.slice(1) }}</h4>
            </div>
            <div class="col text-center text-white">
              <h4>{{ state.activePokemon.abilities[1].ability.name.slice(0,1).toUpperCase() }}{{ state.activePokemon.abilities[1].ability.name.slice(1) }}</h4>
            </div>
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
      // moves() {
      //   let name = ''
      //   let stat = 0
      //   for (let i = 0; i < state.activePokemon.stats.length; i++) {
      //     name += state.activePokemon.stats[i].stat.name
      //     stat += state.activePokemon.stats[i].base_stat
      //     console.log(name, stat)
      //   }
      //   return stat + name
      // }

    }
  }
}
</script>

<style scoped>

.poke-main{
  height: 30vh;
}
.card-body{
  border: 4px solid gold;
  background-color: rgba(0, 0, 0, 0.6);
}
.card-img-top{
  border: 4px solid gold;
}
.topper{
  border: 4px solid gold;
  padding: 0%;
}
.state{
  border: 2px solid black;
}
</style>
