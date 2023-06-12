<script lang="ts" setup>
import useAmericaMap from "../composables/useAmericaMap";
import { useSettings } from "../composables/useSettings";
import PlayerPanel from "./PlayerPanel.vue";
const { doFullScreen } = useSettings();
const { addCircleToState } = useAmericaMap();
</script>

<template>
  <div class="conteiner">
    <PlayerPanel />
    <q-container class="grid mx-10">
      <div class="power-up-button">
        <img src="/src/assets/icons/radar.png" alt="radar" />
      </div>
      <div class="power-up-button">
        <img src="/src/assets/icons/computer.png" alt="computer" />
      </div>
      <div class="power-up-button">
        <img src="/src/assets/icons/satellite.png" alt="satellite" />
      </div>
    </q-container>
    <div class="grid mx-2">
      <q-btn @click="doFullScreen" type="glossy" color="red"> Full screen </q-btn>
      <q-btn @click="addCircleToState('NY')" type="glossy" color="red">
        Add to New York
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conteiner {
  width: 35vh;
  height: 150vh;
  z-index: 100;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.26)),
    linear-gradient(0deg, #34857e, #34857e);
  opacity: 0.85;
  position: absolute;
  left: -5px;
  .buttons-conteiner{
    margin-top: 2vh;
    .power-up-button {
      margin-top: 2vh;
      margin-left: 8vh;
      width: 20vh;
      height: 20vh;
      background: radial-gradient(
          63.02% 63.02% at 41.15% 38.02%,
          rgba(0, 0, 0, 0) 19.27%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        radial-gradient(46.88% 46.88% at 52.08% 46.88%, #9cae45 0%, #7a8822 100%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #e8efd6;
      box-shadow: 2px 2px 5px rgba(81, 163, 158, 0.47);
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 900px) {
  .conteiner {
    width: 8vw;
    height: 180vh;
    span {
      font-size: 8px;
      margin-left: 5vh;
    }
    .power-up-button {
      width: 8vh;
      height: 8vh;
      img {
        width: 5vh;
        height: 5vh;
      }
    }
  }
}
</style>
