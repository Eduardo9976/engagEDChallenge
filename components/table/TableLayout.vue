<template>
  <q-table
      :key="info.currentPage"
      :rows="characters"
      :rows-per-page-options="[20]"
      :columns
      :pagination
      :hide-pagination="hasSearch"
      class="stick-header"
      flat
      bordered
      title="Characters"
      row-key="id"
      @row-click="onRowClick"
      @request="onPageChange"
  />

  <AppLoading v-if="loading" />
</template>

<script setup lang="ts">
import type {Character} from "#types";
import type {QTableColumn} from "quasar";

type Pagination = {
  pagination: {
    page: number;
  }
}

const {characters, info, changePage, hasSearch} = await useCharacters()

const router = useRouter()

const loading = ref(false)

const columns: QTableColumn<Character>[] = [
  {name: 'name', label: 'Name', field: 'name', align: 'left'},
  {name: 'species', label: 'Species', field: 'species', align: 'left'},
  {name: 'gender', label: 'Gender', field: 'gender', align: 'left'}
]

const pagination = computed(() => (
    {
      page: info.value.currentPage,
      rowsPerPage: info.value.rowsPerPage,
      rowsNumber: info.value.count
    }
))

async function onPageChange({pagination}: Pagination) {
  loading.value = true
  await changePage(pagination.page)
  loading.value = false
}

function onRowClick(_row: PointerEvent, character: Character) {
  router.push({path: `/characters/${character.id}`})
}
</script>

<style scoped>
.stick-header {
  height: calc(100vh - 220px);
  overflow-y: auto;
}

::v-deep(.q-table thead) {
  background: white;
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
