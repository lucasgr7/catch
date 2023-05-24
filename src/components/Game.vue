<script lang="ts" setup>
import { useRoute } from 'vue-router';
// import Debug from './Debug.vue';
import ModalWaitAction from './ModalWaitAction.vue';
import { useGame } from '../composables/useGame';
import { onMounted, ref } from 'vue';

const route = useRoute();
const { getGame } = useGame();

// get from path the :id using route
const gameState = ref();
const errorState = ref();

onMounted(async () => {
  const gameId = route.params.id as string;
  localStorage.setItem('gameId', gameId);
  const { game, error} = await getGame();
  debugger;
  gameState.value = game;
  errorState.value = error;
})


</script>
<template>
  <ModalWaitAction />
  <Debug />
  <pre>
    {{ gameState }}
  </pre>
  <hr/>
  <pre>
    {{ errorState }}
  </pre>
</template>