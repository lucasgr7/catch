<script lang="ts" setup>
import { ref, onUnmounted, onBeforeMount } from 'vue'

const props = defineProps({
  targetTime: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['close']);

let intervalId: any = null;
let targetTime = new Date(props.targetTime)

// calculate total seconds between target time and now
const totalSeconds = Math.floor((targetTime.getTime() - new Date().getTime()) / 1000)
const progress = ref(totalSeconds)

onBeforeMount(() => {
  intervalId = setInterval(() => {
    const currentTime = new Date()
    const secondsLeft = Math.floor((targetTime.getTime() - currentTime.getTime()) / 1000)
        
    if (secondsLeft > 0) {
      progress.value = secondsLeft
    } else {
      progress.value = 0
      clearInterval(intervalId)
      emits('close')
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
<template>
  <q-circular-progress
    :value="progress"
    :max="totalSeconds"
    color="primary"
    :thickness="0.22"
    show-value
    font-size="32px"
    size="150px"
    track-color="grey-3"
    class="q-ma-md"
  />
</template>