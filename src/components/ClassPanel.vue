<script lang="ts" setup>

const props = defineProps({
  typeClass: String,
});

</script>

<template>
  <q-row>
    <q-col class="circle">
      <img :src="props.typeClass" alt="profile" />
    </q-col>
  </q-row>
</template>

<style lang="scss" scoped>

span{
  color: #ffffff;
  display: flex;
  justify-content: left;
  margin: 1vh 0 0 2vh;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
}

.circle {
  width: 10vh;
  height: 10vh;
  background: rgba(0, 250, 221, 0.98);
  box-shadow: 2px 2px 5px rgba(81, 163, 158, 0.47);
  mix-blend-mode: normal;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1vh;
  top: 2vh;
  img {
    width: 5vh;
  }
}

.level-panel {
  position: absolute;
  left: 9.5rem;
  top: 4.5rem;
  padding: 1rem 0 0 1rem;
  background-color: rgba(0, 0, 255, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .small-circle {
    width: 4vh;
    height: 4vh;
    background: rgb(20, 207, 30);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-top: 1rem;
    border: 3px solid #c0c0c0;
    text-align: center;
    vertical-align: middle;
  }
}


@media screen and (max-width: 820px) {

  .circle {
    right: 2vh;
    top: 6vh;
  }
}
</style>
