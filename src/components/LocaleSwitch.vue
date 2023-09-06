<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/store/app'

const { locale } = useI18n()
const appStore = useAppStore()
function onChange(e: any) {
  // appStore.lang = e.target.value
  appStore.setLang(e.target.value)
  console.log(appStore.langFullName)
}
</script>

<template>
  <select v-model="locale" class="m-6" @change="onChange">
    <option value="en">
      en
    </option>
    <option value="zh-CN">
      zh-CN
    </option>
  </select>
</template>
