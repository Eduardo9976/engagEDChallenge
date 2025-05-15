<template>
  <div>
    <component :is="componentIs" />
  </div>
</template>

<script setup lang="ts">
import { MODES } from '#constants'

const layoutMode = useLayoutMode()

const TableLayout = defineAsyncComponent(() => import('~/components/table/TableLayout.vue')
)

const CardLayout = defineAsyncComponent(() => import('~/components/card/CardLayout.vue')
)

const componentIs = computed(() => layoutMode.mode.value === MODES.TABLE
  ? TableLayout
  : CardLayout)
</script>
