<template>
  <div class="home container-fluid">
    <div class="row">
      <h1>Poke</h1>
    </div>
    <div class="row">
      <Pokemon />
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
      await pokemonService.getPokemon()
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
</style>
