<template>
  <div class="px-4 py-10 text-center text-gray-700 dark:text-gray-500">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('app created');
  },
});
</script>
