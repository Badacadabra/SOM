<template>
  <div id="reviews">
    <heading text="Chroniques" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="reviews" link="review" :fields="['album', 'band', 'author', 'date']" type="img"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'reviews',
    data () {
      return {
        ajax: false,
        page: 1,
        reviews: [],
        errors: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/reviews.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.reviews.push(response.data[i])
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
  #reviews
    background-color: whitesmoke
</style>
