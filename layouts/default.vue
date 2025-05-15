<template>
  <div class="page-container">
    <NavbarHeader />
    <q-separator color="gray" />

    <main class="main-content">
      <AppSearch v-show="shouldShowSearch" />
      <NuxtPage />
    </main>

    <q-separator color="gray" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const shouldShowSearch = computed(() => route.name === 'characters')
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  margin: 0 auto;
  max-width: 1300px;
  padding: var(--default-space-2x) var(--default-space);
  width: 100%;
}
</style>
