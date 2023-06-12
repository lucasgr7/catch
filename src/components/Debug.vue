<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';
import useActions from '../composables/useActions';
import { useCollection, useFirestore } from 'vuefire';
import { collection } from '@firebase/firestore';

const { move } = useActions();
const playerUUID = useLocalStorage('playerUUID', 'not set')

function deleteAllCollectioOfGames(){
  const db = useFirestore();
  // delete all games from collection
  const games = useCollection(collection(db, 'games'));
  games.value.forEach(async (game) => {
    await game.ref.delete();
  })
  
}

</script>
<template>
  <q-card class="fixed left-0 text-black !z-[9999]">
    <!-- q-card header -->
    <q-card-section class="bg-slate-100 row text-black">
      Debug Panel
    </q-card-section>
    <q-card-section class="bg-slate-100 row text-black">
      Player ID: {{ playerUUID }}
    </q-card-section>
    <q-card-section class="bg-slate-300">
      <div class="row mt-4">
        <q-btn glossy @click="move">
          <span>
            Move
          </span>
        </q-btn>
      </div>
      <div class="row mt-4">
        <q-btn glossy type="danger" @click="deleteAllCollectioOfGames">
          <span>
            DELETE ALL GAMES
          </span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>