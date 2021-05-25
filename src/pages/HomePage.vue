<template>
  <div class="home container-fluid bg-dark">
    <div class="row justify-content-center">
      <h1 class="text-white mt-5">Pokemon</h1>
    </div>
    <div class="row">
      <div class="col-4 main">
      <Pokemon />
      </div>
      <ActivePoke />
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      await pokemonService.getPoke()
    })
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.main{
    max-height: 480px;
  overflow-y: auto;
  border: outset white 3px;
  background-color: rgba(0, 0, 0, 0.64);
  border-radius: 2%;
  margin: 2%;
}
</style>
