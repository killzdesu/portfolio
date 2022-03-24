<template>
<div class="text-left my-2">
  <p :class="titleClass">{{t('profile.edu.title')}}</p>
  <div :class="containerClass">
    <p>
      <span class="font-bold">{{t('profile.edu.school')}}</span>: {{t('profile.edu.school-info')}}
    </p>
    <p>
      <span class="font-bold">{{t('profile.edu.bachelor')}}</span>: {{t('profile.edu.bachelor-info')}}
    </p>
    <p>
      <span class="font-bold">{{t('profile.edu.training')}}</span>: {{t('profile.edu.school-info')}}
    </p>
  </div>
</div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  profileClass: any,
  profileTitle: string
}>()

const titleClass = computed(()=>([
  'my-2 font-bold',
  props.profileClass.title ?? '',
]))

const containerClass = computed(()=>([
  'container mx-auto bg-base-100 rounded-xl',
  'px-4 py-2',
  'md:px-8 py-6',
  props.profileClass.container ?? '',
]))


</script>

