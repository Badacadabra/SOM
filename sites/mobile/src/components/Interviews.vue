<template>
  <div id="interviews">
    <h2>Interviews</h2>
    <article v-for="interview of interviews">
      <a href="#">
        <img class="photo" :src="interview.picture" :alt="interview.band">
        <div class="info">
          <div class="band">{{ interview.band }}</div>
          <div class="date">{{ interview.date }}</div>
          <div class="author">@{{ interview.author }}</div>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'interviews',
    data () {
      return {
        interviews: [],
        errors: []
      }
    },
    created () {
      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/interviews.php?l=fr`)
        .then(response => {
          this.interviews = response.data
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

  .photo
    width: 100px

  .info
    margin-left: 7px

    .band
      font-size: medium

    .author
      font-style: italic
      font-size: small
</style>
