<template>
  <article>
    <heading :text="review.album" :level="2" font="oswald" color="red" variant="uppercase"></heading>
    <div class="info">
      <router-link v-if="review.id_groupe" :to="{name: 'band', params: {id: review.id_groupe}}">
        <figure v-if="review.cover">
            <img :src="review.cover" :alt="review.album">
          <figcaption class="band">{{ review.band }}</figcaption>
        </figure>
      </router-link>
      <div class="credits" v-if="review.date">
        <span>{{ $t('reviews.credits') }} {{ review.author }}</span><br>
        {{ $d(new Date(review.date), 'short') }}
      </div>
    </div>
    <div class="content" v-html="review.content"></div>
    <div class="video" v-html="review.video"></div>
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
  article
    background-color: whitesmoke
    font-family: Abel, sans-serif
    font-size: 1.2em

  .info
    text-align: center
    background-color: $lightgray

    .band
      font-size: 1.2em
      font-weight: bold

    .credits
      color: $red
      margin-top: 10px
      padding-bottom: 10px
      border-bottom: solid 2px silver

      span
        font-weight: bold

  figure
    padding-top: 12px

    img
      display: block
      margin: auto
      width: 250px

    figcaption
      color: whitesmoke
      width: 250px
      margin: auto
      padding: 5px 0
      background-color: black

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

  .video

    >>> iframe
      display: block
      margin: auto
      height: auto
      max-width: 100%
</style>
