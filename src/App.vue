<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { generateUUID } from './helper';


onBeforeMount(() => {
  // check is localStorage have the gameId key stored using useLocalStorage
  const gameId = localStorage.getItem('gameId');
  if (!gameId) {
    // if not, create a new game and store the gameId in localStorage
  }

  // playerUUID if not exists create a new one
  const playerUUID = localStorage.getItem('playerUUID');
  if (!playerUUID) {
    // if not, create a new game and store the gameId in localStorage
    let newUuid = generateUUID();
    localStorage.setItem('playerUUID', newUuid);
  }
})
</script>

<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
