<template>
  <header class="body-font w-full fixed top-0 z-40 bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <TheBrand />

      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300 md:dark:border-navy-700 flex flex-wrap items-center text-base justify-center">
        <router-link
          to="/"
          class="mr-5 text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 font-medium cursor-pointer"
        >
          Home
        </router-link>
        <router-link
          v-if="!isUserLoggedIn"
          to="/login"
          class="mr-5 text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 font-medium cursor-pointer"
        >
          Login
        </router-link>
        <ThemeSwitch />
      </nav>

      <div class="flex flex-row items-center">
        <div class="flex flex-col items-end justify-end mr-2">
          <!-- <NuxtLink
            v-if="isUserLog"
            :to="`/auth/${$nuxt.$fire.auth.currentUser.uid}`"
            class="special-link w-40 mb-1 truncate inline-block text-right font-medium text-xs text-navy-500 hover:text-navy-900 dark:text-sky-300 dark:hover:text-white"
          >
            <span v-if="$nuxt.$fire.auth.currentUser.displayName">
              {{ $nuxt.$fire.auth.currentUser.displayName }}
            </span>
            <span v-else>
              {{ $nuxt.$fire.auth.currentUser.email }}
            </span>
          </NuxtLink> -->

          <!-- <button
            v-if="isUserLog"
            type="button"
            class="inline-flex items-center bg-red-100 hover:bg-red-200 border-0 py-0.5 px-2 focus:outline-none rounded text-xs text-red-500 hover:text-red-600 mt-4 md:mt-0"
            @click="logout()"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> -->
          <button
            @click="logoutUser()"
            type="button"
            class="inline-flex items-center bg-red-100 hover:bg-red-200 border-0 py-0.5 px-2 focus:outline-none rounded text-xs text-red-500 hover:text-red-600 mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheBrand from '@/components/TheBrand.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheNavbar',
  components: {
    TheBrand,
    ThemeSwitch
  },
  computed: {
    ...mapGetters(['isUserLoggedIn'])
  },
  methods: {
    ...mapActions(['logoutUser'])
  }
}
</script>
