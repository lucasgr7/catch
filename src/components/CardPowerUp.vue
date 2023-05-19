<script lang="ts" setup>
import { Card, CardsIdentification } from '../constant/game';
import Pill from './Pill.vue';
// create props for title, image, description, cooldownTime, castTime
const props = defineProps<{
  card: Card
}>();


</script>


<template>
  <!-- START Box -->
  <div class="animated-border-box-glow" :class="`class${props.card.level}`"></div>
  <div class="animated-border-box flex-1 p-2" :class="`class${props.card.level}`">
    <!-- Inside the Box -->
    <div class="flex flex-row">
      <div class="basis-1/6 flex justify-center items-center">
        <img v-if="props.card.level === 3" src="../assets/icons/pill3.png"
          class="shadow-md shadow-yellow-300/50 rounded-full" />
        <img v-if="props.card.level === 2" src="../assets/icons/pill2.png"
          class="shadow-md shadow-yellow-300/50 rounded-full" />
        <img v-if="props.card.level === 1" src="../assets/icons/pill1.png"
          class="shadow-md shadow-yellow-300/50 rounded-full" />
      </div>
      <div class="basis-2/6 text-left mt-2">
        {{ props.card.title }}
      </div>
      <div class="basis-1/6 justify-end">
        <Pill :value="props.card.cooldownTime" color="red" />
      </div>
      <div class="basis-1/6 justify-end">
        <Pill :value="props.card.castTime" color="blue" />
      </div>
    </div>
    <div class="flex flex-row pt-2 px-4">
      <div class="basis-1/2">
        <!-- cluster images -->
        <img v-if="props.card.id === CardsIdentification.Aeroporto" src="../assets/powerups/aeroporto.png" />
        <img v-if="props.card.id === CardsIdentification.Blindar" src="../assets/powerups/blindar.png" />
        <img v-if="props.card.id === CardsIdentification.Desinfluenciar" src="../assets/powerups/desinfluenciar.png" />
        <img v-if="props.card.id === CardsIdentification.Hackear" src="../assets/powerups/hackear.png" />
        <img v-if="props.card.id === CardsIdentification.Invasao" src="../assets/powerups/invasion.png" />
        <img v-if="props.card.id === CardsIdentification.JatoParticular" src="../assets/powerups/jatoParticular.png" />
        <img v-if="props.card.id === CardsIdentification.Motivar" src="../assets/powerups/motivar.png" />
        <img v-if="props.card.id === CardsIdentification.Radar" src="../assets/powerups/radar.png" />
        <img v-if="props.card.id === CardsIdentification.Satelite" src="../assets/powerups/satelite.png" />
      </div>
      <div class="basis-1/2" style="background: #241E1E;">
        <p class="text-md p-4 align-middle text-center h-max">
          {{ props.card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*// Glow Border Animation //*/

.animated-border-box,
.animated-border-box-glow {
  max-height: 249px;
  max-width: 435px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 0;
  /* Border Radius */
  border-radius: 10px;
}

.animated-border-box-glow {
  overflow: hidden;
  /* Glow Blur */
  filter: blur(20px);
}

.animated-border-box:before,
.animated-border-box-glow:before {
  content: '';
  z-index: -2;
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  width: 99999px;
  height: 99999px;
  background-repeat: no-repeat;
  background-position: 0 0;

}

.class1:before {
  background-image: conic-gradient(rgba(0, 0, 0, 0), rgb(201, 133, 74), rgba(0, 0, 0, 0) 25%);
  animation: rotate 10s linear infinite;
}

.class2:before {
  background-image: conic-gradient(rgba(0, 0, 0, 0), rgb(204, 204, 204), rgba(0, 0, 0, 0) 25%);
  animation: rotate 3s linear infinite;
}

.class3:before {
  background-image: conic-gradient(rgba(0, 0, 0, 0), rgb(215 203 91), rgba(0, 0, 0, 0) 25%);
  animation: rotate 1s linear infinite;
}

.animated-border-box:after {
  content: '';
  position: absolute;
  z-index: -1;
  /* border width */
  left: 5px;
  top: 5px;
  /* double the px from the border width left */
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  /*bg color*/
  background: #292a2e;
  /*box border radius*/
  border-radius: 7px;
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}


/*// Border Animation END//*/



.center-box {
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1D1E22;
}
</style>