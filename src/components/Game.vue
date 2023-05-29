<script lang="ts" setup>
// import Debug from './Debug.vue';
import ModalWaitAction from './ModalWaitAction.vue';
import { useGame } from '../composables/useGame';
import { onMounted, ref } from 'vue';
import Debug from './Debug.vue';
import { useFullscreen } from '@vueuse/core';
import useMobile from '../composables/useMobile';
const mobileDetect = useMobile();


const { getGame } = useGame();

// get from path the :id using route
const gameState = ref();
const errorState = ref();
const {isFullscreen, toggle } = useFullscreen();

onMounted(async () => {
  const { game, error} = await getGame();

  if(!isFullscreen.value && mobileDetect.isMobile.value) {
    toggle();
  };

  gameState.value = game;
  errorState.value = error;
})


</script>
<template>
  <ModalWaitAction />
  <Debug />
  <pre>
    game: {{ gameState }}
  </pre>
  <hr/>
  <pre>
    Error: {{ errorState }}
  </pre>
</template>