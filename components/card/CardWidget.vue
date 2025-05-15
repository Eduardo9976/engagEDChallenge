<template>
  <q-card class="widget">
    <NuxtImg
      :src="character.image"
      :alt="character.name"
      width="100%"
      height="auto"
      class="rounded-borders"
      style="aspect-ratio: 1 / 1; object-fit: cover;"
    />

    <q-card-section>
      <h5 class="text-h5 ellipsis selectable">
        {{ character.name }}
      </h5>
      <div class="text-caption text-grey-7 ellipsis">
        <q-badge :label="character.status" color="primary" class="q-mr-sm ellipsis" />
        {{ character.species }} {{ character.type || '' }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-none">
      <q-list dense bordered class="rounded-borders">
        <q-item>
          <q-item-section>
            <q-item-label overline>
              Gender
            </q-item-label>
            <q-item-label class="ellipsis">
              {{ character.gender }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline>
              Type
            </q-item-label>
            <q-item-label class="ellipsis">
              {{ character.type || 'Unknown' }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline>
              Status
            </q-item-label>
            <q-item-label class="ellipsis">
              {{ character.status }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline>
              Species
            </q-item-label>
            <q-item-label class="ellipsis">
              {{ character.species }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <template v-if="showDetails">
      <q-separator class="q-my-md" />

      <q-card-section class="q-pa-none">
        <q-expansion-item
          v-if="character.origin?.name"
          label="Origin"
          icon="travel_explore"
          dense
          expand-separator
        >
          <q-card-section class="ellipsis">
            {{ character.origin.name }}
          </q-card-section>
        </q-expansion-item>

        <q-expansion-item
          v-if="character.location?.name"
          label="Location"
          icon="location_on"
          dense
          expand-separator
        >
          <q-card-section class="ellipsis">
            {{ character.location.name }}
          </q-card-section>
        </q-expansion-item>

        <q-expansion-item
          v-if="character.episode?.length"
          label="Episodes"
          icon="movie"
          dense
          expand-separator
        >
          <q-card-section>
            <q-list dense>
              <q-item v-for="ep in character.episode" :key="ep.id">
                <q-item-section>
                  <q-item-label class="ellipsis">
                    {{ ep.name }}
                  </q-item-label>
                  <q-item-label class="ellipsis" caption>
                    {{ ep.air_date }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-expansion-item>
      </q-card-section>
    </template>
  </q-card>
</template>

<script setup lang="ts">
import type { Character } from '@/types'

defineProps<{
  character: Character
  showDetails?: boolean
}>()
</script>

<style scoped>
.widget {
  color: black;
  margin: auto;
  max-width: 330px;
  padding: var(--default-space);
  user-select: none;
}

.selectable {
  user-select: text;
}
</style>
