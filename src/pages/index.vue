<template>
  <div class="container mx-auto">
    <select v-model="locale" class="m-6">
      <option value="en">en</option>
      <option value="zh-CN">zh-CN</option>
    </select>
    <div>
      <span>{{ t('home') }}</span>
      <span class="p-1">|</span>
      <router-link to="/about">
        <label class="text-blue-500">{{ t('about') }}</label>
      </router-link>
    </div>
    <AppIcon />
    <h1>{{ t('app_name') }}</h1>
  </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t, locale } = useI18n()

    // const switchLanguage = () => {
    //   const v = locale.value === 'en' ? 'zh-CN' : 'en'
    //   locale.value = v
    // }
    return { t, locale }
  },
}
</script>