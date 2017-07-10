<template>
  <div id="labels">
    <encyclopedia-subtitle title="Labels"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="labels"></encyclopedia-list>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaSubtitle from './EncyclopediaSubtitle'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'labels',
    data () {
      return {
        labels: []
      }
    },
    methods: {
      getData (e) {
        axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&q=${e.target.value}`)
          .then(response => {
            this.labels = response.data[1]
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
