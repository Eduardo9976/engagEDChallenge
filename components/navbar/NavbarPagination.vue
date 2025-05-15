<template>
  <div class="pagination">
    <q-pagination
        v-if="info?.pages > 1"
        :model-value="info.currentPage"
        :max="info.pages"
        :max-pages="4"
        :ellipses="true"
        :boundary-numbers="true"
        direction-links
        color="primary"
        @update:model-value="onPageChange"
    />

    <AppLoading v-if="loading" />
  </div>
</template>

<script setup lang="ts">
  const {info, changePage} = await useCharacters()

  const loading = ref(false)

  async function onPageChange(page: number) {
    loading.value = true

    await changePage(page)

    loading.value = false
  }
</script>

<style scoped>

.pagination {
  display: flex;
  justify-content: center;
  margin-left: auto;
}
</style>
