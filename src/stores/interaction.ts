import { acceptHMRUpdate, defineStore } from 'pinia'
import { Ref } from 'vue'

export const useInteractionStore = defineStore('interaction', () => {
  /**
   * Current name of the user.
   */
  const isSeeMoreHover: Ref<boolean> = ref(false)

  function toggleSeeMoreHover(value?: boolean) {
    if (value)
      isSeeMoreHover.value = value
    else
      isSeeMoreHover.value = !isSeeMoreHover.value
  }

  return {
    isSeeMoreHover,
    toggleSeeMoreHover
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useInteractionStore, import.meta.hot))

