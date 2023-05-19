<script lang="ts" setup>
import useHero from '../composables/useHero'

const hero = useHero();
</script>
<template>
  <q-card class="w-max text-black">
    <!-- q-card header -->
    <q-card-section class="bg-slate-100 row text-black">
      Debug Panel
    </q-card-section>

    player name: {{ hero.name }}
    <q-card-section class="bg-slate-300">
      <div class="row">
        <q-btn glossy @click="hero.move">
          <span class="text-black">
            Start Action move
          </span>
        </q-btn>
      </div>
      <div class="row mt-4">
        <q-btn glossy>
          <span>
            Start Influence Move
          </span>
        </q-btn>
      </div>
      <div class="row mt-4">
        <q-btn glossy>
          <span>
            Start Fix state move
          </span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>