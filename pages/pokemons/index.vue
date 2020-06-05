<template>
  <div>
    <div class="flex items-center my-3">
      <div class="flex flex-col items-start breadcrumbs">
        <h3 class="mt-1 text-2xl font-medium leading-tight text-gray-900">Pokédex</h3>
      </div>
      <span class="inline-flex p-1 ml-auto bg-gray-200 border rounded-md">
        <button class="px-2 py-1 rounded" @click="toggleView" :class="!viewHorizontal ? 'bg-white shadow':''">
          <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600">
            <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" stroke-width="2" stroke="currentColor"></path>
          </svg>
        </button>
        <button class="px-2 py-1 rounded" @click="toggleView" :class="viewHorizontal ? 'bg-white shadow':''">
          <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600">
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke-linecap="round" stroke-width="2" stroke="currentColor"></path>
          </svg>
        </button>
      </span>
    </div>
    <search-form></search-form>
    <pokemon-list-h v-if="viewHorizontal"></pokemon-list-h>
    <pokemon-list-v v-if="!viewHorizontal"></pokemon-list-v>

  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import PokemonListV from '@/components/PokemonListV'
import PokemonListH from '@/components/PokemonListH'
import SearchForm from '@/components/SearchForm'
export default {
  transition: 'tweakOpacity',
  components: {
    PokemonListV,
    PokemonListH,
    SearchForm
  },
  methods: {
    ...mapMutations({
      toggleView: 'pokemons/setViewHorizontal'
    })
  },
  computed: {
    ...mapGetters({
      viewHorizontal: 'pokemons/viewHorizontal'
    })
  }
}
</script>