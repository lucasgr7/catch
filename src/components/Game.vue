<script lang="ts" setup>
// import Debug from './Debug.vue';
import ModalWaitAction from './ModalWaitAction.vue';
import { useGame } from '../composables/useGame';
import { computed, onMounted, ref } from 'vue';
import Debug from './Debug.vue';
import { useFullscreen, useLocalStorage } from '@vueuse/core';
import useMobile from '../composables/useMobile';
import { useRoute } from 'vue-router';
import { Player } from '../constant/interfaces';
import GameScreen from './GameScreen.vue';


const { game } = useGame();
const mobileDetect = useMobile();
const route = useRoute();
const myPlayerId = useLocalStorage('playerUUID', 'not set');
const visible = ref(false);

// get from path the :id using route
const {isFullscreen, toggle } = useFullscreen();

const myPlayer = computed(() => {
  if(!game.value) return;
  
  return game.value.players.find((player: Player) => player.id === myPlayerId.value);
})

onMounted(async () => {
  // read :id
  const id = route.params.id as string;
  if(!localStorage.getItem('gameId')) {
    localStorage.setItem('gameId', id);
  }
  // if isn't stored localStorage gameId store it
  if(!isFullscreen.value && mobileDetect.isMobile) {
    toggle();
  };

})


</script>
<template>
  <GameScreen />
  <ModalWaitAction />
  <q-toggle v-model="visible" label="Game details" class="absolute bottom-0" />

  <q-slide-transition>
    <div v-show="visible">
    <q-card>
      My Player:
      {{  myPlayer }}
    </q-card>
    <Debug />
      <pre>
        game: {{ game }}
      </pre>
    </div>
  </q-slide-transition>
</template>