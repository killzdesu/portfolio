<template>
<div :class="topClass">
  <p :class="titleClass">
    <i-carbon-code />
    <span>{{t('coding.title')}}</span>
  </p>
  <div :class="containerClass">
    <p>
      <p class="font-bold"> {{t('coding.cp.title')}}</p>
      {{t('coding.cp.info')}}
    </p>
    <p>
      <p class="font-bold"> {{t('coding.web.title')}}</p>
      {{t('coding.web.lang').trim().split('\n').join(', ')}}
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

