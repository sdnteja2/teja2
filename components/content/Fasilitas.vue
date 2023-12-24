<script lang="ts" setup>
const facilities = [
  { name: 'Lab Komputer' },
  { name: 'Lapangan Olahraga' },
  { name: 'Taman Baca' },
  { name: 'UKS' },
  { name: 'Perpustakaan' },
]
</script>

<template>
  <div>
    <UContainer class="py-20 md:py-24">
      <h2 class="text-3xl md:text-4xl  text-center">
        Fasilitas Sekolah
      </h2>
      <div class="grid mt-4 md:grid-cols-2 items-center justify-center ">
        <div class=" items-center">
          <div class="max-h-max">
            <img class="shadow-xl object-cover h-80  w-full rounded-md" src="/img/kelas.jpg" alt="Image Description">
          </div>
        </div>
        <div class="md:pl-4 mt-4 md:mt-0 space-y-2">
          <UCard v-for="(facility, index) in facilities" :key="index">
            <div class="flex items-center flow-row ">
              <UIcon name="i-basil-checked-box-outline" class="h-6 w-6 mr-2" />
              <div>
                {{ facility.name }}
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
