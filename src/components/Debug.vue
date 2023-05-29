<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
import usePlayerBase from '../composables/usePlayerEvents';
import { onMounted } from 'vue';

const { move } = usePlayerBase();
const {isFullscreen, toggle } = useFullscreen();

onMounted(() => {
  if(!isFullscreen.value) toggle();
})
</script>
<template>
  <q-card class="w-max text-black">
    <!-- q-card header -->
    <q-card-section class="bg-slate-100 row text-black">
      Debug Panel
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
        <q-btn glossy @click="toggle">
          <span>
            Full screen
          </span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>