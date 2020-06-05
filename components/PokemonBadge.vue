<template>
  <div class="px-4 py-1 m-1 text-xs text-center text-white rounded-lg" :class="badgeClasses">
    {{type}}
  </div>
</template>

<script>
export default {
  name: 'PokemonBadge',
  props: {
    type: {
      default: ''
    }
  },
  computed: {
    badgeClasses() {
      let pokeType = this.type
      return {
        'bg-green-400': pokeType == 'Grass',
        'bg-orange-400': pokeType == 'Fire',
        'bg-purple-400': pokeType == 'Poison',
        'bg-blue-400': pokeType == 'Water',
        'bg-green-600': pokeType == 'Bug',
        'bg-gray-600': pokeType == 'Flying',
        'bg-yellow-400': pokeType == 'Electric',
        'bg-orange-900': pokeType == 'Normal',
        'bg-pink-400': pokeType == 'Fairy',
        'bg-indigo-400': pokeType == 'Psychic',
        'bg-red-600': pokeType == 'Fighting',
        'bg-gray-500': pokeType == 'Rock',
        'bg-orange-800': pokeType == 'Ground',
        'bg-gray-700': pokeType == 'Steel',
        'bg-black': pokeType == 'Ghost',
        'bg-blue-500 bg-opacity-75': pokeType == 'Ice'
      }
    }
  }
}
</script>