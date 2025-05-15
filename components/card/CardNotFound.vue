<template>
  <div class="not-found">
    <p>Not characters found.</p>

    <AppBackButton v-if="showBackButton">
      Back to home page
    </AppBackButton>
  </div>
</template>

<script setup lang="ts">
type TProps = {
  showBackButton?: boolean
}

const {showBackButton = false} = defineProps<TProps>()
</script>

<style scoped>
.not-found {
  padding: var(--default-space-2x);
  text-align: center;
  width: 100%;
}
</style>
