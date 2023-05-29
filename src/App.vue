<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { generateUUID } from './helper';
import { onMounted } from 'vue';
import { useScreenOrientation } from '@vueuse/core'

const { lockOrientation } = useScreenOrientation();


onMounted(() => {
  lockOrientation('landscape-primary');
});

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
  <q-layout class="screen">
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.screen {
  background-image: url('/src/assets/backgroundGameScreen.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 150vh;
}

@media (max-width: 820px) {
  .screen {
    position: absolute;
    height: 180vh;
    width: 250vh;
  }
}
</style>
