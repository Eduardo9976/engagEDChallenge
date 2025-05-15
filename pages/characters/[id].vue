<template>
  <div
      v-if="character"
      class="character"
  >
    <q-banner class="bg-primary text-white q-mb-md text-center" rounded>
      <template #avatar>
        <q-icon name="person" />
      </template>
      <h1  class="text-h6 balance-text">Get to know more about this character from Rick and Morty.</h1>
    </q-banner>

    <CardWidget :character show-details/>

    <AppLoading v-if="loading" />
  </div>
  <CardNotFound
      v-else
      show-back-button
  />
</template>

<script setup lang="ts">
import type {Character} from "#types";

const route = useRoute()

const { fetchCharacterByNameOrId } = useRickAndMortyAPI()

const loading = ref(true)

async function fetchCharacter(id: string) {
  loading.value = true
  const response = await fetchCharacterByNameOrId({ id })
  loading.value = false

  return response
}

const response = ref(await fetchCharacter(route.params.id as string))

watch(() => route.params.id, async (id) => {
  response.value = await fetchCharacter(id as string)
})

const character = computed<Character>(() => response.value?.data?.[0] ?? null)
</script>

<style scoped>
.character {
  padding: var(--default-space-2x) 0;
}
</style>
