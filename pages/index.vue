<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
  <ContentRenderer :value="data" />
</template>
