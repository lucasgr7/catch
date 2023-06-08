<script lang="ts" setup>
import { ref } from 'vue';
import useNewGame from '../composables/useNewGame';
import { useRouter } from 'vue-router';
import { useFirestore } from 'vuefire';


const db = useFirestore();
const router = useRouter();
const {create } = useNewGame(db);

const newGameName = ref();
const numberOfPlayers = ref(6);

async function createNewGame(){
  if(!newGameName.value || newGameName.value === '') return;

  const gameCreated = await create(newGameName.value, numberOfPlayers.value);

  // re-route the user to the route /game/:gameCrated
  router.push({ name: 'game', params: { id: gameCreated } });
}
</script>
<template>
  <q-card class="text-black">
    <!-- create a new input and send button using quasar components -->
    <q-input outlined v-model="newGameName" class="bg-white" label="New Game Name" />
    <!-- Number select to number of players, minimum is 3 -->
    <q-select outlined v-model="numberOfPlayers"  
      label="Number of Players" 
      :options="[5,6,7,8,9,10]" />
    <q-btn label="Create" @click="createNewGame" />
  </q-card>
</template>