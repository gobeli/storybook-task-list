import Vue from 'vue'
import App from './App.vue'

import { installCommon } from './components/common';

installCommon();

Vue.config.productionTip = false
Vue.prototype.$showBorders = false

new Vue({
  render: h => h(App),
}).$mount('#app')
