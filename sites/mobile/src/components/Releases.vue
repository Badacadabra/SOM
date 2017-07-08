<template>
  <div id="releases">
    <h2>Sorties</h2>
    <article v-for="release of releases">
      <a :href="'/sorties/'+release.id">
        <img class="cover" :src="release.cover" :alt="release.album">
        <div class="info">
          <h3 class="album">{{ release.album }}</h3>
          <div class="band">{{ release.band }}</div>
          <div class="date">{{ release.date | moment('DD/MM/YYYY') }}</div>
          <div class="genre">{{ release.genre }}</div>
        </div>
      </a>
    </article>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'releases',
    data () {
      return {
        ajax: false,
        releases: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/releases.php`)
        .then(response => {
          this.releases = response.data
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

    .album
      color: $red
      font-weight: 400
      font-size: large

    .band
      font-size: medium

    .date
      font-weight: 300
</style>

