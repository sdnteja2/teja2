<script setup>
defineProps({
  nama: {
    type: String,
    default: 'Default title',
  },
  sambutan: {
    type: String,
    default: 'Default description',
  },
  jabatan: {
    type: String,
    default: 'Default description',
  },
  image: {
    type: String,
    default: '/img/man.jpg',
  },
})
</script>

<template>
  <div>
    <UContainer class="bg-merah patternbg dark:bg-merah-600">
      <!-- Testimonials -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div class="relative">
              <TwicImg class="rounded-xl" :src="image" :alt="nama" />
            </div>
          </div>
          <!-- End Col -->

          <div>
            <!-- Blockquote -->
            <blockquote class="relative">
              <div class="relative z-10">
                <p class="text-xs font-semibold  tracking-wide uppercase mb-3 text-gray-100 dark:text-gray-900 ">
                  Selayang Pandang
                </p>

                <p class="text-xl font-medium   md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-300 ">
                  {{ sambutan }}
                </p>
              </div>

              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="sm:hidden flex-shrink-0">
                    <TwicImg class="rounded-full h-20" :src="image" :alt="nama" />
                  </div>
                  <div class="ms-4 md:ms-0">
                    <div class="text-base font-semibold dark:text-gray-900 text-gray-800 ">
                      {{ nama }}
                    </div>
                    <div class="text-xs  dark:text-gray-300">
                      {{ jabatan }}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            <!-- End Blockquote -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Testimonials -->
    </UContainer>
  </div>
</template>

<style scoped></style>
