<template>
  <section>
    <list :scroll="false" :items="albums" link="album" :fields="['name', 'band', 'date']" type="img"></list>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'albums-by-genre',
    data () {
      return {
        ajax: false,
        albums: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/albums.php?id_style=${id}`)
        .then(response => {
          this.albums = response.data
          this.$emit('albums')
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
