<template>
<div class="text-left my-2">
  <p :class="titleClass">
    <i-mdi-alphabetical-variant v-if="locale =='en'" />
    <i-mdi-syllabary-hiragana v-if="locale =='ja'" />
    <i-mdi-abugida-thai v-if="locale =='th'" />
    <span>{{t('lang.title')}}</span>
  </p>
  <div :class="containerClass">
    <p>
      <span class="font-bold">ไทย {{t('lang.th')}}</span>: {{t('lang.lvl.th')}}
    </p>
    <p>
      <span class="font-bold">English {{t('lang.en')}}</span>: {{t('lang.lvl.en')}}
    </p>
    <p>
      <span class="font-bold">日本語 {{t('lang.ja')}}</span>: {{t('lang.lvl.ja')}}
    </p>
  </div>
</div>
</template>
<script setup lang="ts">
const { t, locale } = useI18n()
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

