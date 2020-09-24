<template>
  <LocaleSwitch />
  <div>
    <span>{{ t('home') }}</span>
    <span class="p-1">|</span>
    <router-link to="/about">
      <label class="text-blue-500">{{ t('about') }}</label>
    </router-link>
  </div>
  <Logo />
  <h1>{{ t('app_name') }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    return { t }
  }
})
</script>