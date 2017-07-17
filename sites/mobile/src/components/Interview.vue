<template>
  <article>
    <heading :text="interview.band" level="2" font="oswald" color="red" variant="uppercase"></heading>
    <div class="info">
      <figure v-if="interview.picture">
        <img :src="interview.picture" :alt="interview.picture">
      </figure>
      <div class="credits">{{ $t('post.on') }} <span>{{ $d(new Date(interview.date), 'short') }}</span> {{ $t('post.by') }} <span>{{ interview.author }}</span></div>
    </div>
    <div class="content" v-html="interview.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'interview',
    data () {
      return {
        interview: {},
        errors: []
      }
    },
    created () {
      this.$get('interviews', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('interview', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke
    font-family: Abel, sans-serif
    font-size: 1.2em

    .credits
      color: $red
      text-align: center
      padding-bottom: 10px
      border-bottom: dashed 1px black

      span
        font-weight: bold

    figure
      margin: 15px 0

      img
        display: block
        margin: auto
        max-width: 100%

  // Use ">>>" to style elements within v-html
  .content
    padding: 10px

    >>> img
    >>> iframe
      display: block
      margin: auto
      max-width: 100%
      height: auto

    >>> a
      color: $red
      white-space: pre-wrap; // CSS 3
      white-space: -moz-pre-wrap; // Mozilla, since 1999
      white-space: -pre-wrap; // Opera 4-6
      white-space: -o-pre-wrap; // Opera 7
      word-wrap: break-word; // Internet Explorer 5.5+
</style>

