<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useHttpTest } from '../test/api-test'
import { useCounterStore } from '@/store/counter'

const { t } = useI18n()
const router = useRouter()
const counter = useCounterStore()
function inc() {
  counter.count++
}
function showAbout() {
  router.push('/about')
}
function mockTest() {
  useHttpTest()
}
</script>

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
    counter - {{ counter.count }}
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

<style>
.logo-icon {
  width: 12em;
}
</style>
