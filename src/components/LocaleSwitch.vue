<template>
  <select v-model="locale" class="m-6">
    <option value="en">en</option>
    <option value="zh-CN">zh-CN</option>
  </select>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  }
}
</script>