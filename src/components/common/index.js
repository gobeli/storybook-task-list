import Vue from 'vue'
import SbInput from './SbInput.vue'
import SbCheckbox from './SbCheckbox.vue'

export const installCommon = () => {
  Vue.component(SbInput.name, SbInput),
  Vue.component(SbCheckbox.name, SbCheckbox)
}
