<template>
  <article>
    <div class="info">
      <h2>{{ news.title }}</h2>
      <div class="credits">
        <span v-if="news.date">{{ $d(new Date(news.date), 'short') }}</span> - <span>{{ news.author }}</span>
      </div>
    </div>
    <div class="content" v-html="news.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        news: {}
      }
    },
    created () {
      this.$get('news', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('news', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke
    font-family: Abel, sans-serif
    font-size: 1.2em

  h2
    text-align: center
    font-size: 1.1em
    padding: 0 5px

  .info
    text-align: center
    padding: 10px 0
    margin-bottom: 10px
    border-bottom: solid 2px silver
    background-color: $lightgray

    .credits
      color: $red

  // Use ">>>" to style elements within v-html
  .content
    padding: 0 10px 10px 10px

    >>> img
    >>> iframe
      display: block
      max-width: 100%
      margin: auto
      height: auto !important

    >>> img
      margin-top: 10px
      margin-bottom: 10px

    >>> a
      color: gray
      white-space: pre-wrap; // CSS 3
      white-space: -moz-pre-wrap; // Mozilla, since 1999
      white-space: -pre-wrap; // Opera 4-6
      white-space: -o-pre-wrap; // Opera 7
      word-wrap: break-word; // Internet Explorer 5.5+
</style>
