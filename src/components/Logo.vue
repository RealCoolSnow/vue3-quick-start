<template>
  <div>
    <LogoSvg class="logo-icon mx-auto m-4" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { VueComponent as LogoSvg } from '/@/assets/logo.svg'

export default defineComponent({
  components: {
    LogoSvg,
  },
})
</script>
<style scoped>
.logo-icon {
  width: 12rem;
}
</style>
