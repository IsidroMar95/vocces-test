<template>
  <div class="flex flex-col w-full px-2 my-5">
    <div class="relative block w-full">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" class="w-4 h-4 text-blue-500 fill-current">
          <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
        </svg>
      </span>
      <input placeholder="Nombre" v-model="search" class="block w-full px-3 py-1 pl-8 pr-4 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-400 rounded-md focus:placeholder-gray-500 focus:text-gray-900 focus:outline-none focus:shadow-outline">
    </div>

    <div class="flex flex-row my-2">
      <span class="mr-3 text-sm">
        Tipo:
      </span>
      <div class="flex flex-wrap space-x-1">
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Poison" name="Poison" value="Poison" type="checkbox" class="mr-1">
          <span class="text-sm">Poison</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Grass" name="Grass" value="Grass" type="checkbox" class="mr-1">
          <span class="text-sm">Grass</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Fire" name="Fire" value="Fire" type="checkbox" class="mr-1">
          <span class="text-sm">Fire</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Water" name="Water" value="Water" type="checkbox" class="mr-1">
          <span class="text-sm">Water</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Bug" name="Bug" value="Bug" type="checkbox" class="mr-1">
          <span class="text-sm">Bug</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Flying" name="Flying" value="Flying" type="checkbox" class="mr-1">
          <span class="text-sm">Flying</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Electric" name="Electric" value="Electric" type="checkbox" class="mr-1">
          <span class="text-sm">Electric</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Normal" name="Normal" value="Normal" type="checkbox" class="mr-1">
          <span class="text-sm">Normal</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Fairy" name="Fairy" value="Fairy" type="checkbox" class="mr-1">
          <span class="text-sm">Fairy</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Psychic" name="Psychic" value="Psychic" type="checkbox" class="mr-1">
          <span class="text-sm">Psychic</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Fighting" name="Fighting" value="Fighting" type="checkbox" class="mr-1">
          <span class="text-sm">Fighting</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Rock" name="Rock" value="Rock" type="checkbox" class="mr-1">
          <span class="text-sm">Rock</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Steel" name="Steel" value="Steel" type="checkbox" class="mr-1">
          <span class="text-sm">Steel</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Ghost" name="Ghost" value="Ghost" type="checkbox" class="mr-1">
          <span class="text-sm">Ghost</span>
        </label>
        <label class="flex items-center justify-center cursor-pointer">
          <input v-model="type" id="Ice" name="Ice" value="Ice" type="checkbox" class="mr-1">
          <span class="text-sm">Ice</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  computed: {
    search: {
      get() {
        return this.$store.state.pokemons.filter.query
      },
      set(val) {
        this.$store.commit('pokemons/setQuery', val)
      }
    },
    type: {
      get() {
        return this.$store.state.pokemons.filter.types
      },
      set(val) {
        this.$store.commit('pokemons/setType', val)
      }
    }
  }
}
</script>
