<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import useNewGame from '../composables/useNewGame';
import { useRouter } from 'vue-router';
import { useFirestore } from 'vuefire';


const db = useFirestore();
const { getGames, joinGame } = useNewGame(db);
const router = useRouter();

const games = ref();

onMounted(async () => {
  games.value = await getGames();
})
</script>
<template>
  <!-- a list of games -->
  <q-list bordered>
    <q-item v-for="(game, i) in games" :key="i">
      <q-item-section>
        <q-item-label>{{ game.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn @click="joinGame(game.id, router)" label="Join" />
      </q-item-section>
    </q-item>
  </q-list>
</template>