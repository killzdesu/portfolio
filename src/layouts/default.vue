<template>
  <main 
    :data-theme="theme"
    id="main-container"
    p="x-4 y-6 lg:t-10"
    text="center gray-700 dark:gray-200"
    w="md:4/5 lg:4/5 xl:3/5"
    class="mx-auto min-h-full"
  >
    <Navbar />
    <router-view />
    <!-- <Footer /> -->
  </main>
</template>

<script setup lang="ts">
import { isDark } from '~/composables'
const theme = computed(()=>{
  return (isDark.value ? 'dracula' : 'cupcake')
})

</script>
