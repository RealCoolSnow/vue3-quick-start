<template>
  <div class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    console.log('app created')
  },
}
</script>
