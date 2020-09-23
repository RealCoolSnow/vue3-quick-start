<template>
  <div>
    <button @click="switchLang">{{ t('app_name') }}</button>
    <AppIcon/>
  </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t, locale } = useI18n()

    const switchLang = () => {
      const l = locale.value === 'en' ? 'zh-CN' : 'en'
      locale.value = l
    }
    return { t, switchLang }
  },
}
</script>