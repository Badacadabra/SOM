<template>
  <div id="labels">
    <encyclopedia-subtitle title="Labels"></encyclopedia-subtitle>
    <search v-on:typing="getData"></search>
    <encyclopedia-list :items="labels" link="label" prop="nom_label"></encyclopedia-list>
    <loader v-if="ajax"></loader>
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
      Search,
      EncyclopediaSubtitle,
      EncyclopediaList
    }
  }
</script>

<style lang="styl" scoped>
</style>
