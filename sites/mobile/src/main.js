import Vue from 'vue'
import App from './App'
import router from './router'

import Moment from 'vue-moment'
import Icon from 'vue-awesome/components/Icon'
import InfiniteLoading from 'vue-infinite-loading'

import Loader from './components/Loader'
import Dimmer from './components/Dimmer'
import Disclaimer from './components/Disclaimer'
import ItemTitle from './components/ItemTitle'

Vue.config.productionTip = false

Vue.use(Moment)

Vue.component('icon', Icon)
Vue.component('infinite-loading', InfiniteLoading)
Vue.component('loader', Loader)
Vue.component('dimmer', Dimmer)
Vue.component('disclaimer', Disclaimer)
Vue.component('item-title', ItemTitle)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
