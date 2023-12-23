<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title',
  },
  subtitle: {
    type: String,
    default: 'Default description',
  },
  image: {
    type: String,
    default: '/img/',
  },
})
</script>

<template>
  <section>
    <div class="h-screen">
      <img :src="image" class="absolute inset-0 object-cover w-full h-screen">

      <UContainer class="relative h-screen bg-gray-50 dark:bg-opacity-90 dark:bg-gray-950 bg-opacity-80">
        <UContainer class="flex items-center justify-center h-screen">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full max-w-2xl">
              <h1 class="text-center">
                {{ title }}
              </h1>
              <p class="text-center">
                {{ subtitle }}
              </p>
            </div>
          </div>
        </UContainer>
      </UContainer>
    </div>
  </section>
</template>
