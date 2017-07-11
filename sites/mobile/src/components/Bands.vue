<template>
  <div id="bands">
    <encyclopedia-subtitle title="Groupes"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="bands" link="band" prop="name"></encyclopedia-list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaSubtitle from './EncyclopediaSubtitle'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'bands',
    data () {
      return {
        ajax: false,
        bands: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/bands.php?q=${e.target.value}`)
          .then(response => {
            this.bands = response.data
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
      Search,
      EncyclopediaSubtitle,
      EncyclopediaList
    }
  }
</script>

<style lang="styl" scoped>
</style>
