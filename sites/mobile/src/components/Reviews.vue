<template>
  <div id="reviews">
    <h2>Chroniques</h2>
    <article v-for="review of reviews">
      <router-link :to="{name: 'review', params: {id: review.id}}">
        <img class="cover" :src="review.cover" :alt="review.album">
        <div class="info">
          <h3 class="album">{{ review.album }}</h3>
          <div class="band">{{ review.band }}</div>
          <hr>
          <div class="author">@{{ review.author }}</div>
          <div class="date">{{ new Date(review.date) | moment('DD/MM/YYYY') }}</div>
        </div>
      </router-link>
    </article>
    <infinite-loading :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'reviews',
    data () {
      return {
        ajax: false,
        page: 1,
        reviews: [],
        errors: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/reviews.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.reviews.push(response.data[i])
            }
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }
  }
</script>

<style lang="styl" scoped>
  #reviews
    background-color: whitesmoke

  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: $red
    text-align: center
    font: 42px Astonished, sans-serif

  a
    color: black
    display: flex
    align-items: center

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  article
    color: black
    font-family: Oswald, sans-serif
    border-bottom: solid 1px gray

    &:last-of-type
      border-bottom: 0

  .cover
    width: 100px

  .info
    margin-left: 7px
    flex: 1

    .album
      color: $red
      font-weight: 400
      font-size: large

    .band
    .author
      font-size: medium

    .author
    .date
      font-weight: 300

    .date
      font-size: small
</style>
