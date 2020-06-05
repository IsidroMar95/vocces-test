<template>
  <div class="flex w-56 px-2 mx-auto mb-4">
    <div class="relative flex-col flex-grow px-4 py-2 bg-white rounded shadow ">
      <div class="flex flex-row items-center justify-between py-2">
        <div class="flex flex-row items-center">
          <nuxt-link class="flex flex-row items-center rounded-lg focus:outline-none focus:shadow-outline" :to="`/pokemons/${pokemon.id}`">
            {{pokemon.name}}
          </nuxt-link>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-xs font-semibold text-gray-500">{{pokemon.id}}</p>
        </div>
      </div>
      <div class="my-2">
        <nuxt-link :to="`/pokemons/${pokemon.id}`">
          <img class="w-20 h-20 mx-auto rounded" :src="pokemon.sprites.animated" :alt="pokemon.name">
        </nuxt-link>
        <div class="flex flex-wrap items-center justify-center w-full py-2">
          <pokemon-badge :type="type" v-for="type in pokemon.type" :key="type.id"></pokemon-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonBadge from '@/components/PokemonBadge'
export default {
  name: 'PokemonCard',
  components: {
    PokemonBadge
  },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
</style>