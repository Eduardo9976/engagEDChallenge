<template>
  <q-btn-toggle
    v-model="mode"
    :options
    class="my-custom-toggle"
    no-caps
    rounded
    unelevated
    toggle-color="primary"
    color="white"
    text-color="primary"
  />
</template>

<script setup lang="ts">
import type { Mode } from '#types'
import { MODES } from '#constants'

const layoutMode = useLayoutMode()

const mode = computed({
  get: () => layoutMode.mode.value,
  set: (value: Mode) => layoutMode.setMode(value)
})

const options = Object.values(MODES).map(mode => ({
  label: mode,
  value: mode
}))
</script>

<style scoped>
.my-custom-toggle {
  border: 1px solid var(--q-primary);
}
</style>
