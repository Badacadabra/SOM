<template>
  <div id="releases">
    <heading text="Sorties" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="false" :items="releases" link="release" :fields="['album', 'band', 'date', 'style']" type="img"></list>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'releases',
    data () {
      return {
        ajax: false,
        releases: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/releases.php`)
        .then(response => {
          this.releases = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>

