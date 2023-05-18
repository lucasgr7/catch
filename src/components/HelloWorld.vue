<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <!-- quasar card with welcome message -->
  <q-card class="q-pa-xl bg-yellow-300 to-yellow-200">
    <span class="text-black text-2xl">Welcome to Catch Game</span>
  </q-card>
</template>

<style scoped></style>
