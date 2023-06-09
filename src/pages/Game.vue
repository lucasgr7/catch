<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useFullscreen, useLocalStorage } from '@vueuse/core';
import { useGame } from '../composables/useGame';
import useMobile from '../composables/useMobile';
import { Player } from '../constant/interfaces';

// components
import ModalWaitAction from '../components/ModalWaitAction.vue';
import Debug from '../components/Debug.vue';
import GameScreen from '../components/GameScreen.vue';


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
  <div class="min-w-full">
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
  </div>
</template>