<template>
  <q-btn color="primary" class="back-button">
    <NuxtLink to="/characters"><slot>Back</slot></NuxtLink>
  </q-btn>
</template>

<style scoped>
.back-button {
  padding: 0;
}

.back-button a {
  color: inherit;
  display: block;
  height: 100%;
  padding: 4px var(--default-space-2x);
  text-decoration: none;
  width: 100%;
}
</style>
