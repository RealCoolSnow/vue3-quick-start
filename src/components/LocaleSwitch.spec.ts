import { mount } from '@vue/test-utils'
import LocaleSwitch from './LocaleSwitch.vue'
import { createI18nWithLocale } from '@/locale'
import store from '@/store/counter'

test('<LocaleSwitch />', () => {
  const i18n = createI18nWithLocale('en')
  const wrapper = mount(LocaleSwitch, {
    global: {
      plugins: [i18n, store],
    },
  })
  expect(wrapper.find('[value="en"]').text()).toBe('en')
})
