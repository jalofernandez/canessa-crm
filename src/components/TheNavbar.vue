<template>
  <header class="body-font w-full fixed top-0 z-40 bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
    <div class="container mx-auto px-5">
      <div class="relative flex items-center justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.
              Heroicon name: outline/x
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <TheBrand />
          </div>
          <div class="hidden sm:ml-6 sm:inline-flex sm:items-center sm:justify-center">
            <nav class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 text-base font-medium cursor-pointer"
              >
                Home
              </router-link>
              <router-link
                v-if="!isUserLoggedIn"
                to="/login"
                class="px-3 py-2 rounded-md text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 text-base font-medium cursor-pointer"
              >
                Login
              </router-link>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </nav>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <ThemeSwitch />

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <nav class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 font-medium cursor-pointer"
        >
          Home
        </router-link>
        <router-link
          v-if="!isUserLoggedIn"
          to="/login"
          class="block px-3 py-2 rounded-md text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300 font-medium cursor-pointer"
        >
          Login
        </router-link>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
      </nav>
    </div>
  </header>

  <!-- <header class="body-font w-full fixed top-0 z-40 bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
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
  </header> -->
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
