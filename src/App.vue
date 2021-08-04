<template>
  <div id="app" class="min-h-screen grid grid-rows-1 bg-white dark:bg-black">
    <TheNavbar v-if="isUserLoggedIn" />
    <main :class="['w-full', 'text-gray-600', 'body-font', 'relative', 'bg-white', 'dark:bg-navy-900', { 'pt-20' : isUserLoggedIn}]">
      <transition name="page-transition" appear>
        <router-view/>
      </transition>
    </main>
    <TheFooter v-if="isUserLoggedIn" />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    TheFooter,
    TheNavbar
  },
  computed: {
    ...mapGetters(['isUserLoggedIn']),
    ...mapState(['theme'])
  }
}
</script>


<style>
@import './styles/tailwind.css';
</style>
