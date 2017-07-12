<template>
  <div id="genres">
    <heading text="Lieux" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="places" link="place" prop="name"></encyclopedia-list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import EncyclopediaList from './EncyclopediaList'
  import axios from 'axios'

  export default {
    name: 'places',
    data () {
      return {
        ajax: false,
        places: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/places.php?q=${e.target.value}`)
          .then(response => {
            this.places = response.data
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
      EncyclopediaList
    }
  }
</script>

<style lang="styl" scoped>
</style>
