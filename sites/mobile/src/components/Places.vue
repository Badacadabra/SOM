<template>
  <div id="genres">
    <encyclopedia-subtitle title="Lieux"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="places"></encyclopedia-list>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaSubtitle from './EncyclopediaSubtitle'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'places',
    data () {
      return {
        places: []
      }
    },
    methods: {
      getData (e) {
        axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&q=${e.target.value}`)
          .then(response => {
            this.places = response.data[1]
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
