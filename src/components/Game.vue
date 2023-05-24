<script lang="ts" setup>
import { useGame } from '../composables/useGame';
import Debug from './Debug.vue';
import ModalWaitAction from './ModalWaitAction.vue';

const { getMyPlayer } = useGame();
</script>
<template>
  <ModalWaitAction />
  <Debug />
  <pre class="text-left text-base">
    getMyPlayer: {{ getMyPlayer() }}
  </pre>
</template>