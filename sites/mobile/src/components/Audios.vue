<template>
  <div id="audios">
    <heading text="Audios" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="audios" link="audio" :fields="['title']" type="min"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import axios from 'axios'

  export default {
    name: 'audios',
    data () {
      return {
        ajax: false,
        audios: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/audios.php?q=${e.target.value}`)
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
          value: ''
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

