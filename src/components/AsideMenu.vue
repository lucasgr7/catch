<script lang="ts" setup>
import PlayerPanel from './PlayerPanel.vue';

</script>

<template>
  <div class="conteiner">
    <PlayerPanel />
    <div class="buttons-conteiner">
      <el-row>
        <div class="power-up-button">
          <img src="src\assets\icons\radar.png" alt="radar" />
        </div>
      </el-row>
      <el-row>
        <div class="power-up-button">
          <img src="src\assets\icons\computer.png" alt="computer" />
        </div>
      </el-row>
      <el-row>
        <div class="power-up-button">
          <img src="src\assets\icons\satellite.png" alt="satellite" />
        </div>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conteiner {
  width: 35vh;
  height: 150vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.26)),
    linear-gradient(0deg, #34857e, #34857e);
  position: absolute;
  left: -5px;
  .buttons-conteiner{
    margin-top: 10vh;
    .power-up-button {
      margin-top: 10vh;
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

@media screen and (max-width: 820px) {
  .conteiner {
    height: 180vh;
    .buttons-conteiner{
        .power-up-button {
          margin-left: 10vh;
        }
    }
  }
}
</style>
