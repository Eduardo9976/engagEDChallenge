<template>
  <header class="header">
    <NavbarLogo />
    <NavbarPagination v-if="shouldShowPagination" />
    <NavbarModeSwitch v-if="shouldShowSwitch" />
    <AppBackButton v-else />
  </header>
</template>

<script setup lang="ts">
import { MODES } from '#constants'

const route = useRoute()

const layoutMode = useLayoutMode()

const { hasSearch } = await useCharacters()

const shouldShowSwitch = computed(() => route.path === '/characters')

const shouldShowPagination = computed(() => {
  const isCharactersRoute = shouldShowSwitch.value
  const isCardMode = layoutMode.mode.value === MODES.CARD
  const hasNoSearch = !hasSearch.value

  return isCharactersRoute && isCardMode && hasNoSearch
})
</script>

<style scoped>
.header {
  align-items: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: var(--default-space);
  justify-content: space-between;
  padding: var(--default-space) var(--default-space-2x);
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
