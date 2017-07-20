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
import VeeValidate from 'vee-validate'
import veeFr from 'vee-validate/dist/locale/fr'

// Own plugins
import Ajax from './plugins/Ajax.js'

// Own components
import Loader from './components/Loader'
import Dimmer from './components/Dimmer'
import Disclaimer from './components/Disclaimer'
import Heading from './components/Heading'
import List from './components/List'

// ------------------------------

// Config & Use

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {en, fr},
  dateTimeFormats,
  numberFormats
})

Vue.use(Lazyload, {
  error: '../static/img/no-image.png',
  loading: '../static/img/img-loader.gif',
  attempt: 1
})

VeeValidate.Validator.addLocale(veeFr)
Vue.use(VeeValidate, {
  errorBagName: 'formErrors',
  fieldsBagName: 'formFields',
  locale: 'fr',
  dictionary: {
    en: {
      messages: {
        required: 'This field is mandatory',
        confirmed: 'Passwords do not match',
        email: 'Please provide a valid email address'
      }
    },
    fr: {
      messages: {
        required: 'Ce champ est obligatoire',
        confirmed: 'Les mots de passe ne correspondent pas',
        email: 'Veuillez fournir une adresse e-mail valide'
      }
    }
  }
})

Vue.use(Ajax)

// Global components

Vue.component('icon', Icon)
Vue.component('infinite-loading', InfiniteLoading)
Vue.component('loader', Loader)
Vue.component('dimmer', Dimmer)
Vue.component('disclaimer', Disclaimer)
Vue.component('heading', Heading)
Vue.component('list', List)

// ------------------------------

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
