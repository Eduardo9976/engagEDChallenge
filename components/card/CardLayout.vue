<template>
  <div class="card-layout">
    <CardWidget
      v-for="character in characters"
      :key="character.id"
      :character
      @click="goTo(character.id)"
    />

    <CardNotFound v-if="characters.length === 0" />
  </div>
</template>

<script setup lang="ts">
const { characters } = await useCharacters()

const router = useRouter()

function goTo(id: string) {
  router.push({ path: `/characters/${ id }` })
}
</script>

<style scoped>
.card-layout {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
}

.card-layout > .widget {
  cursor: pointer;
  flex: 0 1 100%;
  max-width: 300px;
  transition: all 0.1s;
}

.card-layout > .widget:hover {
  transform: scale(1.05);
}
</style>
