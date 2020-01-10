import Vue from 'vue'
import SbInput from './SbInput.vue'

export const installCommon = () => {
  Vue.component(SbInput.name, SbInput)
}
