<template>
  <div>
    <form
      class="search"
      @submit.prevent="onSubmit"
    >
      <q-input
        ref="searchInput"
        v-model="search"
        filled
        label="Search by character names"
        debounce="300"
        type="search"
        clearable
        dense
        @clear="onSubmit"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>

        <template #append>
          <q-btn
            class="q-ml-sm"
            color="primary"
            label="Search"
            type="submit"
            @click="onSubmit"
          />
        </template>
      </q-input>
    </form>

    <AppLoading v-if="loading" />
  </div>
</template>

<script setup lang="ts">
const { characterByNameOrId, changePage } = await useCharacters()

const searchInput = useTemplateRef<HTMLDivElement>('searchInput')

const search = ref('')

const loading = ref(false)

async function fetchCharacters(name: string) {
  await characterByNameOrId({ name })
}

async function onSubmit() {
  loading.value = true
  searchInput.value?.blur()

  if (!search.value) {
    await changePage()

    loading.value = false

    return
  }

  await fetchCharacters(search.value.trim())

  loading.value = false
}
</script>

<style scoped>
.search {
  background: white;
  border-radius: 4px;
  margin: var(--default-space) 0;
  user-select: none;
  width: 100%;
}

::v-deep(.q-field__control) {
  padding-right: 2px;
}
</style>
