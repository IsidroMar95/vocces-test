<template>
  <div class="bg-white shadow ">
    <div class="flex flex-wrap mx-auto my-5 lg:w-4/5">
      <img alt="ecommerce" class="w-64 h-64 mx-auto rounded" :src="pokemon.sprites.large">
      <div class="w-full pl-8 mt-6 lg:w-1/2 lg:mt-0">
        <h2 class="tracking-widest text-gray-500 title-font">{{pokemon.id}}</h2>
        <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">{{pokemon.name}}</h1>
        <div class="flex mb-4 ">
          <div class="px-4 py-1 text-xs text-white bg-red-800 rounded-full">
            Attack - {{pokemon.attack}}
          </div>
          <div class="px-4 py-1 mx-2 text-xs text-white bg-blue-800 rounded-full">
            Defense - {{pokemon.defense}}
          </div>
        </div>
        <div class="flex flex-col border-t-2">
          <span class="text-gray-500 title-font">Type</span>
          <pokemon-badge :type="type" v-for="type in pokemon.type" :key="type.id"></pokemon-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokemonBadge from '@/components/PokemonBadge'
export default {
  transition: 'tweakOpacity',
  components: {
    PokemonBadge
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState('pokemons', ['pokemons']),
    pokemon() {
      return this.pokemons.find(pokemon => pokemon.id === this.id)
    }
  }
}
</script>
