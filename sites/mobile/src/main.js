import Vue from 'vue'
import App from './App'
import router from './router'

import Icon from 'vue-awesome/components/Icon'

import Dimmer from './components/Dimmer'
import Loader from './components/Loader'
import Disclaimer from './components/Disclaimer'

Vue.config.productionTip = false

Vue.component('icon', Icon)
Vue.component('dimmer', Dimmer)
Vue.component('loader', Loader)
Vue.component('disclaimer', Disclaimer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
