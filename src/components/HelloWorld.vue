<script setup lang="ts">
import Card from './CardPowerUp.vue';
import { HeroPowerUpCards } from '../constant/game';
import Debug from './Debug.vue';
import GameScreen from './GameScreen.vue';
import { onMounted } from 'vue';

defineProps<{ msg: string }>()






function handleOrientationChange() {
  if (window.orientation === 0 || window.orientation === 180) {
    // orientation in landscape mode
    console.log('Modo retrato');
  } else {
    console.log('Modo paisagem');
  }
}



onMounted(() => {
  handleOrientationChange();
  window.addEventListener('orientationchange', handleOrientationChange);
});






</script>

<template>
  <GameScreen/>
  <Debug />
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <Card :card="HeroPowerUpCards.Aeroporto" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Blindar" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Desinfluenciar" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Hackear" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Invasao" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.JatoParticular" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Motivar" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Radar" />
    </div>
    <div class="row">
      <Card :card="HeroPowerUpCards.Satelite" />
    </div>
  </div>
</template>

<style scoped></style>
