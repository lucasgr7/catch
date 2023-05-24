<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import useNewGame from '../composables/useNewGame';

const { getGames } = useNewGame();

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
        <q-btn label="Join" />
      </q-item-section>
    </q-item>
  </q-list>
</template>