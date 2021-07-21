<template>
  <h1
    v-html="title"
    class="sm:text-3xl text-2xl font-medium title-font my-4 text-pink-500 dark:text-sky-300 leading-tight"
  ></h1>
</template>

<script>
export default {
  name: 'TheTitle',
  props: {
    title: String,
    default: 'Canessa CRM manager'
  }
}
</script>
