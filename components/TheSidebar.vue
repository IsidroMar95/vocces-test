<template>
  <div :class="toggleSidebar ? 'transform translate-x-0 transition-transform duration-300 ease-out' : 'transform -translate-x-full transition-transform duration-200 ease-in'" class="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-gray-100 border-r md:w-56 md:static md:block md:transform md:translate-x-0 md:transition-none">
    <div class="flex items-center justify-between block px-4 mt-3 md:hidden">
      <span class="ml-4 text-sm text-xl font-medium tracking-widest text-blue-500">
        VOCCES
      </span>
      <button @click="toggleS" class="text-gray-900 lg:hidden">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z" />
        </svg>
      </button>
    </div>
    <nav class="flex flex-col mt-8 md:mt-5 ">
      <div class="flex flex-col px-3 mx-3">
        <ul>
          <li>
            <nuxt-link to="/" @click.native="toggleS" class="sidebar-link group hover:bg-gray-200">
              <span class="flex items-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-sidebar group-hover:text-blue-600 ">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span class="ml-3 group-hover:text-blue-900">Inicio</span>
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pokemons" @click.native="toggleS" class="sidebar-link group hover:bg-gray-200">
              <span class="flex items-center justify-center ">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon-sidebar group-hover:text-blue-600" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span class="ml-3 group-hover:text-blue-900">Pokemons</span>
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleS: 'sidebar/setToggleSidebar'
    })
  },
  computed: {
    ...mapGetters({
      toggleSidebar: 'sidebar/toggleSidebar'
    })
  }
}
</script>

<style lang="scss">
.sidebar-link {
  @apply font-medium flex items-center justify-between px-3 py-2 -mx-3 text-sm rounded-sm font-medium text-gray-900;
}

.sidebar-link_active {
  @apply bg-gray-200 text-blue-900;
}

.sidebar-link_active:hover {
  @apply bg-gray-200 text-blue-900;
}

.icon-sidebar {
  @apply w-6 h-6 text-gray-500;
}

.icon-sidebar_active {
  @apply text-blue-600;
}
</style>