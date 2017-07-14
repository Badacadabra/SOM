<template>
  <section id="live-reports">
    <list ref="list" :scroll="true" v-on:update="load" :items="reports" link="liveReport" :fields="['title', 'place', 'date', 'author']" type="std"></list>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'live-reports',
    data () {
      return {
        ajax: false,
        page: 1,
        reports: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/live_reports.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.reports.push(response.data[i])
            }
            this.$refs.list.loaded()
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }

  }
</script>

<style lang="styl" scoped>
</style>
