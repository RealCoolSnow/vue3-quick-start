<template>
  <div>
    <router-link to="/about">{{ t('about') }}</router-link>
  </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>