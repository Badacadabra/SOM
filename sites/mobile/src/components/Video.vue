<template>
  <article id="video">
    <heading :text="video.title" :level="2" font="oswald" color="yellow"></heading>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'video',
    data () {
      return {
        ajax: false,
        video: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/videos.php?id=${id}`)
        .then(response => {
          this.video = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    components: {
      EncyclopediaPicture
    }
  }
</script>

<style lang="styl" scoped>
</style>

