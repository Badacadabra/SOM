<template>
  <section id="gigs">
    <list ref="list" :scroll="true" v-on:update="load" :items="gigs" link="gig" :fields="['title', 'place', 'date']" type="std"></list>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'gigs',
    data () {
      return {
        ajax: false,
        page: 1,
        gigs: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/gigs.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.gigs.push(response.data[i])
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
