<script lang="ts" setup>
import usePlayerBase from '../composables/usePlayerEvents';

const { move } = usePlayerBase();
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
    </q-card-section>
  </q-card>
</template>