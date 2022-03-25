<template>
<div :class="topClass">
  <p :class="titleClass">
      <i-carbon-education />
      {{t('edu.title')}}
    </p>
  <div :class="containerClass">
    <p>
      <span class="font-bold">{{t('edu.school')}}</span>: {{t('edu.school-info')}}
    </p>
    <p>
      <span class="font-bold">{{t('edu.bachelor')}}</span>: {{t('edu.bachelor-info')}}
    </p>
    <p>
      <span class="font-bold">{{t('edu.training')}}</span>: {{t('edu.school-info')}}
    </p>
  </div>
</div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  profileClass: any,
}>()

const topClass = computed(()=>([
  '',
  props.profileClass.top ?? '',
]))

const titleClass = computed(()=>([
  '',
  props.profileClass.title ?? '',
]))

const containerClass = computed(()=>([
  '',
  props.profileClass.container ?? '',
]))


</script>

