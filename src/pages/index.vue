<template>
  <LocaleSwitch />
  <div>
    <span>{{ t('home') }}</span>
    <span class="p-1">|</span>
    <router-link to="/about">
      <label class="text-blue-500">{{ t('about') }}</label>
    </router-link>
  </div>
  <!-- <img src="/@/assets/svg/logo.svg" class="logo-icon mx-auto m-4"> -->
  <Icon name="logo" class="logo-icon mx-auto m-4" />
  <h1 @click="showAbout">
    {{ t('app_name') }}
  </h1>
  <button class="border-2 px-1 m-2 text-red-400" @click="inc">
    counter - {{ counter }}
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import MutationTypes from '../store/mutation-types'

// import { useHttpTest } from '../service/api-test'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const router = useRouter()
    const counter = computed(() => store.getters.counter)
    const inc = () => {
      store.commit(MutationTypes.APP.SET_COUNTER, 1)
    }
    const showAbout = () => {
      router.push('/about')
    }
    // useHttpTest()
    return { t, counter, inc, showAbout }
  },
})
</script>
<style>
.logo-icon {
  width: 12em;
}
</style>
