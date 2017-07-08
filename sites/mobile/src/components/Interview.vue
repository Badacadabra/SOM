<template>
  <article>
    <h2>{{ interview.title }}</h2>
    <div class="content" v-html="interview.content"></div>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'interview',
    data () {
      return {
        ajax: false,
        interview: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = window.location.pathname.split('/')[2]
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/interviews.php?id=${id}`)
        .then(response => {
          this.interview = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  @import '../assets/variables.styl'

  h2
    min-height: 50px
    color: black
    background-color: silver
    font: 20px Oswald, sans-serif
    display: flex
    align-items: center
    justify-content: center

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

