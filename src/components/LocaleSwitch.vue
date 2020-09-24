<template>
  <select v-model="locale" class="m-6">
    <option value="en">
      en
    </option>
    <option value="zh-CN">
      zh-CN
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
})
</script>
