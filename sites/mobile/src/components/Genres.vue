<template>
  <div id="genres">
    <encyclopedia-subtitle title="Genres"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="genres"></encyclopedia-list>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaSubtitle from './EncyclopediaSubtitle'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'genres',
    data () {
      return {
        genres: []
      }
    },
    methods: {
      getData (e) {
        axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&q=${e.target.value}`)
          .then(response => {
            this.genres = response.data[1]
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.getData({
        target: {
          value: 'a'
        }
      })
    },
    components: {
      Search,
      EncyclopediaSubtitle,
      EncyclopediaList
    }
  }
</script>

<style lang="styl" scoped>
</style>
