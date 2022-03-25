<template>
  <div class="h-screen-sm flex flex-col justify-center">
    <div class="min-h-sm w-full lg:w-md bg-base-100 rounded-xl mx-auto"
      p="x-8 y-8">
      <div text="3xl" m="b-6" class="font-bold">{{ t('contact.head') }}</div>
      <div class="text-left my-2">
        <p :class="langClass.nameSize">{{ t('fullname') }}</p>
        <p class="text-lg">(+66)81-249-xxxx</p>
      </div>
      <div class="text-left mt-5">
        <p class="sns-line">
          <i-carbon-email text="2xl primary" class="mx-2" />
          norapat.lim@gmail.com
        </p>
        <p class="sns-line">
          <i-cib-facebook text="2xl blue-500 dark:blue-400" class="mx-2" />
          Norapat Limsirorat
        </p>
        <p class="sns-line">
          <i-cib-instagram text="2xl secondary-focus" class="mx-2" />
          juikz
        </p>
        <p class="sns-line">
          <i-cib-line text="2xl green-400" class="mx-2" />
          killzdesu
        </p>
        <p class="sns-line">
          <i-cib-discord text="2xl indigo-500" class="mx-2" />
          killz#5916
        </p>
      </div>

    </div>
  </div>

</template>

<script setup>
const { t, locale } = useI18n()
const langClass = computed(()=>{
  return {
    nameSize: (locale.value == 'en' ? 'text-2xl' : 'text-xl')
  }
})
</script>

<style>
.sns-line {
  @apply text-lg flex mt-3
}
.instagram-color {
  @apply bg-gradient-to-tr from-yellow-300 via-pink-600 to-sky-700
}

</style>
