<script setup>
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())
</script>

<template>
  <ContentRenderer :value="data" />
</template>
