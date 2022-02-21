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
  <SvgIcon name="logo" class="logo-icon mx-auto m-4" />
  <h1 @click="showAbout">
    {{ t('app_name') }}
  </h1>
  <button
    class="
      bg-cyan-500
      shadow-xl shadow-cyan-500/50
      text-white
      px-4
      py-2
      rounded-full
      mt-4
    "
    @click="inc"
  >
    counter - {{ counter }}
  </button>
  <button
    class="
      bg-indigo-500
      shadow-xl shadow-indigo-500/50
      text-white
      px-4
      py-2
      rounded-full
      ml-4
    "
    @click="mockTest"
  >
    mock test
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GetterTypes, MutationTypes } from '../store/types'
import { useHttpTest } from '../test/api-test'

const { t } = useI18n()
const store = useStore()
const router = useRouter()
const counter = computed(() => store.getters[GetterTypes.APP.COUNTER])
const inc = () => {
  store.commit(MutationTypes.APP.SET_COUNTER, 1)
}
const showAbout = () => {
  router.push('/about')
}
const mockTest = () => {
  useHttpTest()
}
</script>
<style>
.logo-icon {
  width: 12em;
}
</style>
