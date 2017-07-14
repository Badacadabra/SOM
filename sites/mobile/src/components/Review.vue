<template>
  <article>
    <heading :text="review.album" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="review.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'review',
    data () {
      return {
        review: {},
        errors: []
      }
    },
    created () {
      this.$get('reviews', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('review', response.data)
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
