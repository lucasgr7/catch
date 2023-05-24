<script lang="ts" setup>
import { useGameCollection } from '../composables/useGame';
import Debug from './Debug.vue';
import ModalWaitAction from './ModalWaitAction.vue';

const { getMyPlayer } = useGameCollection();
</script>
<template>
  <ModalWaitAction />
  <Debug />
  <pre class="text-left text-base">
    getMyPlayer: {{ getMyPlayer() }}
  </pre>
</template>