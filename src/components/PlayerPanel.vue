<script lang="ts" setup>
import { ref } from "vue";
import ClassPanel from "./ClassPanel.vue";

const influence = ref(0.65);

const militar = '/src/assets/icons/profile-militar.png';
const philosopher = '/src/assets/icons/profile-philosophy.png';
const scientist = '/src/assets/icons/profile-nasa.png';

function randomize() {
  influence.value = Math.random();
}
</script>

<template>
    <div class="container">
  <q-row>
      <div class="q-pa-md q-gutter-md">
      <span>Influência</span>
        <q-linear-progress
          size="md"
          :value="influence"
          color="primary"
          @click="randomize"
        />
      </div>
  </q-row>
    </div>
  <q-row>
     <ClassPanel :type-class="militar"/>
  </q-row>
</template>

<style lang="scss" scoped>

.container{
  width: 22vh;
  span {
    color: #ffffff;
    display: flex;
    justify-content: left;
    margin: 5vh 0 0 4vh;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
  }
}

@media screen and (max-width: 820px) {
  span {
    font-size: 12px;
    color: #ffffff;
    font-weight: 500;
    margin-left: 7vh;
    margin-top: 5vh;
  }
}
</style>
