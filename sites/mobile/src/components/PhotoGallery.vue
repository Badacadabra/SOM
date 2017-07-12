<template>
  <article>
    <heading :text="gallery.title" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="gallery.content"></div>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'photo-gallery',
    data () {
      return {
        ajax: false,
        gallery: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/galleries.php?id=${id}`)
        .then(response => {
          this.gallery = response.data
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
