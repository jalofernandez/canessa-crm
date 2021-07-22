<template>
  <router-link to="/" class="special-link anim-appear flex title-font font-medium items-center">
    <img alt="Vue logo" src="../assets/logo.png" width="50" height="50">
    <span class="text-xl text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300">
      <b>Check</b>Point
    </span>
  </router-link>
</template>

<script>
// import LogoImage from '@/assets/logo.svg?inline'
// import LogoImage from '@/assets/logo.png'

export default {
  name: 'TheBrand',
  // components: { LogoImage },
}
</script>

<style>
.anim-appear {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
