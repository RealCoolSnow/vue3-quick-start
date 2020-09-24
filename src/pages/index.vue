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
  <button class="border-2 px-1 m-2 text-red-400" @click="inc">
    counter - {{ counter }}
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { MutationTypes } from '../store'
// import { useHttpTest } from '../service/api-test'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const counter = computed(() => store.state.counter)
    const inc = () => {
      store.commit(MutationTypes.INC_COUNTER, 1)
    }
    // useHttpTest()
    return { t, counter, inc }
  },
})

</script>
