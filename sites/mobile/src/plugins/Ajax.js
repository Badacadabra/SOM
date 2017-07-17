import axios from 'axios'

const Ajax = {
  install (Vue, options) {
    Vue.prototype.$axios = axios
    Vue.prototype.$loading = false

    Vue.mixin({
      beforeCreate () {
        this.$loading = true
      }
    })

    const somApiUrl = 'http://www.spirit-of-metal.com/API'

    Vue.prototype.$get = (endpoint, params = {}) => {
      return axios.get(`${somApiUrl}/${endpoint}.php`, {params})
    }

    // Do not use arrow functions: 'this' must be a Vue instance!

    Vue.prototype.$parseList = function (name, items, page = 0) {
      if (page) {
        for (const item of items) {
          this[name].push(item)
        }
        this.$refs.list.loaded() // see 'vue-infinite-loading'
        this.page++
      } else {
        this[name] = items
      }
      this.$loading = false // hide main loader
    }

    Vue.prototype.$parseItem = function (name, item) {
      this[name] = item
      this.$loading = false // hide main loader
    }
  }
}

export default Ajax
