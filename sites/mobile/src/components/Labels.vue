<template>
  <div id="labels">
    <heading text="Labels" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="labels" link="label" :fields="['name']" type="min"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import Search from './Search'
  import axios from 'axios'

  export default {
    name: 'labels',
    data () {
      return {
        ajax: false,
        labels: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/labels.php?q=${e.target.value}`)
          .then(response => {
            this.labels = response.data
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
