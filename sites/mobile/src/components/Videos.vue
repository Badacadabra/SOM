<template>
  <div id="videos">
    <heading text="Vidéos" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="videos" link="video" :fields="['title']" type="min"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import axios from 'axios'

  export default {
    name: 'videos',
    data () {
      return {
        ajax: false,
        videos: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/videos.php?q=${e.target.value}`)
          .then(response => {
            this.videos = response.data
            this.ajax = false
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
      this.getData({
        target: {
          value: 'a'
        }
      })
    },
    components: {
      Search
    }
  }
</script>

<style lang="styl" scoped>
</style>

