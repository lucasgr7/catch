<script lang="ts" setup>

const props = defineProps({
  typeClass: String,
});

</script>

<template>
      <div class="circle">
        <img :src="props.typeClass" alt="profile" />
      </div>
</template>

<style lang="scss" scoped>

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
  top: 4vh;
  img {
    width: 5vh;
  }
}

@media screen and (max-width: 820px) {

  .circle {
    right: 2vh;
    top: 6vh;
  }
}
</style>
