<template>
  <div class="grid grid-flow-col overflow-auto">
    <pokemon-card :pokemon="pokemon" v-for="pokemon in pokemons" :key="pokemon.id"></pokemon-card>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard'
import { mapGetters } from 'vuex'
export default {
  name: 'PokemonListH',
  components: {
    PokemonCard
  },
  computed: {
    ...mapGetters({
      pokemons: 'pokemons/filteredPokemons'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>