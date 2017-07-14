import Vue from 'vue'
import App from './App'
import router from './router'

import Moment from 'vue-moment'
import Icon from 'vue-awesome/components/Icon'
import InfiniteLoading from 'vue-infinite-loading'

import Ajax from './plugins/Ajax.js'

import Loader from './components/Loader'
import Dimmer from './components/Dimmer'
import Disclaimer from './components/Disclaimer'
import Heading from './components/Heading'
import List from './components/List'

Vue.config.productionTip = false

Vue.use(Moment)
Vue.use(Ajax)

Vue.component('icon', Icon)
Vue.component('infinite-loading', InfiniteLoading)
Vue.component('loader', Loader)
Vue.component('dimmer', Dimmer)
Vue.component('disclaimer', Disclaimer)
Vue.component('heading', Heading)
Vue.component('list', List)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
