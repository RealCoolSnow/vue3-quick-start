<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
const iconName = computed(() => `#icon-${props.name}`)
</script>
<style scoped>
.icon {
  /* width: 1em;
  height: 1em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
