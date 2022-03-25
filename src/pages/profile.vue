<template>
  <div>
    <div class="divider"></div>
    <p text="3xl primary-focus dark:primary" class="mt-4 font-bold inline-flex items-center">
      <i-mdi-face-man />
      <i-mdi-briefcase-edit-outline />
      <span p="x-3">{{ t('profile') }}</span>
    </p>
    <div class="flex flex-row flex-wrap gap-x-4 justify-evenly"
      p="sm:x-3 lg:x-4">
      <ProfileEducation :profile-class="profileClass" />
      <ProfileLanguage :profile-class="profileClass" />
      <ProfileCoding :profile-class="profileClass" />
      <ProfileProgram :profile-class="profileClass" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const profileClass = reactive({
  top: "text-left my-2 basis-full",
  title: "text-xl text-secondary-focus dark:text-secondary my-2 mt-4 font-bold",
  container: 'container mx-auto bg-base-100 rounded-xl px-4 py-2 md:px-8 py-6',
})
profileClass.title += ' flex items-center gap-x-1'
profileClass.top += ' max-w-lg sm:(min-w-sm max-w-md) lg:min-w-lg'

</script>

<style>
</style>
