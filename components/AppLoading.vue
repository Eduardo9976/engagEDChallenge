<template>
  <teleport to="body">
    <div class="loading">
      <q-spinner-ball
        color="primary"
        size="4em"
      />
      <q-tooltip :offset="[0, 8]">
        Loading...
      </q-tooltip>
    </div>
  </teleport>
</template>

<script setup lang="ts">

</script>

<style scoped>
.loading {
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  inset: 0;
  place-items: center;
  position: fixed;
  z-index: 9999;
}
</style>
