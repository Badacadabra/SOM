<template>
  <div id="bands">
    <heading text="Groupes" :label="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="bands" link="band" :fields="['name']" type="min"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
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
