<template>
  <h1
    v-html="title"
    class="my-4 text-xl md:text-2xl font-medium title-font text-brand-200 dark:text-sky-300 leading-tight"
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
