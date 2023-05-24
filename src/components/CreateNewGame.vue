<script lang="ts" setup>
import { ref } from 'vue';
import useNewGame from '../composables/useNewGame';
import { useRouter } from 'vue-router';

const router = useRouter();

const {create } = useNewGame();

const newGameName = ref();
async function createNewGame(){
  if(!newGameName.value || newGameName.value === '') return;

  const gameCreated = await create(newGameName.value);

  // re-route the user to the route /game/:gameCrated
  router.push({ name: 'game', params: { id: gameCreated } });
}
</script>
<template>
  <!-- create a new input and send button using quasar components -->
  <q-input outlined v-model="newGameName" class="bg-white" label="New Game Name" />
  <q-btn label="Create" @click="createNewGame" />
</template>