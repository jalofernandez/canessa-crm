<template>
  <div id="app" class="min-h-screen grid grid-rows-1">
    <TheNavbar v-if="isUserLoggedIn" />
    <main :class="['w-full', 'text-gray-600', 'body-font', 'relative', { 'pt-20' : isUserLoggedIn}]">
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

/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
section {
  padding: 2rem;
  max-width: 1024px;
  margin: 0 auto;
} 
*/
</style>
