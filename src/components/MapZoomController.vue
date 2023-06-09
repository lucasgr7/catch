<script lang="ts" setup>
import useAmericaMap from '../composables/useAmericaMap';

const {changeZoom, zoomValue} = useAmericaMap();

</script>
<template>
  <div class="q-pa-md">
    <div class="flex-row">
      <q-slider v-model="zoomValue" :min="0" :max="100" color="red" @change="changeZoom($event)" 
       vertical reverse label-always />
    </div>
    <div class="flex row">
      <span>Zoom</span>
    </div>
  </div>
</template>