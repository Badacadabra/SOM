<template>
  <div id="genres">
    <heading text="Genres" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="genres" link="genre" prop="title"></encyclopedia-list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'genres',
    data () {
      return {
        ajax: false,
        genres: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/styles.php?q=${e.target.value}`)
          .then(response => {
            this.genres = response.data
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
      Search,
      EncyclopediaList
    }
  }
</script>

<style lang="styl" scoped>
</style>
