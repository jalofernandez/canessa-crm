<template>
  <router-link to="/" class="special-link anim-appear flex title-font font-medium items-center">
    <img alt="Vue logo" src="../assets/logos/petsmanager--logotype.svg" width="50" height="50">
    <span class="ml-2 text-xl font-light text-brand-500 hover:text-brand-300">
      <span class="font-bold">Pets</span>Manager
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'TheBrand'
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
