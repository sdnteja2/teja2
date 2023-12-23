<script lang="ts" setup></script>

<template>
  <div>
    <UContainer class="bg-merah dark:bg-merah-600">
      <!-- Testimonials -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div class="hidden md:block mb-24 md:mb-0 sm:px-6">
            <div class="relative">
              <img class="rounded-xl" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80" alt="Image Description">
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
                  To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
                </p>
              </div>

              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="md:hidden flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
                  </div>
                  <div class="ms-4 md:ms-0">
                    <div class="text-base font-semibold dark:text-gray-900 text-gray-800 ">
                      Nama
                    </div>
                    <div class="text-xs  dark:text-gray-300">
                      Kepalassekolah
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
