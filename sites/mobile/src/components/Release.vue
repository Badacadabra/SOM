<template>
  <article>
    <heading :text="release.title" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="release.content"></div>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'release',
    data () {
      return {
        ajax: false,
        release: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/releases.php?id=${id}`)
        .then(response => {
          this.release = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  // Use ">>>" to style elements within v-html
  .content
    padding: 10px
    background-color: whitesmoke

    >>> img
    >>> iframe
      display: block
      margin: auto
      max-width: 100%

    >>> a
      color: $red
      white-space: pre-wrap; // CSS 3
      white-space: -moz-pre-wrap; // Mozilla, since 1999
      white-space: -pre-wrap; // Opera 4-6
      white-space: -o-pre-wrap; // Opera 7
      word-wrap: break-word; // Internet Explorer 5.5+
</style>
