<template>
  <LocaleSwitch />
  <div>
    <router-link to="/">
      <label class="text-blue-500">{{ t('home') }}</label>
    </router-link>
    <span class="p-1">|</span>
    <span>{{ t('about') }}</span>
  </div>
  <img src="@/assets/svg/earth.svg" class="m-auto">
  <h1 class="font-sans text-lg text-gray-800 text-center m-10">
    {{ t('about_msg') }}
  </h1>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
