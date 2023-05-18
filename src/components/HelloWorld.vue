<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>

<template>
  <!-- quasar card with welcome message -->
  <q-card class="q-pa-xl bg-blue-grey inset-shadow">
    <span class="text-h2 ">Welcome to Quasar</span>
  </q-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
