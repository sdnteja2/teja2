<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/no-unused-vars -->
<script setup>
const items = [
  {
    label: 'Visi',
    slot: 'visi',
  },
  {
    label: 'Tujuan',
    slot: 'tujuan',
  },
  {
    label: 'Misi',
    slot: 'misi',
  },
]
</script>

<template>
  <UContainer class="py-16 md:py-24">
    <UTabs :items="items" :default-index="1">
      <template #misi>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div>ini misi</div>
        </div>
      </template>
      <template #tujuan>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div>ini tujuan</div>
        </div>
      </template>
      <template #visi>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          class="px-6 bg-slate-100 shadow dark:bg-slate-900 py-2 rounded-md"
        >
          <div>ini visi</div>
        </div>
      </template>
    </UTabs>
  </UContainer>
</template>
