<script setup>
const items = [{
  label: 'Visi',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Tujuan',
  content: 'And, this is the content for Tab2',
}, {
  label: 'Misi',
  content: 'Finally, this is the content for Tab3',
}]
</script>

<template>
  <UContainer class="py-16 md:py-24">
    <UTabs :items="items" :default-index="1" />
  </UContainer>
</template>
