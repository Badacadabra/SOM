<template>
  <div id="reviews">
    <h2>Chroniques</h2>
    <article v-for="review of reviews">
      <a :href="'/chroniques/'+review.id">
        <img class="cover" :src="review.cover" :alt="review.album">
        <div class="info">
          <h3 class="album">{{ review.album }}</h3>
          <div class="band">{{ review.band }}</div>
          <hr>
          <div class="author">@{{ review.author }}</div>
          <div class="date">{{ new Date(review.date) | moment('DD/MM/YYYY') }}</div>
        </div>
      </a>
    </article>
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
        reviews: [],
        errors: []
      }
    },
    created () {
      this.ajax = true
      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/reviews.php?l=fr`)
        .then(response => {
          this.reviews = response.data
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
    display: block
    color: black
    background-color: whitesmoke
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
