<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFullscreen } from '@vueuse/core';
import { useGame } from '../composables/useGame';
import useMobile from '../composables/useMobile';
import useWatchers from '../composables/useWatchers';

// components
import ModalWaitAction from '../components/ModalWaitAction.vue';
import GameScreen from '../components/GameScreen.vue';
import { Player } from '../constant/interfaces';


const { game } = useGame();
const mobileDetect = useMobile();
const route = useRoute();

// watchers
const { registerDisplayPlayerCurrentLocation } = useWatchers();

// get from path the :id using route
const { isFullscreen, toggle } = useFullscreen();

const myPlayer = computed(() => {
  if (!game.value) return;
  const myPlayerId = localStorage.getItem('playerUUID');
  return game.value.players.find((player: Player) => player.id === myPlayerId);
})

onMounted(async () => {
  // read :id
  const id = route.params.id as string;

  // if isn't stored localStorage gameId store it
  if (!localStorage.getItem('gameId')) {
    localStorage.setItem('gameId', id);
  }
  if (!isFullscreen.value && mobileDetect.isMobile) {
    toggle();
  };

  // register watchers
  registerDisplayPlayerCurrentLocation(myPlayer);
  
})


</script>
<template>
  <div class="min-w-full">
    <GameScreen />
    <ModalWaitAction />
    <pre class="z-[9999]">current player: {{ myPlayer }}</pre>
  </div>
</template>