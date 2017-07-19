// Initial imports
import Vue from 'vue'
import App from './App'
import router from './router'

// i18n
import VueI18n from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'
import dateTimeFormats from './locales/dateTimeFormats'
import numberFormats from './locales/numberFormats'

// External modules
import Icon from 'vue-awesome/components/Icon'
import InfiniteLoading from 'vue-infinite-loading'
import Lazyload from 'vue-lazyload'

// Own plugins
import Ajax from './plugins/Ajax.js'

// Own components
import Loader from './components/Loader'
import Dimmer from './components/Dimmer'
import Disclaimer from './components/Disclaimer'
import Heading from './components/Heading'
import List from './components/List'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Lazyload, {
  error: '../static/img/no-image.png',
  loading: '../static/img/img-loader.gif',
  attempt: 1
})
Vue.use(Ajax)

Vue.component('icon', Icon)
Vue.component('infinite-loading', InfiniteLoading)
Vue.component('loader', Loader)
Vue.component('dimmer', Dimmer)
Vue.component('disclaimer', Disclaimer)
Vue.component('heading', Heading)
Vue.component('list', List)

const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {en, fr},
  dateTimeFormats,
  numberFormats
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
