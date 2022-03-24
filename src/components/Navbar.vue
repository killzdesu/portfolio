<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import { useInteractionStore } from '~/stores/interaction'

const { availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const interaction = useInteractionStore()
const navClass = computed(()=>([
  'inline-flex',
  {
    'animate-bounce': interaction.isSeeMoreHover
  }
]))
</script>

<template>
  <div class="container mx-auto text-right">
    <nav text="xl" :class="navClass">
      <router-link class="mx-2" to="/" title="Home">
        <i-carbon-home />
      </router-link>

      <router-link class="mx-2" to="/profile" title="Profile">
        <i-carbon-user />
      </router-link>

      <router-link class="mx-2" to="/hobby" title="Hobby">
        <i-carbon-basketball />
      </router-link>

      <button class="mx-2 !outline-none" title="Dark" @click="toggleDark()">
        <div v-if="isDark"><i-carbon-sun /></div>
        <div v-else><i-carbon-moon /></div>
      </button>

      <button class="mx-2 !outline-none" title="Lang" @click="toggleLocales()">
        <i-carbon-translate />
      </button>

      <router-link class="mx-2" to="/contact" title="Contact Me">
        <i-carbon-chat />
      </router-link>

      <!-- <a class="mx-2" rel="noreferrer" href="https://github.com/killzdesu" 
        target="_blank" title="GitHub">
        <i-carbon-logo-github />
      </a> -->
    </nav>
  </div>
</template>
