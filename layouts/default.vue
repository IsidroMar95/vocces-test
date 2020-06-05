<template>
  <div class="flex flex-col h-screen">
    <nav-bar></nav-bar>
    <div class="flex flex-1 overflow-hidden">
      <sidebar></sidebar>
      <div class="flex-1 overflow-auto">
        <main class="bg-gray-100">
          <div class="flex overflow-auto">
            <div class="flex-1 overflow-y-auto">
              <div class="container flex-grow mx-auto mt-6 mb-10">
                <div class="flex flex-col md:px-5">
                  <nuxt />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div v-if="toggleSidebar" @click="toggleS" class="fixed inset-0 z-10 bg-black opacity-25 md:hidden" tabindex="-1">
    </div>
  </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex'
import NavBar from '@/components/TheNavbar'
import Sidebar from '@/components/TheSidebar'
export default {
  components: {
    NavBar,
    Sidebar
  },
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