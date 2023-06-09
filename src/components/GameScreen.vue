<script lang="ts" setup>

import Map from './Map.vue';
import AsideMenu from './AsideMenu.vue';
import MapZoomController from './MapZoomController.vue';


</script>

<template>
  <div class="min-w-full">
    <AsideMenu />

    <Map />

    <MapZoomController class="fixed right-5 z-50 h-max" />

  </div>
</template>

<style lang="scss" scoped>



</style>
