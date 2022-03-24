<script setup lang="ts">
import { useInteractionStore } from '~/stores/interaction'
// const router = useRouter()
const { t } = useI18n()

const textSeeMore = ref()
const isSeeMoreHover = useElementHover(textSeeMore)
const interaction = useInteractionStore()

watch(isSeeMoreHover, (newVal, oldVal) => {
  if (newVal != oldVal) {
    interaction.toggleSeeMoreHover(newVal)
  }
})

</script>

<template>
  <div class="container mx-auto">
    <div class="min-h-xl bg-base-100 rounded-xl"
      p="8 y-12">
      <div class="flex-col lg:flex-row">
        <div text="center md:left"
          p="md:x-6 lg:x-10 xl:x-14">
          <h1 class="text-4xl font-bold my-2">
            <span class="block md:inline">{{t('hero.hello')}}</span> 
            {{t('hero.iam')}} <span class="text-primary-focus">{{t('name')}}</span>
          </h1>
          <p text="bold 2xl" >
            <span class="italic">{{t('hero.call')}}</span> <strong class="text-primary-focus">{{t('nickname')}}</strong>
          </p>
          <p class="py-10"
            text="left md md:lg">
            <div class="block my-1">
            {{t('hero.intro')}}
            </div>
            <span class="oneline">
              <i-mdi-creation text="cyan-400 dark:yellow-300" /> {{t('hero.fulltime')}} </span> 
            <span class="oneline">
              <i-mdi-heart-pulse class="text-red-600" /> {{t('hero.parttime')}} </span> 
            <span class="oneline">
              <i-mdi-code-json text="secondary-focus dark:secondary" /> 
              {{t('hero.sometimes')}}
            </span>
            <div class="block my-1">
              {{t('hero.further')}}
            </div>
            <div class="block my-1">
              {{ t('hero.more') }}
              <span class="seemore" ref='textSeeMore'>{{t('hero.above-icons')}}</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.oneline {
  @apply flex items-center lg:inline-flex gap-x-1 px-1
}

.seemore {
  @apply font-bold text-accent-focus hover:cursor-pointer
}

</style>

<route lang="yaml">
</route>
