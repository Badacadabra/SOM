<template>
  <div id="news">
    <heading text="Actualités" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="news" link="news" :fields="['title', 'date', 'author']" type="std"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'newsfeed',
    data () {
      return {
        ajax: false,
        page: 1,
        news: [],
        errors: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/news.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.news.push(response.data[i])
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
  #news
    background-color: whitesmoke
</style>
