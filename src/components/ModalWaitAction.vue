<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import usePlayerBase from '../composables/usePlayerEvents';
import Timer from './Timer.vue';

const showModal = ref(false);
const { localStorageRef } = usePlayerBase();
const restTime = ref(null as any);

// Create a Vue watchEffect for localStorage "action"
watchEffect(() => {
  if (!localStorageRef.value) return;

  // if endTime of the localStorageRef show the modal wit the current time
  // convert endTime Date object to numbers for validation
  let endTime = new Date(localStorageRef.value.endTime).getTime();
  if (endTime > Date.now()) {
    showModal.value = true;
    console.log('inside time');
    restTime.value = localStorageRef.value.endTime;
  } else {
    console.log('outside time');
  }
});

function handleClose(){
  showModal.value = false;
}

</script>
<template>
  <q-dialog v-model="showModal" class="bg-slate-500 bg-transparent" :persistent="true">
    <q-card class="bg-black">
      <q-card-section class="bg-cyan-450">
        <div class="text-h6">{{localStorageRef.action}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none bg-cyan-850">
        <Timer @close="handleClose" :target-time="restTime" />
      </q-card-section>

    </q-card>
  </q-dialog>
</template>