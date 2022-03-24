<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main p="x-4 y-10" text="center teal-700 dark:gray-200">
    <div class="text-4xl">
      <i-carbon-warning class="inline-block" />
    </div>
    <router-view />
    <div>
      <button class="btn btn-sm btn-error text-sm" m="3 t8" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
