<template>
  <div class="flex flex-row justify-between items-center pr-2">
    <transition name="fade" appear>
      <!-- <IconDark
        v-if="settings != 'dark'"
        class="icon-theme is-dark cursor-pointer fill-blue"
        @click="changeTheme('dark')"
      />
      <IconLight
        v-else
        class="icon-theme is-light cursor-pointer fill-yellow"
        @click="changeTheme('light')"
      /> -->
      <img
        v-if="theme != 'dark'"
        src="../assets/logos/dark.svg?inline"
        class="icon-theme is-dark cursor-pointer fill-blue"
        @click="setTheme('dark')"
      />
      <img
        v-else
        src="../assets/logos/light.svg?inline"
        class="icon-theme is-light cursor-pointer fill-yellow"
        @click="setTheme('light')"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ThemeSwitch',

  // TODO: the following "component" import method is not working...
  // components: {
  //   IconDark: () => import('@/assets/logos/dark.svg?inline'),
  //   IconLight: () => import('@/assets/logos/light.svg?inline'),
  // },

  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...mapActions(['setTheme'])
  },
}
</script>

<style scoped>
.icon-theme {
  width: 25px;
  height: 25px;
}

.fill-yellow path {
  fill: #fbbf24 !important;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.8s ease-in-out;
  -moz-transition: opacity 0.8s ease-in-out;
  -ms-transition: opacity 0.8s ease-in-out;
  -o-transition: opacity 0.8s ease-in-out;
  transition: opacity 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
