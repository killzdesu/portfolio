<template>
<div class="text-left my-2">
  <p :class="titleClass">
    <i-carbon-events />
    <span>{{t('prog.title')}}</span>
  </p>
  <div :class="containerClass">
    <p>
      <span class="font-bold">{{t('prog.japan.title')}}</span> at {{t('prog.japan.at')}}
    </p>
    <p>
      <span class="font-bold">{{t('prog.taiwan.title')}}</span> at {{t('prog.taiwan.at')}}
    </p>
  </div>
</div>
</template>
<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  profileClass: any,
}>()

const titleClass = computed(()=>([
  '',
  props.profileClass.title ?? '',
]))

const containerClass = computed(()=>([
  '',
  props.profileClass.container ?? '',
]))


</script>

