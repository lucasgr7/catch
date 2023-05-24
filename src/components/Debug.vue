<script lang="ts" setup>
import { useGameCollection} from '../composables/useGame'
import usePlayerBase from '../composables/usePlayerEvents';

const {addGame, addPlayerGame, getMyPlayer} = useGameCollection();
const { move } = usePlayerBase();
</script>
<template>
  <q-card class="w-max text-black">
    <!-- q-card header -->
    <q-card-section class="bg-slate-100 row text-black">
      Debug Panel
    </q-card-section>
    player name: {{ getMyPlayer().name }}
    <q-card-section class="bg-slate-300">
      <div class="row mt-4">
        <q-btn glossy @click="move">
          <span>
            Move
          </span>
        </q-btn>
      </div>
      <div class="row mt-4">
        <q-btn glossy @click="addGame">
          <span>
            Add Game
          </span>
        </q-btn>
      </div>
      <div class="row mt-4">
        <q-btn glossy @click="addPlayerGame('JQpeREJPUnuOMAecb0fb', 'johnny')">
          <span>
            Push event to firebase
          </span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>