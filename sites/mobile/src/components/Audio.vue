<template>
  <article id="audio">
    <heading :text="audio.title" :level="2" font="oswald" color="yellow"></heading>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'audio',
    data () {
      return {
        ajax: false,
        audio: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/audios.php?id=${id}`)
        .then(response => {
          this.audio = response.data
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
  article
    background-color: black

  .info
    padding: 10px
    font-family: Oswald, sans-serif
    background-color: whitesmoke

  .bold
    font-weight: 500

  .light
    color: gray
    margin: 0 0 15px 20px

  .website
    color: black

  a
    white-space: pre-wrap; // CSS 3
    white-space: -moz-pre-wrap; // Mozilla, since 1999
    white-space: -pre-wrap; // Opera 4-6
    white-space: -o-pre-wrap; // Opera 7
    word-wrap: break-word; // Internet Explorer 5.5+
</style>
