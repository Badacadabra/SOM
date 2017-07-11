<template>
  <div id="albums">
    <encyclopedia-subtitle title="Albums"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="albums" link="album" prop="album"></encyclopedia-list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaSubtitle from './EncyclopediaSubtitle'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'albums',
    data () {
      return {
        ajax: false,
        albums: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/releases.php?q=${e.target.value}`)
          .then(response => {
            this.albums = response.data
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

