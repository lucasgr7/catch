<script lang="ts" setup>
const props = defineProps<{ color: string, value: number }>();

</script>
<template>
  <q-chip class="glossy" :color="props.color ?? 'red'" text-color="white" label="300">
    <img src="../assets/icons/clock.png" class="mr-2" />
    {{ props.value }}
  </q-chip>
</template>