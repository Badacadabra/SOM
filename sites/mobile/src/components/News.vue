<template>
  <article>
    <heading :text="news.title" level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="news.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        news: {
          title: 'Chargement...',
          content: 'Veuillez patienter'
        },
        errors: []
      }
    },
    created () {
      this.$get('news', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('news', response.data)
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
      max-width: 100%
      margin: auto !important
      height: auto !important

    >>> a
      color: $red
      white-space: pre-wrap; // CSS 3
      white-space: -moz-pre-wrap; // Mozilla, since 1999
      white-space: -pre-wrap; // Opera 4-6
      white-space: -o-pre-wrap; // Opera 7
      word-wrap: break-word; // Internet Explorer 5.5+
</style>
