<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <h1>PokeDex</h1>
    </div>
    <div class="row">
      <Pokemon />
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
</style>
